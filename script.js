const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;
  
  let currentSectionId = "";

  // 1. REVEAL ANIMATIONS
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add("show");
    }
  });

  // 2. ACTIVE LINK LOGIC
  // Priority 1: If at the very bottom, highlight Contact
  if (windowHeight + scrollPos >= bodyHeight - 100) {
    currentSectionId = "contact";
  } 
  // Priority 2: If at the very top, highlight Home
  else if (scrollPos < 150) {
    currentSectionId = "home";
  } 
  // Priority 3: Middle of the page logic
  else {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      // Check if the section is occupying the middle of the viewport (y = 200px)
      if (rect.top <= 200 && rect.bottom >= 200) {
        currentSectionId = sec.getAttribute("id");
      }
    });
  }

  // 3. APPLY GLOW
  if (currentSectionId) {
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }
}

window.addEventListener("scroll", onScroll);
// Run immediately on load to set the initial state
document.addEventListener("DOMContentLoaded", onScroll);