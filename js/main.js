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


// Scrolling
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul.nav-list li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(`_${current}`)) {
      li.classList.add("active");
    }
  });
};
