
// NAVBAR - amikor a felhasználó a dokumentumot legörgeti 400px-t, 
// a navigációs sáv animáltan előjön a lap tetején.
// When the user scrolls down 400px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
}

// NAVBAR - a navigációs sáv elemeire kattintva az oldal gördül a megadott elemre/scrolling function
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }  
  });
});

//SECTION 3 - MODAL 
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('navbar').style.display = 'none';
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navbar').style.display = 'block';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

