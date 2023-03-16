/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// in this part, I have  called the object that I have used as a variables in my code

const mainNav_bar = document.getElementsByClassName("navbar__menu");
const navBar_list = document.getElementById("navbar__list");
const sectors = document.querySelectorAll("section");
//here I have created 2 lists to create different li elements and a tags
const li_elements = [];
const link_elements = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
function app() {
  for (let i = 0; i < sectors.length; i++) {
    // build the nav

    //firstly, getting the attributs from every sections
    const sector_title = sectors[i].getAttribute("id");
    //then creating li and a elements
    li_elements[i] = document.createElement("li");

    link_elements[i] = document.createElement("a");
    //store the section attributes an href and text content on anchor elements and add  class list called links
    link_elements[i].classList.add("links");
    link_elements[i].href = `#${sector_title}`;
    link_elements[i].textContent = `${sector_title}`;

    // Scroll to anchor ID using scrollTO event

    link_elements[i].addEventListener("click", function (m) {
      //preventing default anchor scroll
      m.preventDefault();
      //using scrollIntoView property on hfref attribute in order to make the smooth animation
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth", block: "center" });
    });

    //append  li elements into ul element in navbar
    navBar_list.appendChild(li_elements[i]);
    //append each a element into each li element
    li_elements[i].appendChild(link_elements[i]);

    // Add class 'active' to section when near top of viewport

    // set active state style

    window.addEventListener("scroll", function () {
      const viewport = this.window.innerHeight;
      let sectorsY = sectors[i].getBoundingClientRect().y;
      let sectorBottom = sectors[i].getBoundingClientRect().bottom;

      if (viewport > sectorsY && sectorsY > 0 && sectorBottom > 0) {
        li_elements[i].style.background = "#3f3f46";
        li_elements[i].style.transition = "1s ease-out 100ms";
      } else {
        li_elements[i].style.background = "#3a867a";
      }
    });
  }
}
app();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set li_elements as active
