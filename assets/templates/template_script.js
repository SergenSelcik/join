function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function toggleNavMenu() {
  let navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

const links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
    if (links[i].href === window.location.href) {
        links[i].classList.add('active');
    }
}

function setInitials() {
  const userActive = getUserName();
  const initials = makeInitials(userActive);
  document.getElementById('activeUserInitial').innerHTML= initials;
}

function makeInitials(string) {
  let names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

function getUserInitials() {
  const userActive = localStorage.getItem('logedInUser');
  if (userActive) {
      return makeInitials(logedName);
  } else {
      return 'Guest'; 
  }
}
