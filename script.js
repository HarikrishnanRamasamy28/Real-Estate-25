




const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});






 let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  // 🔥 Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);







/* This js for dropdown menu */
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('li.dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('a');

  trigger.addEventListener('click', function(e) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function(e) {
  document.querySelectorAll('li.dropdown.open').forEach(openDrop => {
    if (!openDrop.contains(e.target)) {
      openDrop.classList.remove('open');
    }
  });
});
});











/*== contact's send message button ==*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submission

  if (this.checkValidity()) {
    // ✅ Clear form fields
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
  } else {
    // ❌ Invalid → show browser’s validation messages
    this.reportValidity();
  }
});