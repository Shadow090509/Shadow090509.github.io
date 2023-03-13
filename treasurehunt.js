alert("I hope you are ready for Hollows Eve...");

let yourName = localStorage.getItem("yourName");
let costume = localStorage.getItem("costume");

if (!yourName) {
  yourName = prompt("What is your Name?");
  localStorage.setItem("yourName", yourName);
}

if (!costume) {
  costume = prompt("What kind of Monster are you this Halloween?");
  localStorage.setItem("costume", costume);
}
alert(`Trick or Treat, ${yourName} the ${costume}. Good luck`);

let monster = Math.floor(Math.random() * 9);
let candy = Math.floor(Math.random() * 9);

if (monster === candy) {
  candy = Math.floor(Math.random() * 9);
}

const treasure = (id) => {
  if (id === monster) {
    document.getElementById(monster).innerHTML =
      '<img src="https://i.gifer.com/UVZ3.gif" height="175px" width="175px">';
    alert(`${costume}s must not like candy.. better luck next time...`);
    // window.location.reload();
    // only works on firefox
  } else if (id === candy) {
    document.getElementById(candy).innerHTML =
      '<img src="https://i.pinimg.com/originals/bb/3e/40/bb3e4072995649e40e7a405b105c5420.gif" height="175px" width="175px">';
    alert(
      ` ${costume}s must be good at finding candy! Here is your candy, ${yourName}.... I DARE YOU TO TRY IT AGAIN! `
    );
  } else if (id !== candy && id !== monster) {
    document.getElementById(id).innerHTML =
      '<img src="https://miro.medium.com/max/996/1*o2llW65bX46N5UjmMegNGQ.gif" height="175px" width="175px">';
  }
};
