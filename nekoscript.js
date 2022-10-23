function changeRegion(selectedOption){
    var region = selectedOption.value;
    if (region != "en"){
        alert("Only the English language is implemented. Current region is \"" + region + "\"");
    }
}
function forgotPassword(){
    document.getElementById("uname").value=localStorage.getItem("userName");
    document.getElementById("pword").value=localStorage.getItem("passWord");
}
function logIn(){
    userName = document.forms[0].elements[0].value;
    passWord = document.forms[0].elements[1].value;
    localStorage.setItem("inputUserName", userName);
    localStorage.setItem("inputPassWord", passWord);
    if (localStorage.getItem("inputUserName") == localStorage.getItem("userName") && localStorage.getItem("inputPassWord") == localStorage.getItem("passWord")){
        window.open("login.html");
    }
    else{
        alert("Incorrect Password or Username!");
    }
}
function catBook(){
    var petName = prompt("Enter your pets name ");
    if (petName != null){
        localStorage.setItem("inputUserName", petName);
        window.open("login.html", "_self");
    }
}
function saveUserData(){
    var userName = document.forms[0].elements[0].value;
    var passWord = document.forms[0].elements[1].value
    localStorage.setItem("userName", userName);
    localStorage.setItem("passWord", passWord);
    window.open("thankyou.html", "_self");
}