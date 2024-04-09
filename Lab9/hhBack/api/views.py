from django.http import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    companies = list(Company.objects.all().values())
    return JsonResponse(companies, safe=False)


def vacancy_list(request):
    vacancies = list(Vacancy.objects.all().values())
    return JsonResponse(vacancies, safe=False)


def company_detail(request, company_id):
    company = list(Company.objects.filter(id=company_id).values())
    return JsonResponse(company, safe=False)


def vacancy_detail(request, vacancy_id):
    vacancy = list(Vacancy.objects.filter(id=vacancy_id).values())
    return JsonResponse(vacancy, safe=False)


def company_vacancies(request, id):
    vacancies = list(Company.objects.filter(vacancy_id=id).values())
    return JsonResponse(vacancies, safe=False)


def vacancies_top_ten(request):
    vacancies = list(Vacancy.objects.order_by('-salary')[:10])
    return JsonResponse(vacancies, safe=False)
