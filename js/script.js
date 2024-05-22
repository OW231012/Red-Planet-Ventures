/* HEADER
searchbar*/






/* HOME PAGE
Image carousel W3Schools

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}*/






/*FLIGHTS PAGE
Filter

ticket sales counter



star rating system

view cart*/







/* CONTACTS PAGE
FORM
function myFunction() {
    alert("Thanks for reaching out to us!");
}

let form = document.forms[contactForm];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();
}

let formData = {
    "Name Surname": this.name.value,
    "spaceship@spacex.co.za": this.email.value,
    "Subject of the message": this.subject.value,
    "Type your message here": this.message.value,
}

*/



/* FOOTER */





