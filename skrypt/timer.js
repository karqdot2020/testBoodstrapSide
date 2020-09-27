const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const headerPhoto = document.getElementById("headerPhoto");
let counter = document.querySelector(".counter");
const counterTitle = document.querySelector(".counter-title");

// timer function

function timer() {
  let today = new Date();
  let hour = today.getHours();
  let minuts = today.getMinutes();
  let seconds = today.getSeconds();

  time.innerHTML = `${addZero(hour)}:${addZero(minuts)}:${addZero(seconds)}`;

  setTimeout(timer, 1000);
}

// add zero

function addZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// change bg

function changeBg() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    //   morning

    greeting.textContent = "Dzień dobry";
    headerPhoto.style.backgroundImage = "url('photo/header/header1.jpg')";
  } else if (hour < 18) {
    //   evening

    headerPhoto.style.backgroundImage = "url('photo/header/header2.jpg')";
  } else {
    //   night

    headerPhoto.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Dobry wieczór";
    greeting.style.color = "white";
    time.style.color = "white";
    counter.style.color = "white";
    counterTitle.style.color = "white";
  }
}

changeBg();
timer();