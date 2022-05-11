//ekle butonu
let ekleDOM = document.querySelector("#liveToastBtn");
//liste öğeleri
let liDOM = document.querySelector("#list");
//listeye başarılı ekleme toastı
let successAddingToast = document.querySelector(".success-add")
//listeden başarılı silme toastı
let successRemovingToast = document.querySelector(".success-remove")
//listeye ekleme sırasında hata toastı
let errorToast = document.querySelector(".error-add");
//başarılı bir şekilde yapıldı işaretleme toastı
let successChecked = document.querySelector(".success-checked");
let valueInput = document.querySelector("#task")


//listeye yeni öğe ekleme 
ekleDOM.addEventListener("click", function newElement(){
    
    //let liDOM = document.querySelector("ul")

    //eğer girilen değer boş değilse listeye ekle
    if(valueInput.value != '') {
        //html'e list öğesi ekleme
        let taskDOM = document.createElement("li");
        taskDOM.innerHTML += `<li>${valueInput.value.trim()} <button type="button" id="list" class="close-button btn-close float-right" aria-label="Close"><span class="close-span" aria-hidden="true">&times;</span></button></li>`;
        //toast
        liDOM.append(taskDOM);

        let successToast = new bootstrap.Toast(successAddingToast);
        successToast.show();

        //storage'e ekleme
        addToStorage(valueInput.value.trim());
        //giriş yapıldıktan sonra inputta yazanı sıfırlar
        valueInput.value ="";
    }
    //değer yoksa hata uyarısı yolla
    else{
        let faultToast = new bootstrap.Toast(errorToast);
        faultToast.show();
    }
});

//listeden öğe silme
liDOM.addEventListener("click", (event) =>{
    //eğer çarpı butonuna tıklandıysa list öğesini sil
    if(event.target.className === "close-span"){
        let liForStorage = event.target.parentElement.parentElement;
    event.target.parentElement.parentElement.parentElement.remove();

    removeFromStorage(liForStorage.firstChild.textContent);
    //silme işlemi gerçekleştikten sonra başarı toastı yolla
    let successToast = new bootstrap.Toast(successRemovingToast);
    successToast.show();
    }
});

//list öğelerini tamamlandı olarak işaretle
liDOM.addEventListener("click", (event) =>{
    //list öğesi üzerine tıklandıysa chacked olarak işaretle
    if(event.target.nodeName === "LI"){
     event.target.parentElement.classList.toggle("checked")

    //işlem sonrası başarı mesajı göster
    let checkedToast = new bootstrap.Toast(successChecked);
    checkedToast.show();
    }
})

/*Local storage'e ekleme silme fonksiyonları */

// function getFromStorage()
// {
//     let tasks;

//     if(localStorage.getItem("tasks") != null){
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     else{
//         tasks = [];
//     }

//     return tasks;
// }

// function addToStorage(newTask)
// {
//     let tasks = getFromStorage();
//     tasks.push(newTask);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// function removeFromStorage(task){
//     let tasks = getFromStorage();

//     for(let i= 0; i<tasks.length; i++){
//         if(task === tasks[i]){
//             tasks.splice(i, 1);
//         }
//     }

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// document.addEventListener("DOMContentLoaded", loadTasks);

// function loadTasks()
// {
    
//     let tasks = getFromStorage();
    
//     console.log(tasks)
//     // tasks.forEach(function (task) {
//     //     let valueDOM = document.createElement("li");
//     //     valueDOM.innerHTML += `<li>${task.trim()} <button type="button" id="list" class="close-button btn-close float-right" aria-label="Close"><span class="close-span" aria-hidden="true">&times;</span></button></li>`;
//     //     liDOM.append(valueDOM);
//     // });

//     tasks.forEach(loadFunction);

//     function loadFunction(task)
//     {
//         let valueDOM = document.createElement("li");
//         valueDOM.innerHTML += `<li>${task.trim()} <button type="button" id="list" class="close-button btn-close float-right" aria-label="Close"><span class="close-span" aria-hidden="true">&times;</span></button></li>`;
//         liDOM.append(valueDOM);
        
//     }
// }


