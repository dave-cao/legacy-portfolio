const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    })
})

const navButton = document.querySelector(".navButton");

navButton.addEventListener("click", () => {
    alert("My info is on the bottom of the screen!")
})



