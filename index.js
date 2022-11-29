function validate(callback){
    let username=document.getElementById("username1");
    let pwd=document.getElementById("password1");
     callback(username,pwd);
}
function validatecheck(username1,pwd1){
    if(username1.value=="admin" && pwd1.value=="12345"){
        alert("successfull");
        // window.location.href="http://127.0.0.1:5500/todolist.html";
         window.location.href="todolist.html";
    }
    else{
        alert("Invalid");
    }
}
function login(){
    validate(validatecheck);
}