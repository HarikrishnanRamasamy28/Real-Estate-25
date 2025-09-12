/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});











/* search */
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  priceRange.addEventListener('input', () => {
    priceValue.textContent = `₹${priceRange.value}`;
  });







//   function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 12.9716, lng: 77.5946 }, // Coordinates for Bangalore, India
//     zoom: 12,
//   });

//   const marker = new google.maps.Marker({
//     position: { lat: 12.9716, lng: 77.5946 },
//     map: map,
//     title: "Featured Property Location",
//   });
// }






/* JS (add before </body> once; powers the reveal-on-scroll) */

  (function(){
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target); // animate only once
        }
      });
    }, { threshold: 0.2 });
    els.forEach(el=>io.observe(el));
  })();