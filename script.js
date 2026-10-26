
let button = document.getElementById("btn");

button.addEventListener("click" , function(){
    let list = document.getElementById("list");
    let addul =document.createElement("li");
    addul.textContent = "imp check your email"
    let email =list.firstElementChild;
    list.insertBefore(addul , email)
})
