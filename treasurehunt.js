var yourName = localStorage.getItem("yourName");

if (!yourName) {
  yourName = prompt("What's your name?");
  localStorage.setItem("yourName", yourName);
}
let costume = " Egg Hunter";
let bunny = Math.floor(Math.random() * 9);
let egg = Math.floor(Math.random() * 9);

if (bunny === egg) {
  candy = Math.floor(Math.random() * 9);
}
let gameEnded = false;
const treasure = (id) => {
  if (gameEnded) {
    return;
  }
  if (id === bunny) {
    document.getElementById(bunny).innerHTML =
      '<img src="https://live.staticflickr.com/7195/6881177214_525ed7c45e_c.jpg" height="175px" width="175px">';
    setTimeout(() => {
      alert(
        `What a shame the easter bunny found the egg first!  Better luck next time, ${yourName}!`
      );
    }, 500);
    gameEnded = true;
  } else if (id === egg) {
    document.getElementById(egg).innerHTML =
      '<img src="https://www.publicdomainpictures.net/pictures/320000/nahled/pink-gold-easter-egg.png"height="175px" width="175px">';
    setTimeout(() => {
      alert(
        `The ${costume} found the egg! Happy Easter ${yourName}! How many eggs can you find? `
      );
    }, 500);
    gameEnded = true;
  } else if (id !== egg && id !== bunny) {
    document.getElementById(id).innerHTML =
      '<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png" height="175px" width="175px">';
  }
};
