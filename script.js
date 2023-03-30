const pointBtn = document.getElementById("point-btn");
const homeDisplay = document.getElementById("home-display");
const guestDisplay = document.getElementById("guest-display");
const rstBtn = document.querySelector(".rst")
let homeCount = 0;
let guestCount = 0;

rstBtn.addEventListener("click", function() {
    location.reload()
});


function addHomeOne() {
    homeCount++;
    homeDisplay.innerText = homeCount;
}

function addHomeTwo() {
    homeCount += 2;
    homeDisplay.innerText = homeCount;
}

function addHomeThree() {
    homeCount += 3;
    homeDisplay.innerText = homeCount;
}

function addGuestOne() {
    guestCount++;
    guestDisplay.innerText = guestCount;
    
}

function addGuestTwo() {
    guestCount += 2;
    guestDisplay.innerText = guestCount;
}

function addGuestThree() {
    guestCount += 3;
    guestDisplay.innerText = guestCount;
}


console.log(scoreDisplay)
