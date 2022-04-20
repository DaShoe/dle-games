window.onload = pageloader()
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
function pageloader(){
    if (getCookie("worldlecookie") == "true"){
      document.getElementById('worldle1').style.display='block'
    } else if (getCookie("worldlecookie") == "false"){
      document.getElementById('worldle1').style.display='none'
    }

    if (getCookie("nerdlecookie") == "true"){
      document.getElementById('nerdle1').style.display='block'
    } else if (getCookie("nerdlecookie") == "false"){
      document.getElementById('nerdle1').style.display='none'
    }

    if (getCookie("wordhurdlecookie") == "true"){
      document.getElementById('wordhurdle1').style.display='block'
    } else if (getCookie("wordhurdlecookie") == "false"){
      document.getElementById('wordhurdle1').style.display='none'
    }

    if (getCookie("quordlecookie") == "true"){
      document.getElementById('quordle1').style.display='block'
    } else if (getCookie("quordlecookie") == "false"){
      document.getElementById('quordle1').style.display='none'
    }

    if (getCookie("evilcookie") == "true"){
      document.getElementById('evil1').style.display='block'
    } else if (getCookie("evilcookie") == "false"){
      document.getElementById('evil1').style.display='none'
    }
    if (getCookie("shaplecookie") == "true"){
      document.getElementById('shaple1').style.display='block'
    } else if (getCookie("shaplecookie") == "false"){
      document.getElementById('shaple1').style.display='none'
    }
    if (getCookie("dactlecookie") == "true"){
      document.getElementById('dactle1').style.display='block'
    } else if (getCookie("dactlecookie") == "false"){
      document.getElementById('dactle1').style.display='none'
    }
    if (getCookie("morselcookie") == "true"){
      document.getElementById('morsel1').style.display='block'
    } else if (getCookie("morselcookie") == "false"){
      document.getElementById('morsel1').style.display='none'
    }
    if (getCookie("sevencookie") == "true"){
      document.getElementById('seven1').style.display='block'
    } else if (getCookie("sevencookie") == "false"){
      document.getElementById('seven1').style.display='none'
    }
    if (getCookie("thirtlecookie") == "true"){
      document.getElementById('thirtle1').style.display='block'
    } else if (getCookie("thirtlecookie") == "false"){
      document.getElementById('thirtle1').style.display='none'
    }
}
