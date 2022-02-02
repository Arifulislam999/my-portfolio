{
    var typed = new Typed(".auto-type", {
        strings: ["Web Developer.", "Graphic Designer.", "FullStack Developer.", "UI/UX Designer."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        // Default value
    });
} {
    var typed = new Typed(".text-s", {
        strings: ["Youtuber.", "Web Developer.", "Graphic Designer.", "FullStack Developer.", "UI/UX Designer."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        // Default value
    });
} {
    const heder = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        heder.classList.toggle("sticky", window.scrollY > 0);
    });
}