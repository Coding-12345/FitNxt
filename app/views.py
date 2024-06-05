from django.shortcuts import render,HttpResponse,HttpResponseRedirect,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse

def firstpage(request):
    
    return render(request,"first.html")
def home(request):
    return render(request,"home.html")
def hn(request):
    return render(request,"home_normal.html")
def hpu(request):
    return render(request,"pushup.html")
def hsu(request):
    return render(request,"situp.html")
def hsq(request):
    return render(request,'squats.html')
def hpul(request):
    return render(request,"pullup.html")
def signupview(request):
    if request.method == "POST":
        email = request.POST.get('mail')
        password = request.POST.get('pass')

        # Check if a user with the given email already exists
        if User.objects.filter(username=email).exists():
            # Handle the case where the user already exists
            
            return HttpResponse("User with this email already exists!")

        # Use email as the username for simplicity
        user = User.objects.create_user(username=email, email=email, password=password)

        # Redirect to the home page or any other desired page
        return redirect('home')

    return render(request, "signup.html")
def loginview(request):
    if request.method=="POST":
        username=request.POST.get('mail')
        password=request.POST.get('pass')
        # print(User.objects.filter(username=username)
        user =authenticate(username=username,password=password)
        print(user)
        if user is not None:
            login(request,user)
            print("login")
            return HttpResponseRedirect('home')
    return render(request,"login.html")

def logoutview(request):
    logout(request)
    return HttpResponseRedirect('index')
def sampleview(request):
    return render(request,"sample.html")
def sample2view(request):
    return render(request,"sample2.html")
def process_data(request):
    if request.method=='POST':
        print("I have got data")
        age=request.POST.get('age')
        gender=request.POST.get('gender')
        height=request.POST.get('height')
        weight=request.POST.get('weight')
        bmi=request.POST.get('bmi')
        print(age,gender,height,weight,bmi)
        # if int(age)<20 and gender=='male' and float(bmi)>100:
        #     print("yes")
        print("just before")
        return render(request,'sample.html',{"age":age,"gender":gender})
    print("after it")
    return JsonResponse({'error': 'Invalid request method'}) 