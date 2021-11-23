from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from .forms import SignUpForm
from backend.models import Certificate


def index(request):
    return render(request, 'templates/frontend/index.html' )

def signup_view(request):
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        user.profile.first_name = form.cleaned_data.get('first_name')
        user.profile.last_name = form.cleaned_data.get('last_name')
        user.profile.company = form.cleaned_data.get('company')
        user.profile.email = form.cleaned_data.get('email')
        user.profile.job_title = form.cleaned_data.get('job_title')
        user.save()

        return redirect('index')
    else:
        form = SignUpForm()
    return render(request, 'templates/frontend/contact.html', {'form': form})


def search(request):
    certification = Certificate.objects.order_by('standardID')
    context = {'certification' : certification}
    return render(request, 'templates/frontend/search.html', context)

