function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    onloadingpage()
  }
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function ischeck1() {
    var checkBox = document.getElementById("Chck1");
    if (checkBox.checked == true){
        setCookie("worldlecookie", true, 365);
    } else {
        setCookie("worldlecookie", false, 365);
    }
}

function ischeck2() {
  var checkBox = document.getElementById("Chck2");
  if (checkBox.checked == true){
      setCookie("nerdlecookie", true, 365);
  } else {
      setCookie("nerdlecookie", false, 365);
  }
}

function ischeck3() {
  var checkBox = document.getElementById("Chck3");
  if (checkBox.checked == true){
      setCookie("wordhurdlecookie", true, 365);
  } else {
      setCookie("wordhurdlecookie", false, 365);
  }
}

function ischeck4() {
  var checkBox = document.getElementById("Chck4");
  if (checkBox.checked == true){
      setCookie("quordlecookie", true, 365);
  } else {
      setCookie("quordlecookie", false, 365);
  }
}

function ischeck5() {
  var checkBox = document.getElementById("Chck5");
  if (checkBox.checked == true){
      setCookie("evilcookie", true, 365);
  } else {
      setCookie("evilcookie", false, 365);
  }
}

function ischeck6() {
  var checkBox = document.getElementById("Chck6");
  if (checkBox.checked == true){
      setCookie("shaplecookie", true, 365);
  } else {
      setCookie("shaplecookie", false, 365);
  }
}

function ischeck7() {
  var checkBox = document.getElementById("Chck7");
  if (checkBox.checked == true){
      setCookie("dactlecookie", true, 365);
  } else {
      setCookie("dactlecookie", false, 365);
  }
}
function ischeck8() {
  var checkBox = document.getElementById("Chck8");
  if (checkBox.checked == true){
      setCookie("morselcookie", true, 365);
  } else {
      setCookie("morselcookie", false, 365);
  }
}
function ischeck9() {
  var checkBox = document.getElementById("Chck9");
  if (checkBox.checked == true){
      setCookie("sevencookie", true, 365);
  } else {
      setCookie("sevencookie", false, 365);
  }
}
function ischeck10() {
  var checkBox = document.getElementById("Chck10");
  if (checkBox.checked == true){
      setCookie("thirtlecookie", true, 365);
  } else {
      setCookie("thirtlecookie", false, 365);
  }
}
