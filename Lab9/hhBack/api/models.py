from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    description = models.TextField(max_length=255)

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField()

    def __str__(self):
        return self.name
