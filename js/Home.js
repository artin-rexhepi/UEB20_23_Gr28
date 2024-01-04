

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

// -------------------------- Validimi i formes per rezervim --------------------------
function validateDates() {
    // Merr vlerat e check-in dhe check-out
    let checkInDate = new Date(document.getElementById('checkInDate').value);
    let checkOutDate = new Date(document.getElementById('checkOutDate').value);

    // Merr daten aktuale
    let currentDate = new Date();

    // Data minimale kur mund te kryhet nje check-in eshte nje jave nga data aktuale
    let minCheckInDate = new Date(currentDate);
    minCheckInDate.setDate(currentDate.getDate() + 6);

    // Rezervuesi duhet te rrije se paku nje dite qe te mund te bej check-out
    // Pra data minimale kur mund te bej check-out eshte 1 dite pasi ka bere check-in
    let minCheckOutDate = new Date(checkInDate);
    minCheckOutDate.setDate(checkInDate.getDate() + 1);

    // Validimi i dates se check-in
    if (checkInDate < currentDate || checkInDate < minCheckInDate) {
        alert("Invalid check-in date. Must be at least 7 days from today.");
        document.getElementById('checkInDate').value = "";
    }

    // Validimi i dates se check-out
    if (checkOutDate < minCheckOutDate) {
        alert("Invalid check-out date. Must be at least a day from the check-in date.");
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

const validateAdults = () => {
    const adultsSelect = document.getElementById('adultsSelect');
    const adultsValue = adultsSelect.value; // e konverton ne numer te sistemit decimal.

    if(adultsValue === "0"){
        alert("Invalid number of recipients.");
        adultsSelect.value= "";
    }
};

// -------------------------- Butoni qe ridirekton tek booking form --------------------------
const scrollToElement = () => {
    const destinacioniElement = document.getElementById('booking');

    if (destinacioniElement) {
        console.log('Scrolling to destinacioni');
        destinacioniElement.scrollIntoView({ behavior: 'smooth' });
    }
};

