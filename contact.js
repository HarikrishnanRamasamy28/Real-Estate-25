const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});








/*= submit button =*/
document.getElementById("quickForm").addEventListener("submit", function(event) {
event.preventDefault(); // stop default reload

if (this.checkValidity()) {
    // ✅ Clear inputs
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
} else {
    // ❌ Show browser’s validation errors
    this.reportValidity();
}
});











document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // stop default reload

if (this.checkValidity()) {
    // ✅ Clear the form inputs
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
} else {
    // ❌ Show browser’s validation errors
    this.reportValidity();
}
});