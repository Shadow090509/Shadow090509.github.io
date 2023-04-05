let yourName = localStorage.getItem("yourName");
let costume = localStorage.getItem("costume");
let candyCount = localStorage.getItem("candyCount") || 0;
const candyCounter = document.getElementById("candy-counter");

window.onload = function () {
  if (!yourName) {
    setTimeout(() => {
      yourName = prompt("What is your Name?");
      localStorage.setItem("yourName", yourName);
    }, 1000);
  }
  if (!costume) {
    setTimeout(() => {
      costume = prompt("What kind of Monster are you this Halloween?");
      localStorage.setItem("costume", costume);
    }, 1000);
  }
  setTimeout(() => {
    candyCounter.textContent = `Candies found: ${candyCount}`;
    alert(`Trick or Treat, ${yourName} the ${costume}. Good luck`);
  }, 1000);
};

let monster = Math.floor(Math.random() * 15);
let candy = Math.floor(Math.random() * 15);

if (monster === candy) {
  candy = Math.floor(Math.random() * 15);
}
let gameEnded = false;

const treasure = (id) => {
  if (gameEnded) {
    return;
  }
  const tombstone = document.getElementById(id);
  if (tombstone.classList.contains("clicked")) {
    return;
  }
  if (id === monster) {
    tombstone.innerHTML =
      '<img src="https://i.gifer.com/UVZ3.gif" height="175px" width="175px">';
    gameEnded = true;
    setTimeout(() => {
      alert(
        `${costume}s must not like candy.. better luck next time ${yourName}...`
      );
    }, 1000);
  } else if (id === candy) {
    tombstone.innerHTML =
      '<img src="https://i.pinimg.com/originals/bb/3e/40/bb3e4072995649e40e7a405b105c5420.gif" height="175px" width="175px">';
    candyCount++;
    localStorage.setItem("candyCount", candyCount);
    candyCounter.textContent = `Candies found: ${candyCount}`;
    gameEnded = true;
    setTimeout(() => {
      alert(
        `${costume}s must be good at finding candy! Here is your candy, ${yourName}... I DARE YOU TO TRY IT AGAIN! `
      );
    }, 1000);
  } else if (id !== candy && id !== monster) {
    tombstone.innerHTML =
      '<img src="https://miro.medium.com/max/996/1*o2llW65bX46N5UjmMegNGQ.gif" height="175px" width="175px">';
  }
  tombstone.classList.add("clicked");
};
