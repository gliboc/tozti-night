function applyDark (){
    var d = document.getElementsByTagName('html')[0]
    if (d.className === 'dark'){
      d.className = ""
    }
    else {
      d.className = "dark"
    }
}

function pushButton() {
    var matches = document.querySelectorAll(".main-header .user");
    console.log(matches)
    matches[0].innerHTML = '<div class="dropdown is-bottom-left is-mobile-modal"><div role="button" class="dropdown-trigger"><a onclick="applyDark()" class="notifications"><i class="nc-icon nc-spaceship off"></i></a></div>' + matches[0].innerHTML 
  }

setTimeout(pushButton, 200)
