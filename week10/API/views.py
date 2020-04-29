from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from API.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from API.serializers import CompanySerializer
import json
# Create your views here
@csrf_exempt
def list_companies(request):
    if request.method == 'GET':
        print(1)
        data = Company.objects.all()
        serializer = CompanySerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        print(123123)
        request_body = json.loads(request.body)
        serializer = CompanySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error)
    return JsonResponse({"bad request"})

@csrf_exempt
def getCompanyById(request, id):
    try:
        company = Company.objects.get(id=id)
    except:
        return HttpResponse("Error not found " + str(id))
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=request_body)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        pass



def getVacanciesByCompany(request, id):
    try:
        company = Company.objects.get(id=id)
    except:
        return HttpResponse("Error not found " + str(id))
    try:
        vacancy_data = company.vacancy_set.all()
        vacancy_json = [i.to_json() for i in vacancy_data]
        return JsonResponse(vacancy_json, safe=False)
    except:
        return HttpResponse('error')

def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def getVacancyById(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse(vacancy.to_json(), safe=False)
    except:
        return HttpResponse(str(id) + " didn't find")

def getTopTen(request):
    try:
        vacancy = Vacancy.objects.order_by("-salary")
        vacancy = [i.to_json() for i in vacancy[:5]]
        return JsonResponse(vacancy, safe=False)
    except:
        return HttpResponse(str(id) + " didn't find")
