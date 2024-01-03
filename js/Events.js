// -------------------------- Butoni back to top --------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Merr butonin
    const mybutton = document.getElementById("backToTopBtn");
    const buttonAudio = document.getElementById('backToTopSound')
    // Kur perdoruesi scroll poshte 500px, atehere shfaqe butonin
    window.onscroll = () => scrollFunction();

    const scrollFunction = () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
            mybutton.classList.add("show");
        } else {
            mybutton.classList.remove("show");
        }
    };

    // Kur useri klikon butonin, ktheje ne top te faqes
    mybutton.addEventListener("click", () => topFunction());

    const topFunction = () => {
        // Scrolli per ne top te behet ne menyre te bute dhe njekohesisht te luhet audio mp3
        buttonAudio.play();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});