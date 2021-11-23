from rest_framework import serializers
from ..models import Product, Certificate, Service

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =  [
            'modelNumber','productName',
            'cellTechnology','cellManufacturer',
            'numberOfCells','numberOfCellsInSeries',
            'numberOfSeriesStrings','numberOfDiodes',
            'superstateManufacturer','substrateManufacturer',
            'frameType','frameAdhesive','encapsulateManufacturer',
            'junctionBoxManufacturer'
        ]

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields =  [
            'certificateNumber',
            #'userID',
            'standardID',
            'modelNumber'
        ]

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields =  [
            'serviceName',
            #'description',
            'isFlRequired',
            'FlFrequency',
            'standardID'
        ]