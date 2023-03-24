let yourName = localStorage.getItem("yourName");
let costume = localStorage.getItem("costume");
let candyCount = localStorage.getItem("candyCount") || 0; // Initialize count to 0 if it doesn't exist in localStorage
const candyCounter = document.getElementById("candy-counter");

window.onload = function () {
  if (!yourName) {
    yourName = prompt("What is your Name?");
    localStorage.setItem("yourName", yourName);
  }
  if (!costume) {
    costume = prompt("What kind of Monster are you this Halloween?");
    localStorage.setItem("costume", costume);
  }
  candyCounter.textContent = `Candies found: ${candyCount}`; // Display initial candy count
  alert(`Trick or Treat, ${yourName} the ${costume}. Good luck`);
};

let monster = Math.floor(Math.random() * 9);
let candy = Math.floor(Math.random() * 9);

if (monster === candy) {
  candy = Math.floor(Math.random() * 9);
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
    alert(
      `${costume}s must not like candy.. better luck next time ${yourName}...`
    );
    gameEnded = true;
  } else if (id === candy) {
    tombstone.innerHTML =
      '<img src="https://i.pinimg.com/originals/bb/3e/40/bb3e4072995649e40e7a405b105c5420.gif" height="175px" width="175px">';
    candyCount++; // Increment candy count
    localStorage.setItem("candyCount", candyCount); // Update candy count in localStorage
    candyCounter.textContent = `Candies found: ${candyCount}`; // Update candy count display
    alert(
      `${costume}s must be good at finding candy! Here is your candy, ${yourName}... I DARE YOU TO TRY IT AGAIN! `
    );
    gameEnded = true;
  } else if (id !== candy && id !== monster) {
    tombstone.innerHTML =
      '<img src="https://miro.medium.com/max/996/1*o2llW65bX46N5UjmMegNGQ.gif" height="175px" width="175px">';
  }
  tombstone.classList.add("clicked");
};
