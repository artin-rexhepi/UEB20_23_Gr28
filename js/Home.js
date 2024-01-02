

// -------------------------- Butoni back to top --------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Get the button
    const mybutton = document.getElementById("backToTopBtn");

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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});


 
// -------------------------- Reveal on scrolli --------------------------

document.addEventListener("DOMContentLoaded", () => {
    const scrollInText = document.getElementById("myScrollInText");

    // Check whether the text is in view when the page loads
    checkScroll();

    // Add event listener for scroll events
    window.addEventListener("scroll", () => {
        checkScroll();
    });

    function checkScroll() {
        // Get the position of the text element
        const elementPosition = scrollInText.getBoundingClientRect();

        // Check if the top and bottom of the element are in view
        const inView = (elementPosition.top >= 0 && elementPosition.bottom <= window.innerHeight);

        if (inView) {
            scrollInText.classList.add("show");
        } else {
            scrollInText.classList.remove("show");
        }
    }
});




// -------------------------- Slide-in text prej karusel --------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'slide-in'
    const slideInElements = document.querySelectorAll('.slide-in');

    // Function to trigger the slide-in effect
    const slideIn = (element) => {
      element.style.opacity = 1;
      element.style.transform = 'translateX(0)';
    };

    // Iterate over each slide-in element and trigger the effect
    slideInElements.forEach((element) => {
      slideIn(element);
    });
  });



// -------------------------- Validimi i datave per form --------------------------
function validateDates() {
    // Merr vlerat e check-in dhe check-out
    let checkInDate = new Date(document.getElementById('checkInDate').value);
    let checkOutDate = new Date(document.getElementById('checkOutDate').value);

    // Merr daten aktuale
    let currentDate = new Date();

    // Data minimale kur mund te kryhet nje check-in eshte nje jave nga data aktuale
    let minCheckInDate = new Date(currentDate);
    minCheckInDate.setDate(currentDate.getDate() + 7);

    // Rezervuesi duhet te rrije se paku dy dite qe te mund te bej check-out
    // Pra data minimale kur mund te bej check-out eshte 2 dite pasi ka bere check-in
    let minCheckOutDate = new Date(checkInDate);
    minCheckOutDate.setDate(checkInDate.getDate() + 2);

    // Validimi i dates se check-in
    if (checkInDate < currentDate || checkInDate < minCheckInDate) {
        alert("Invalid check-in date. Must be at least 7 days from today.");
        document.getElementById('checkInDate').value = "";
    }

    // Validimi i dates se check-out
    if (checkOutDate < minCheckOutDate) {
        alert("Invalid check-out date. Must be at least 2 days from the check-in date.");
        document.getElementById('checkOutDate').value = "";
    }

    // Sigurimi qe data e check-out te mos mund te behet para dates se check-in
    if (checkOutDate <= checkInDate) {
        alert("Invalid check-out date. Must be later than check-in date.");
        document.getElementById('checkOutDate').value = "";
    }

    // Sigurimi qe datat e selektuara nuk kane kaluar. Pra nuk jane ne te shkuaren.
    if (checkInDate < currentDate || checkOutDate < currentDate) {
        alert("Invalid dates. Please select future dates.");
        document.getElementById('checkInDate').value = "";
        document.getElementById('checkOutDate').value = "";
    }

}
