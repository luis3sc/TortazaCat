let form = document.querySelector("#form");
let btn = document.querySelector("#btn");

function validar() {
 let desabilitar = false;

 if (form.myname.value == "") {
    desabilitar = true;
 }

 if (form.email.value == "") {
    desabilitar = true;
 }

 if (form.mobile.value == "") {
    desabilitar = true;
 }
 if (desabilitar == true){
    btn.disabled = true;
 } else {
    btn.disabled = false;
 }
form.addEventListener("keyup", validar)
}