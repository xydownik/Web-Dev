from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    description = models.TextField(max_length=255)

    def __str__(self):
        return f"ID:{self.id}, name: {self.name}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "city": self.city,
            "description": self.description

        }

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField()

    def __str__(self):
        return f"ID:{self.id}, name: {self.name}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "company": self.company.name,
            "description": self.description,
            "salary": self.salary
        }

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"
