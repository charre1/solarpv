from django.db import models
from django.db.models.fields import BooleanField
from django.contrib.auth.models import User
from django.utils import timezone


class Client(models.Model):
    clientName = models.CharField(max_length=30)
    clientType = models.CharField(max_length=30)

    def __str__(self):
        return self.clientName

class Location(models.Model):
    country = models.CharField(max_length=20)

    def __str__(self):
        return self.country

class TestStandard(models.Model):
    standardName = models.CharField(max_length=15)
    description = models.TextField()
    publishedDate = models.DateTimeField(default=timezone.now) 

    def __str__(self):
        return self.standardName

class TestSequence(models.Model):
    sequenceName = models.CharField(max_length=20)

    def __str__(self):
        return self.sequenceName

class Product(models.Model):
    modelNumber = models.CharField(max_length=15)
    productName = models.CharField(max_length=30)
    cellTechnology = models.CharField(max_length=15)
    cellManufacturer = models.CharField(max_length=30)
    numberOfCells = models.CharField(max_length=15)
    numberOfCellsInSeries = models.CharField(max_length=15)
    numberOfSeriesStrings = models.CharField(max_length=15)
    numberOfDiodes = models.CharField(max_length=15)
    superstateManufacturer = models.CharField(max_length=30)  
    substrateManufacturer = models.CharField(max_length=30)
    frameType = models.CharField(max_length=15)
    frameAdhesive = models.CharField(max_length=25)
    encapsulateManufacturer = models.CharField(max_length=30)  
    junctionBoxManufacturer = models.CharField(max_length=30)

    def __str__(self):
        return self.productName

class PerformanceData(models.Model):

    productName = models.ForeignKey(Product, on_delete=models.CASCADE)
    sequencID = models.ForeignKey(TestSequence, on_delete=models.CASCADE)
    maxSystemVoltage = models.CharField(max_length=15)
    voc = models.CharField(max_length=15)
    isc = models.CharField(max_length=15)
    vmp = models.CharField(max_length=15)
    imp = models.CharField(max_length=15)
    pmp = models.CharField(max_length=15)
    ff = models.CharField(max_length=15)


class Service(models.Model):
    serviceName = models.CharField(max_length=25)
    #description = models.TextField
    isFlRequired = BooleanField()
    FlFrequency =  models.CharField(max_length=15)
    standardID = models.ForeignKey(TestStandard, on_delete=models.CASCADE)

    def __str__(self):
        return self.serviceName

class Certificate(models.Model):
    certificateNumber = models.CharField(max_length=15)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    standardID = models.ForeignKey(TestStandard, on_delete=models.CASCADE)
    modelNumber = models.ForeignKey(Product, on_delete=models.CASCADE)



