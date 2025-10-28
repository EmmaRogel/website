'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// Removed testimonials code as it's no longer used



// Portfolio functionality
const filterBtn = document.querySelector("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Ensure all projects are visible initially
window.addEventListener('load', function() {
  filterItems.forEach(item => item.classList.add("active"));
});

// Add click handler to the "Todos" button
if (filterBtn) {
  filterBtn.addEventListener("click", function() {
    filterItems.forEach(item => item.classList.add("active"));
  });
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// translations for navigation
const pageTranslations = {
  'acerca de': 'about',
  'resumen': 'resumen',
  'portafolio': 'portfolio',
  'blog': 'blog',
  'contacto': 'contact'
};

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedPageName = this.innerHTML.toLowerCase();
    const pageId = pageTranslations[clickedPageName] || clickedPageName;

    // remove active class from all
    navigationLinks.forEach(link => link.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // add active class to matching elements
    this.classList.add("active");
    const targetPage = document.querySelector(`[data-page="${pageId}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
}