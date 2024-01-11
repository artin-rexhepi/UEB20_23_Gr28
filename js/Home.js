

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
    try {
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
            throw new Error("Invalid check-in date. Must be at least 7 days from today.");
        }

        // Validimi i dates se check-out
        if (checkOutDate < minCheckOutDate) {
            throw new Error("Invalid check-out date. Must be at least a day from the check-in date.");
        }

        // Sigurimi qe data e check-out te mos mund te behet para dates se check-in
        if (checkOutDate <= checkInDate) {
            throw new Error("Invalid check-out date. Must be later than check-in date.");
        }

        // Sigurimi qe datat e selektuara nuk kane kaluar. Pra nuk jane ne te shkuaren.
        if (checkInDate < currentDate || checkOutDate < currentDate) {
            throw new Error("Invalid dates. Please select future dates.");
        }
    } catch (error) {
        console.error("Validation error:", error.message);
        alert(error.message);
        document.getElementById('checkInDate').value = "";
        document.getElementById('checkOutDate').value = "";
    }
}

const validateAdults = () => {
    try {
        const adultsSelect = document.getElementById('adultsSelect');

        const adultsValue = parseInt(adultsSelect.value, 10); // e konverton ne numer te sistemit decimal.

        if (isNaN(adultsValue) || adultsValue === 0) {
            throw new Error("Invalid number of recipients.");
        }
    } catch (error) {
        console.error("Validation error in validateAdults:", error.message);
        alert(error.message);
        adultsSelect.value = "";
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

// -------------------------- Ridirektimi ne klikimin e blogut --------------------------

function LinkObject(linkId, linkUrl) {
    this.linkId = linkId; //id e div-it qe do te klikohet
    this.linkUrl = linkUrl; // url-ja e linkut qe deshirojme qe te vizitojme

    // Metoda qe ben set up click event listener
    this.setupClickListener = function () {
        document.getElementById(this.linkId).addEventListener('click', () => {
            window.location.href = this.linkUrl;
        });
    };
}

// Krijimi i instacave te objektit per secilin link
const link1 = new LinkObject('artikulli1', 'https://boutiquehotelnews.com/');
const link2 = new LinkObject('artikulli2', 'https://www.anantara.com/en/blog');
const link3 = new LinkObject('artikulli3', 'https://traveltriangle.com/blog/hotels-in-unawatuna/');

// Per secilen instance te objektit te linqeve, perdorim metoden per ridirektim tek linqet e deklaruara
link1.setupClickListener();
link2.setupClickListener();
link3.setupClickListener();



