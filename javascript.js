const btn = document.getElementById('btn2');
let popup1 =document.getElementById('popup1');
let popup2 =document.getElementById('popup2');
let popup3 =document.getElementById('popup3');
let popup4 =document.getElementById('popup4');
let popup5 =document.getElementById('popup5');
const popupbtn1 = document.getElementById('popup_btn1');
const popupbtn2 = document.getElementById('popup_btn2');
const popupbtn3 = document.getElementById('popup_btn3');
const popupbtn4 = document.getElementById('popup_btn4');

btn.addEventListener('click', function(){
    popup1.style.display = "block";
})


popupbtn1.addEventListener('click', function(){
    popup1.style.display = "none";
    popup2.style.display = "block";
    popup2.style.backgroundColor = "red";
})

popupbtn2.addEventListener('click', function(){
    popup2.style.display = "none";
    popup3.style.display = "block";
    popup3.style.backgroundColor = "green";
})

popupbtn3.addEventListener('click', function(){
    popup3.style.display = "none";
    popup4.style.display = "block";
    popup4.style.backgroundColor = "yellow";
})
popupbtn4.addEventListener('click', function(){
    popup4.style.display = "none";
    popup5.style.display = "block";
    popup5.style.backgroundColor = "blue";
})