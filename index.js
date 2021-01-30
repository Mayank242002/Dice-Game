var random1=Math.random();
random1=random1*6;
random1=Math.floor(random1)+1;
var randomimage1="images/dice"+random1+".png";
document.querySelector(".dice1 img").setAttribute("src",randomimage1);

var random2=Math.random();
random2=random2*6;
random2=Math.floor(random2)+1;
var randomimage2="images/dice"+random2+".png";
document.querySelector(".dice2 img").setAttribute("src",randomimage2);



if (random1>random2)
{
    document.querySelector("h1").innerHTML="🏆 Player 1 wins";
}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🏆";
}
else
{
    document.querySelector("h1").textContent="Match Draw";
}


