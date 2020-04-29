from rest_framework import serializers
from API.models import Company


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    def create(self, validated_data):
        company = Company()
        company.name = validated_data.get('name')
        company.address = validated_data.get('address')
        company.description = validated_data.get('description')
        company.city = validated_data.get('city')
        company.save()
        return company
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        return instance



