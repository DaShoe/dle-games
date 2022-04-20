Window.onload = pageloader1()
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
function pageloader1(){
  if (getCookie("worldlecookie") == "true"){
    document.getElementById("Chck1").checked = true;
  } else if (getCookie("worldlecookie") == "false"){
    document.getElementById("Chck1").checked = false;
  }

  if (getCookie("nerdlecookie") == "true"){
    document.getElementById("Chck2").checked = true;
  } else if (getCookie("nerdlecookie") == "false"){
    document.getElementById("Chck2").checked = false;
  }

  if (getCookie("wordhurdlecookie") == "true"){
    document.getElementById("Chck3").checked = true;
  } else if (getCookie("wordhurdlecookie") == "false"){
    document.getElementById("Chck3").checked = false;
  }

  if (getCookie("quordlecookie") == "true"){
    document.getElementById("Chck4").checked = true;
  } else if (getCookie("quordlecookie") == "false"){
    document.getElementById("Chck4").checked = false;
  }

  if (getCookie("evilcookie") == "true"){
    document.getElementById("Chck5").checked = true;
  } else if (getCookie("evilcookie") == "false"){
    document.getElementById("Chck5").checked = false;
  }
  if (getCookie("shaplecookie") == "true"){
    document.getElementById("Chck6").checked = true;
  } else if (getCookie("shaplecookie") == "false"){
    document.getElementById("Chck6").checked = false;
  }
  if (getCookie("dactlecookie") == "true"){
    document.getElementById("Chck7").checked = true;
  } else if (getCookie("dactlecookie") == "false"){
    document.getElementById("Chck7").checked = false;
  }
  if (getCookie("morselcookie") == "true"){
    document.getElementById("Chck8").checked = true;
  } else if (getCookie("morselcookie") == "false"){
    document.getElementById("Chck8").checked = false;
  }
  if (getCookie("sevencookie") == "true"){
    document.getElementById("Chck9").checked = true;
  } else if (getCookie("sevencookie") == "false"){
    document.getElementById("Chck9").checked = false;
  }
  if (getCookie("thirtlecookie") == "true"){
    document.getElementById("Chck10").checked = true;
  } else if (getCookie("thirtlecookie") == "false"){
    document.getElementById("Chck10").checked = false;
  }


}



