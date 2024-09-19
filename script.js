let confettiInterval;
let rainInterval;

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const correctPassword = "230923";
    
    if (passwordInput === correctPassword) {
        document.getElementById("passwordPrompt").style.display = "none";
        document.getElementById("lovePrompt").style.display = "block";
    } else {
        alert("Wrong password! Try again.");
    }
}

function loveResponse(answer) {
    const backgroundMusic = document.getElementById("backgroundMusic");

    if (answer === 'yes') {
        document.body.style.backgroundColor = "lightpink";
        alert("GASP- REALLY??? YAYY I LOVE YOU MOREE BUBU! and i miss you so very much...");
        backgroundMusic.play();
        createConfetti(); // Start creating confetti
    } else {
        document.body.style.backgroundColor = "gray";
        alert("Oh no...now im sed potato...i still love you though MUAH u cant escape me.");
        backgroundMusic.src = "pastlives.mp3"; // Change to the appropriate path
        backgroundMusic.play();
        createRain(); // Start creating rain
    }
}

function createConfetti() {
    const colors = ["#FFC700", "#FF007C", "#FF6F00", "#FF3D00", "#FF6E00"];
    const confettiCount = 100;

    // Clear any existing confetti interval
    clearInterval(confettiInterval);
    
    // Create confetti at intervals
    confettiInterval = setInterval(() => {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 1 + 1 + "s";
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }, 300); // Create new confetti every 300 milliseconds
}

function createRain() {
    const rainCount = 100;

    // Clear any existing rain interval
    clearInterval(rainInterval);
    
    // Create rain at intervals
    rainInterval = setInterval(() => {
        for (let i = 0; i < rainCount; i++) {
            const rainDrop = document.createElement("div");
            rainDrop.className = "raindrop";
            rainDrop.style.left = Math.random() * 100 + "vw";
            rainDrop.style.animationDuration = Math.random() * 1 + 1 + "s"; // Random duration
            document.body.appendChild(rainDrop);
            
            // Remove raindrop after animation
            setTimeout(() => {
                rainDrop.remove();
            }, 2000);
        }
    }, 300); // Create new raindrops every 300 milliseconds
}
