// 1. Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
});

// 2. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 3. Form Validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("contactForm").innerHTML = `
            <div class="alert alert-success" role="alert">
                Thank you for contacting Prince Luxe Resort! We will get back to you shortly.
            </div>`;
    } else {
        alert("Please fill out all fields.");
    }
});


// 4. Dynamic Room Loading with Images
// Room Container & Load More Button
const roomContainer = document.getElementById("roomContainer");
const loadMoreButton = document.getElementById("loadMore");
let roomCount = 3;

// Function to Attach "Book Now" Click Event to All Buttons
function attachBookNowEventListeners() {
    const bookNowButtons = document.querySelectorAll(".book-now-btn");
    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card");
            const roomTitle = card.querySelector(".card-title").textContent;

            // Set the Room Name in Modal
            document.getElementById("selectedRoom").textContent = roomTitle;

            // Show Modal (Bootstrap)
            const bookNowModal = new bootstrap.Modal(document.getElementById("bookNowModal"));
            bookNowModal.show();
        });
    });
}

// Load More Button Click Event
loadMoreButton.addEventListener("click", () => {
    const newRooms = [
        {
            title: "Family Suite",
            text: "Perfect for families with extra space and amenities.",
            price: "$300/night",
            image: "https://twoseasonsresorts.com/boracay/wp-content/uploads/2017/02/Family-Grand-Suite-1.jpg"
        },
        {
            title: "Honeymoon Suite",
            text: "Romantic getaway with a private jacuzzi.",
            price: "$400/night",
            image: "https://www.applebudcottagesandhotel.com/images/honeymoon/2.jpg"
        },
        {
            title: "Ocean View Room",
            text: "Stunning views of the ocean from your balcony.",
            price: "$350/night",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZ0FgIQj3IWRpDRuVlDKR4lRxwcM4G77gaQ&s"
        }
    ];

    newRooms.forEach(room => {
        const roomHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${room.image}" class="card-img-top" alt="${room.title}">
                    <div class="card-body">
                        <h5 class="card-title">${room.title}</h5>
                        <p class="card-text">${room.text}</p>
                        <p class="card-text"><strong>${room.price}</strong></p>
                        <button class="btn btn-primary book-now-btn">Book Now</button>
                    </div>
                </div>
            </div>
        `;
        roomContainer.insertAdjacentHTML("beforeend", roomHTML);
    });

    // Update Room Count
    roomCount += 3;
    if (roomCount >= 6) {
        loadMoreButton.style.display = "none";
    }

    // Attach "Book Now" Event Listeners to Newly Added Rooms
    attachBookNowEventListeners();
});

// Attach Click Events Initially
attachBookNowEventListeners();


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleAuthText = document.getElementById("toggleAuthText");
    const switchToSignup = document.getElementById("switchToSignup");

    switchToSignup.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.toggle("d-none");
        signupForm.classList.toggle("d-none");
        toggleAuthText.innerHTML = loginForm.classList.contains("d-none")
            ? 'Already have an account? <a href="#" id="switchToLogin" class="toggle-link">Login</a>'
            : 'Don\'t have an account? <a href="#" id="switchToSignup" class="toggle-link">Sign Up</a>';

        document.getElementById("switchToLogin")?.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.classList.remove("d-none");
            signupForm.classList.add("d-none");
            toggleAuthText.innerHTML = 'Don\'t have an account? <a href="#" id="switchToSignup" class="toggle-link">Sign Up</a>';
        });
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login Successful! (Just UI, No Backend Yet)");
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Signup Successful! (Just UI, No Backend Yet)");
    });
});
// Back to Top Button Functionality
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Countdown Timer
function startCountdown(durationInHours) {
    let timer = durationInHours * 60 * 60; // Convert hours to seconds
    const display = document.getElementById("offer-timer");

    const countdown = setInterval(() => {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (timer <= 0) {
            clearInterval(countdown);
            display.textContent = "⏳ Offer Expired!";
            document.getElementById("claim-offer").disabled = true;
            document.getElementById("claim-offer").style.background = "#ccc";
            document.getElementById("claim-offer").style.cursor = "not-allowed";
        } else {
            timer--;
        }
    }, 1000);
}

// Start 24-hour countdown
document.addEventListener("DOMContentLoaded", function () {
    startCountdown(24);

    // Claim Offer Button Click Event
    document.getElementById("claim-offer").addEventListener("click", () => {
        alert("🎉 Congratulations! Your exclusive offer has been claimed.");
    });
});


 // Initialize AOS (Animation on Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out", // Smooth easing
        once: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.querySelector(".subscribe-btn");

    subscribeBtn.addEventListener("click", function () {
        const emailInput = document.querySelector(".newsletter input").value.trim();

        if (emailInput === "") {
            alert("Please enter a valid email address!");
            return;
        }

        if (!validateEmail(emailInput)) {
            alert("Invalid email format! Please enter a correct email.");
            return;
        }

        alert("🎉 Thank you for subscribing! You'll receive exclusive deals soon.");
        document.querySelector(".newsletter input").value = ""; // Clear input field
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
 
