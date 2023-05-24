var randomNum1=Math.floor(Math.random()*6)+1;
var RandomDiceImg1="dice"+randomNum1+".jpg";
var randomImageSrc1="/images/" + RandomDiceImg1
var img1=document.querySelectorAll('img')[0]
img1.setAttribute('src',randomImageSrc1)



var randomNum2=Math.floor(Math.random()*6)+1;
    //in single line
var randomImageSrc2="/images/dice"+randomNum2+".jpg";

var img2=document.querySelectorAll('img')[1];
img2.setAttribute('src',randomImageSrc2)

if(randomNum1>randomNum2){
    document.querySelector('h3').innerHTML='player 1 is winner'
}
else if(randomNum2>randomNum1){
    document.querySelector('h3').innerHTML='player 2 is winner'
}
else{
    document.querySelector('h3').innerHTML='draw'
}

function refreshMe(){
    location.reload()
}