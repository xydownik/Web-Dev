from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    address = serializers.CharField(max_length=255)
    city = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.city = validated_data.get('city', instance.city)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'salary', 'description', 'company']
