function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

 

  

function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}


function login_clicked() {
  if (document.getElementById("password").value == "PenguinsGo") {
  console.log("password correct")
  }
  else {
  console.log("password incorrect")
  }
  
  console.log(document.getElementById("username").value);
  console.log(document.getElementById("password").value);
}


function process_code() {
  var codetoggle = document.getElementById("Code_Box");
  var whitescreentoggle = document.getElementById("whitescreen");
  if (document.getElementById("code").value == "14378PenguinCode"){
    codetoggle.style.display = "none";
    whitescreentoggle.style.display = "none";
  }
  else {
    alert("Sorry, the code is incorrect");
  }
}


function hidelogin() {
  var loginpg = document.getElementById("Login")
  var whitescreen = document.getElementById("whitescreen_login")
  loginpg.style.display = "none";
  whitescreen.style.display = "none";
}

function showlogin() {
  var loginpg = document.getElementById("Login");
  var whitescreen = document.getElementById("whitescreen_login");
  loginpg.style.display = "block";
  whitescreen.style.display = "block";
}

function login() {
  var loginpg = document.getElementById("Login");
  var whitescreen = document.getElementById("whitescreen_login");
  var username = document.getElementById("Username");
  var password = document.getElementById("Password");
  var loginbutton = document.getElementById("Loginbutton");
  if (username.value == "FlyingPenguin") {
    if (password.value == "Testcode_Penguin") {
      loginpg.style.display = "none";
      whitescreen.style.display = "none";
      loginbutton.style.display = "none";
    }
    else {
      alert("wrong password");
    } 
  }
  else if (username.value == "NyanCat") {
    if (password.value == "Kitty_Admin") {
      loginpg.style.display = "none";
      whitescreen.style.display = "none";
      loginbutton.style.display = "none";
    }
    else {
      alert("wrong password");
    }
  }
  else {
    alert("wrong username")
  }

  
}

function homebtn_mouseover() {
    console.log("Mouse over button");
    var homebtn = document.getElementById("Home_button");
    homebtn.style.opacity = "70%";
}
function homebtn_mouseout() {
    console.log("Mouse out of button");
    var homebtn = document.getElementById("Home_button");
    homebtn.style.opacity = "100%";
}
