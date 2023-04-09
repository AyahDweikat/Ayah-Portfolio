function myFunction() {
    let iconSpan = document.getElementById('icon');
  let navList = document.getElementById("nav-list");
  if (navList.className === "nav-list" && iconSpan.className ==="") {
    navList.className += " responsive";
    iconSpan.className += "activeBtn"
  } else {
    navList.className = "nav-list";
    iconSpan.className = "";
  }
}
