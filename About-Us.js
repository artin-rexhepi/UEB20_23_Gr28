const reviewsData = [
            { name: "JANE NEDDERY", title: "Perfect spa resort & services!", text: "The minute you walk out of the airport you are greeted with a warm welcome from Royal Villas staff member, and it doesn not stop. The staff truly seems to love their job and want to make sure your visit and stay is everything you expect.", profilePicture: "assets/bootstrap-5.0.2-dist/images/reviewer1.jpg" },
            { name: "SAM BROWN", title: "Greate atmosphere and level of customer service", text: "Gota Royal Villas certificate as a gift a few months ago, and I really had a fantastic spa experience there. I arrived early & was greeted warmly at the door. Surprisingly I didn't have to wait Everything was perfect. Highly recommend this amazing place to everybody!", profilePicture: "assets/bootstrap-5.0.2-dist/images/reviewer2.jpg" },
            { name: "JULIE ADAMS", title: "Wonderful and friendly environment", text: "No better way to rediscover the joy in everyday living than at Royal Villas. Second time to visit and experiences was just as powerful as the first. They exceeded all my expectations once again. This is the place to visit if you are looking for high-quality spa!", profilePicture: "assets/bootstrap-5.0.2-dist/images/reviewer3.jpg" }
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

        function initializeReviews() {
            reviewsData.forEach((review, index) => {
                const card = createReviewCard(review, index);
                reviewsContainer.appendChild(card);
            });

            const profilePictures = createProfilePictures();
            reviewsContainer.appendChild(profilePictures);

            showReview(0);
        }

        initializeReviews();

        
