let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()  //default islemi gerçekleştirme 
    let headerDOM = document.querySelector("#info")
    headerDOM.innerHTML = "islem gerceklesti"
    console.log("islem gerceklesti")
}
