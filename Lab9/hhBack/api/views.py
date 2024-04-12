import json
from django.http import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data['name'], address=data['address'], city=data['city'], description=data['description'])
        return JsonResponse(company.to_json())



def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data['name'], company=data['company'], description=data['description'], salary=data['salary'])
        return JsonResponse(vacancy.to_json())


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get("name")
        company.address = data.get("address")
        company.city = data.get("city")
        company.description = data.get("description")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})
    return JsonResponse({"id": company_id})


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data.get("name")
        vacancy.address = data.get("address")
        vacancy.city = data.get("city")
        vacancy.description = data.get("description")
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"deleted": True})
    return JsonResponse({"id": vacancy_id})


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    vacancies_json = [v.to_json() for v in company.vacancy.all()]

    return JsonResponse(vacancies_json, safe=False)


def vacancies_top_ten(request):
    vacancies = list(Vacancy.objects.order_by('-salary')[:10])
    return JsonResponse(vacancies, safe=False)
