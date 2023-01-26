const button1=document.querySelector(".btn1");
const button2=document.querySelector(".btn2");
const button3=document.querySelector(".btn3");
const button4=document.querySelector(".btn4");

const mainTitleRed=document.querySelector(".main-title-red");
const mainTitlegreen=document.querySelector(".main-title-green");
const mainTitleblue=document.querySelector(".main-title-blue");
const mainTitleorange=document.querySelector(".main-title-orange");


button1.addEventListener("click",function(){
     mainTitleRed.classList.toggle("red")
})

button2.addEventListener("click",function(){
     mainTitlegreen.classList.toggle("green")
})
button3.addEventListener("click",function(){
     mainTitleblue.classList.toggle("blue")
})
button4.addEventListener("click",function(){
     mainTitleorange.classList.toggle("orange")
}) 