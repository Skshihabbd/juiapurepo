document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
    const highlight = document.querySelector(".nav-highlight");

    let scrollTop = window.scrollY;
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (scrollTop / totalHeight) * 100; // স্ক্রল অনুযায়ী শতাংশ হিসাব
    
    let navWidth = document.querySelector(".navbar ul").offsetWidth;
    let fillWidth = (navWidth * progress) / 100;

    highlight.style.width = `${fillWidth}px`;
});
