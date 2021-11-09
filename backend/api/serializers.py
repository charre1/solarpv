from rest_framework import serializers
from ..models import Product, Certificate, Service

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields =  [
#             'userID','firstName',
#             'lastName','middleName',
#             'jobTitle','email','phone',
#             'cellPhone','prefix',
#             'clientID']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =  [
            'modelNumber','productName',
            'cellTechnology','cellManufacturer',
            'numberOfCells','numberOfCellsInSeries',
            'numberOfSeriesStrings','numberOfDiodes',
            'productLength','productWidth',
            'productWeight','superstateManufacturer','substrateManufacturer',
            'frameType','frameAdhesive','encapsulateManufacturer',
            'junctionBoxManufacturer'
        ]

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields =  [
            'certificateNumber',
            #'userID',
            'reportNumber','issueDate','standardID',
            'locationID','modelNumber'
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