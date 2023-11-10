
const featureComingSoonBtn = document.getElementById('featureComingSoonBtn');

featureComingSoonBtn.addEventListener('click', async () => {
  const result = confirm("This feature will be added soon. Thank you for your patience! If you want to reach out feel free to message me on my linkedin.");
})
// gallery js code
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


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

// theme swithcer code
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// } ) )



// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
