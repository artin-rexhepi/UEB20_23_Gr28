const reviewsData = [
            { name: "JANE NEDDERY", title: "Perfect spa resort & services!", text: "The minute you walk out of the airport you are greeted with a warm welcome from Royal Villas staff member, and it doesn not stop. The staff truly seems to love their job and want to make sure your visit and stay is everything you expect.", profilePicture: "/assets/images/reviewer1.jpg" },
            { name: "SAM BROWN", title: "Greate atmosphere and level of customer service", text: "Gota Royal Villas certificate as a gift a few months ago, and I really had a fantastic spa experience there. I arrived early & was greeted warmly at the door. Surprisingly I didn't have to wait Everything was perfect. Highly recommend this amazing place to everybody!", profilePicture: "/assets/images/reviewer2.jpg" },
            { name: "JULIE ADAMS", title: "Wonderful and friendly environment", text: "No better way to rediscover the joy in everyday living than at Royal Villas. Second time to visit and experiences was just as powerful as the first. They exceeded all my expectations once again. This is the place to visit if you are looking for high-quality spa!", profilePicture: "/assets/images/reviewer3.jpg" }
        ];

        let currentIndex = 0;
        const reviewsContainer = document.getElementById("reviews-container");

        function createReviewCard(review, index) {
            const card = document.createElement("div");
            card.classList.add("review-card");

            const titleElement = document.createElement("h3");
            titleElement.classList.add("review-title") 
            titleElement.textContent = review.title;

            const textElement = document.createElement("p");
            textElement.classList.add("review-text")
            textElement.textContent = review.text;

            const nameElement = document.createElement("p");
            nameElement.classList.add("reviewer-name")
            nameElement.textContent = review.name;

            card.appendChild(titleElement);
            card.appendChild(textElement);
            card.appendChild(nameElement);

            return card;
        }

        function createProfilePictures() {
            const profileContainer = document.createElement("div");
            profileContainer.classList.add("profile-container");

            reviewsData.forEach((review, index) => {
                const profilePictureElement = document.createElement("img");
                profilePictureElement.classList.add("profile-picture-small");
                profilePictureElement.src = review.profilePicture;
                profilePictureElement.alt = "Profile Picture";
                profilePictureElement.addEventListener("click", () => showReview(index));
                profileContainer.appendChild(profilePictureElement);
            });

            return profileContainer;
        }

        function showReview(index) {
            const reviewCards = document.querySelectorAll(".review-card");
            reviewCards.forEach((card, i) => {
                card.style.display = i === index ? "block" : "none";
            });

            const profilePictures = document.querySelectorAll(".profile-picture-small");
            profilePictures.forEach((picture, i) => {
                picture.classList.toggle("active", i === index);
            });

            currentIndex = index;
        }

        //Ndryshim automatik i reviewers
        function startReviewRotation() {
            setInterval(() => {
                let nextIndex = (currentIndex + 1) % reviewsData.length;
                showReview(nextIndex);
            }, 15000); // Ndrysho review pas 15 sekondave ne menyre automatike
        }

        function initializeReviews() {
            reviewsData.forEach((review, index) => {
                const card = createReviewCard(review, index);
                reviewsContainer.appendChild(card);
            });

            const profilePictures = createProfilePictures();
            reviewsContainer.appendChild(profilePictures);

            showReview(0);
            startReviewRotation();
        }

        initializeReviews();

        

        const teamMembers = [
            { name: 'Theresa Smith', title: 'General Manager', imgSrc: '/assets/images/staff1.jpg', social: { instagram: '/assets/images/instagram.png', facebook: '/assets/images/facebook.png', twitter: '/assets/images/twitter.png' } },
            { name: 'Albert Mills', title: 'Cosmotologist', imgSrc: '/assets/images/staff2.jpg', social: { instagram: '/assets/images/instagram.png', facebook: '/assets/images/facebook.png', twitter: '/assets/images/twitter.png' } },
            { name: 'Sandra Adams', title: 'Receptionist', imgSrc: '/assets/images/staff3.jpg', social: { instagram: '/assets/images/instagram.png', facebook: '/assets/images/facebook.png', twitter: '/assets/images/twitter.png' } }
        ];

        // Function to create a team member card
        function createTeamMemberCard(member) {
            const teamContainer = document.getElementById('teamContainer');

            const memberCard = document.createElement('div');
            memberCard.classList.add('team-member');
            
            const img = document.createElement('img');
            img.classList.add('member-img');
            img.src = member.imgSrc;
            img.alt = `Profile of ${member.name}`;

            const infoContainer = document.createElement('div');
            infoContainer.classList.add('member-info');

            const name = document.createElement('div');
            name.classList.add('member-name');
            name.textContent = member.name;

            const title = document.createElement('div');
            title.classList.add('member-title');
            title.textContent = member.title;

            

            const socialIcons = document.createElement('a');
            socialIcons.classList.add('social-icons');

            // Create social icons
            for (const platform in member.social) {
                const iconImg = document.createElement('img');
                iconImg.src = member.social[platform];
 
                socialIcons.appendChild(iconImg);
            }
            infoContainer.appendChild(name);
            
            infoContainer.appendChild(title);
            memberCard.appendChild(img);
            memberCard.appendChild(infoContainer);
            memberCard.appendChild(socialIcons);

            // Append the card to the team container
            teamContainer.appendChild(memberCard);
        }

        // Create team member cards
        teamMembers.forEach(createTeamMemberCard);


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