let username = prompt("Ismingizni kiriting: ");
const name = confirm("Hozirgi isming giz: " + username + " . Ismingizni ozgartirmoqchimisiz");

if(name){
    let newname = prompt("Yangi ismingizni kiriting");
    if(newname && newname.length > 0 ){
        username = newname
    }
    else{
        alert("Notogri ism kiritildi. Ismingizni ozgartirmadingiz")
    }
}

document.write("Sizning ismingiz: " + username);
