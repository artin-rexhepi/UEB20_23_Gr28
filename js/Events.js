        // -------------------------- Butoni back to top --------------------------
        document.addEventListener("DOMContentLoaded", () => {
            // Get the button
            const mybutton = document.getElementById("backToTopBtn");
            const buttonAudio = document.getElementById('backToTopSound')
            // When the user scrolls down 90px from the top of the document, show the button
            window.onscroll = () => scrollFunction();
        
            const scrollFunction = () => {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                    mybutton.classList.add("show");
                } else {
                    mybutton.classList.remove("show");
                }
            };
        
            // When the user clicks on the button, scroll to the top of the document
            mybutton.addEventListener("click", () => topFunction());
        
            const topFunction = () => {
                // Smooth scroll to the top
                buttonAudio.play();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            };
        });