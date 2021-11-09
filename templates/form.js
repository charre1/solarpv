function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var lname = document.registration.lname;
var ucity = document.registration.city;
var uaddress = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var uphone = document.registration.phone;
var ucompany = document.registration.company;
var ubirthday = document.registration.birthday;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,8,50))
{
if(passid_validation(passid,8,50))
{
if(lastname(lname))
{
if(validsex(umsex,ufsex))
{
if(address(uaddress))
{
if(city(ucity))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(phone(uphone))
{
if(countryselect(ucountry))
{
if(birthday(ubirthday))
{	
if(company(ucompany))
{alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
}
}
}
}
} 
}
}
}
}
}
return false;

} 
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len < mx)
{
alert("User Id should not be empty / length must be atleast "+m);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 || passid_len < mx)
{
alert("Password should not be empty / length must be atleast "+mx);
passid.focus();
return false;
}
return true;
}
function lastname(lname)
{
var lname_len = lname.value.length;
if (lname_len == 0)
{
alert("Last name is required");
lname.focus();
return false;
}
return true;
}
function address(uaddress)
{
var uaddress_len = uaddress.value.length;
if (uaddress_len == 0)
{
alert("Address is required");
uaddress.focus();
return false;
}
return true;
}
function city(ucity)
{
var ucity_len = ucity.value.length;
if (ucity_len == 0)
{
alert("City is required");
ucity.focus();
return false;
}
return true;
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function phone(uphone)
{ 
var numbers = /^[0-9]+$/;
if(uphone.value.match(numbers))
{
return true;
}
else
{
alert('phone must have numeric characters only');
uphone.focus();
return false;
}
}
function company(ucompany)
{
var ucompany_len = ucompany.value.length;
if (ucompany_len == 0)
{
alert("Company is required");
ucompany.focus();
return false;
}
else{
return true;
}
}
function birthday(ubirthday)
{
var ubirthday_len = ubirthday.value.length;
if (ubirthday_len == 0)
{
alert("Birthday is required");
ubirthday.focus();
return false;
}
return true;
}
 function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
return true;
}
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i = 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
