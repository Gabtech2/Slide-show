document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const background = document.getElementById("background");
    const audio = document.getElementById("audio");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    // Flag to check if the slider has been started
    let sliderStarted = false;

    // Function to switch music
    function playMusic(src) {
        audio.src = src;
        audio.play();
    }

    // Function to update the slider position and background
    function updateSlider() {
        // Move the slider to the correct position
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update the background with the current slide's image or video thumbnail
        const currentSlide = slides[currentIndex];
        const img = currentSlide.querySelector("img");
        const video = currentSlide.querySelector("video");
       /*   if (img) {
            background.style.backgroundImage = url('image.jpg');
        } else if (video) {
            background.style.backgroundImage = url('video.jpg');
        }
    } *

    // Event listener for the "next" button
    nextButton.addEventListener("click", () => {
        if (!sliderStarted) {
            // Play music1.mp3 when the slider starts
            playMusic("music1.mp3");
            sliderStarted = true;
        }

        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = slides.length - 1;

            // Play music2.mp3 when the slider ends
            playMusic("music2.mp3");
        } else {
            updateSlider();
        }
    });

    // Event listener for the "previous" button
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Set the initial state
    updateSlider();
});