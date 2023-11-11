// alert("checking");

// function home(){
//     window.location.assign("HOME.html");
// }
let username,password;
function newuser(){
     username = prompt("Enter Ur User Name..");
     password = prompt("Enter password...");
    let conf = confirm("Here are Ur details.. \n\n"+"USERNAME = "+username +"\nPASSWORD = " + password);
    
}


function chk(){
    let user =document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    
    if(user ==username && pass ==password){
        alert("LOGIN SUCCESSFUL!!!");
        window.location.assign("html/HOME.html");
    }
    else{
        alert("INVALID DETAILS...");
    }
}

// function newuser(){
//     let a = confirm("DO U WANT TO CREATE A USER...");
//     if(a == true){
//     window.location.assign("Newuser.html");
//     }
//     else{}
// }

