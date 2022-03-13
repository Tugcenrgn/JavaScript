let fullName = prompt("Adınız Soyadınız: "); 



let myName = document.querySelector('#myName');
myName.innerHTML = `${fullName}`;

function timeCounter(){
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

let time = hour + ":" + minute + ":" + second;
let timeInfo = document.querySelector("#myClock");
timeInfo.innerHTML = time;

setTimeout(timeCounter, 1000);
}

timeCounter();
