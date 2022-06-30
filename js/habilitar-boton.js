function habilitar(){
    myname = document.getElementById("myname").value;
    email = document.getElementById("email").value; 
    mobile = document.getElementById("mobile").value;
    val = 0;

    if(myname == ""){
        val++;
    }
    if(email == ""){
        val++;
    }
    if(mobile == ""){
        val++;
    }
    if(val == 0){
       document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }
}

document.getElementById("myname").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
document.getElementById("mobile").addEventListener("keyup", habilitar);