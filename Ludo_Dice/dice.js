var random = Math.floor(Math.random() * 6) + 1;

var selectimg = "d" + random + ".png";

var sourcepath = "img/" + selectimg;

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", sourcepath);


var random2 = Math.floor(Math.random() * 6) +1;

var selectimg2 = "d" + random2 + ".png";

var selectfolder = "img/" + selectimg2;

document.querySelectorAll("img")[1].setAttribute("src", selectfolder);

if(random > random2)
{
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}else if(random < random2){
  document.querySelector("h1").innerHTML = " Play 2 Wins!";
}else {
  document.querySelector("h1").innerHTML = " Draw!";
}
