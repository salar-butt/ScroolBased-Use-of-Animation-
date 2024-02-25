var slides = document.querySelectorAll(".slide");
var counter = 0;
var intervalId;

// Set up initial positions of slides
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to slide to the previous image
var goPrev = () => {
    counter--;
    if (counter <
    
    0) {
        counter = slides.length - 1; // Set counter to the last index if it goes below 0
    }
    clearInterval(intervalId); // Stop automatic sliding when manual navigation is used
    slideImage();
};

// Function to slide to the next image
var goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Set counter to 0 if it exceeds the last index
    }
    clearInterval(intervalId); // Stop automatic sliding when manual navigation is used
    slideImage();
};

// Function to slide the images
var slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Function to start automatic sliding
var startAutoSlide = () => {
    intervalId = setInterval(() => {
        goNext();
    }, 5000); // Change 3000 to the desired interval in milliseconds
};

// Start automatic sliding initially
startAutoSlide();

// Event listeners for manual navigation buttons
document.querySelector(".nav button:nth-child(1)").addEventListener("click", goPrev);
document.querySelector(".nav button:nth-child(2)").addEventListener("click", goNext);

// Event listener to restart automatic sliding when it's stopped
document.querySelector(".nav button:nth-child(2)").addEventListener("mouseenter", startAutoSlide);