from django.urls import path
from api.views.a_fbv import company_list,company_detail,company_vacancies,vacancy_detail,vacancy_list
from api.views.b_cbv import CompanyListAPIView,CompanyDetailAPIView,CompanyVacanciesAPIView,VacancyListAPIView,VacancyDetailAPIView
from api.views.views import CompanyList,CompanyDetails,CompanyVacancies,VacancyList,VacancyDetails
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', CompanyList.as_view()),
    path('companies/<int:pk>/', CompanyDetails.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacancies.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetails.as_view()),
]