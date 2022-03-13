let fullName = prompt("Adınız Soyadınız: "); 

const date = new Date();
let time = date.toLocaleString();

let myName = document.querySelector('#myName');
myName.innerHTML = `${fullName}`;


let timeInfo = document.querySelector("#myClock");
timeInfo.innerHTML = time;