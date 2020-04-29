from django.contrib import admin
from django.urls import path, include
from API.views import list_companies, getCompanyById, getVacanciesByCompany, list_vacancies, getVacancyById, getTopTen
urlpatterns = [
    path('companies/', list_companies),
    path('companies/<int:id>/', getCompanyById),
    path('companies/<int:id>/vacancies/', getVacanciesByCompany),
    path('vacancies/', list_vacancies),
    path('vacancies/<int:id>/', getVacancyById),
    path('vacancies/top_ten/',  getTopTen),
]
