// Set current year for Copyright

const yearEle = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEle.textContent = currentYear;

// Make mobile navigation open and close when clicking menu button

const btnNavEle = document.querySelector(".btn-mobile-nav");
const headerEle = document.querySelector(".header");
btnNavEle.addEventListener("click", function () {
  headerEle.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll(".nav-scroll");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to specific sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEle = document.querySelector(href);
      sectionEle.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation when it's links are used
    if (link.classList.contains("main-nav-link")) {
      headerEle.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
