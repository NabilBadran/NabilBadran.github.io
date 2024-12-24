// theme swithcer code


// gallery js code

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



const switchTheme = (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme');

  newTheme = (dataTheme === 'light') ? 'dark' : 'light';

  rootElem.setAttribute('data-theme', newTheme);

  // set the new local stoarage item
  localStorage.setItem('theme',newTheme)
};

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);



const featureComingSoonBtn = document.getElementById('featureComingSoonBtn');

featureComingSoonBtn.addEventListener('click', async () => {
  const result = confirm("This feature will be added soon. Thank you for your patience");
})

let slideIndex = 1;
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
}
