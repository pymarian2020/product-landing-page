// "stric mode";

const dropdownNav = () => {
  const navBar = document.getElementById("myTopnav");
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }
};

document.getElementById("getyear").innerHTML = new Date().getFullYear();
