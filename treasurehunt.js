var yourName = localStorage.getItem("yourName");

if (!yourName) {
  yourName = prompt("What's yer name, laddy/lass?");
  localStorage.setItem("yourName", yourName);
}
let costume = " Non-Leprechauns";
let killer = Math.floor(Math.random() * 9);
let gold = Math.floor(Math.random() * 9);

if (killer === gold) {
  candy = Math.floor(Math.random() * 9);
}
let gameEnded = false;
const treasure = (id) => {
  if (gameEnded) {
    return;
  }
  if (id === killer) {
    document.getElementById(killer).innerHTML =
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEnxN_ukImFfJupIx_1ArdyqCWGi70w1wES9PRjG5QA&usqp=CAU&ec=48600112" height="175px" width="175px">';
    setTimeout(() => {
      alert(
        `Ah, 'tis a pity that the${costume} didn't fancy the gold. Better luck next time, ${yourName}!`
      );
    }, 500);
    gameEnded = true;
  } else if (id === gold) {
    document.getElementById(gold).innerHTML =
      '<img src="https://freesvg.org/img/Pot-Of-Gold.png" height="175px" width="175px">';
    setTimeout(() => {
      alert(
        `Faith and begorrah! Ye ${costume}  be mighty good at findin' me pot of gold! Happy St. Patrick's Day, ${yourName}! But don't ye be gettin' too cocky now... I dare ye to try yer luck again! `
      );
    }, 500);
    gameEnded = true;
  } else if (id !== gold && id !== killer) {
    document.getElementById(id).innerHTML =
      '<img src="https://freesvg.org/img/OneSeventeen-Pot-of-Gold.png" height="175px" width="175px">';
  }
};
