// Countdown Timer for Leen's Birthday
const countdown = document.getElementById('countdown');
const birthday = new Date('November 20, 2024 00:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdown.innerHTML = "Happy Birthday, Leen!";
    }
}, 1000);


// Select the button and gift card
const readyButton = document.querySelector('.ready');
const giftCard = document.querySelector('.card.hidden');
const giftSection = document.querySelector('#gift');

// Track clicks and animation interval
let clickCount = 0;
let intervalId;

// Add an event listener to the button
readyButton.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        // First click: change text, move to the right, and update colors
        readyButton.textContent = 'ARE YOU SURE?';
        readyButton.style.position = 'absolute';
        readyButton.style.right = '20px';
        readyButton.style.top = '50%';
        readyButton.style.transform = 'translateY(-50%)';
        readyButton.style.backgroundColor = 'red';
        readyButton.style.color = 'white';
    } else if (clickCount === 2) {
        // Second click: change colors and move to the left
        readyButton.textContent = 'OKAY CLICK ME THEN';
        readyButton.style.backgroundColor = 'black';
        readyButton.style.color = 'red';
        readyButton.style.right = 'auto';
        readyButton.style.left = '20px';
    } else if (clickCount === 3) {
        // Third click: start chaotic movement with 360 rotation
        readyButton.textContent = 'CATCH ME!';
        startCrazyMovement();
    } else if (clickCount === 4) {
        // Stop movement, reveal the gift card, and hide the button
        clearInterval(intervalId); // Stop the movement
        readyButton.style.display = 'none';
        giftCard.classList.remove('hidden');
    }
});

// Function for random fast movement with rotation
function startCrazyMovement() {
    let rotation = 0; // Track rotation angle
    intervalId = setInterval(() => {
        // Randomize the button's position within the gift section
        const maxX = giftSection.offsetWidth - readyButton.offsetWidth;
        const maxY = giftSection.offsetHeight - readyButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Increment rotation
        rotation += 30;
        if (rotation >= 360) rotation = 0; // Reset rotation after full turn

        readyButton.style.left = `${randomX}px`;
        readyButton.style.top = `${randomY}px`;
        readyButton.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }, 250); // Moves every 50ms for a faster effect
}

let leenImg = document.querySelector("img");
leenImg.addEventListener("click", function () {
    leenImg.classList.remove("blurred");
    alert("You're cute aren't ya?");
});