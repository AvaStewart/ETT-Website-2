```javascript
// ==============================
// MOBILE MENU
// ==============================

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


/*
Close the mobile menu when
a navigation link is clicked.
*/

const mobileLinks =
  mobileMenu.querySelectorAll("a");


mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

  });

});


// ==============================
// MAP BUTTON
// ==============================

const mapButton =
  document.getElementById("mapButton");


mapButton.addEventListener("click", () => {

  alert(
    "The interactive Glover Park map will be added here."
  );

});


// ==============================
// SIMPLE SCROLL EFFECT
// ==============================

const sections =
  document.querySelectorAll("section");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.1
    }
  );


sections.forEach((section) => {

  observer.observe(section);

});
```
