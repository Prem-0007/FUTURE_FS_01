const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;
  
  let currentSectionId = "";

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add("show");
    }
  });

  
  if (windowHeight + scrollPos >= bodyHeight - 100) {
    currentSectionId = "contact";
  } 
  
  else if (scrollPos < 150) {
    currentSectionId = "home";
  } 
  
  else {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      
      if (rect.top <= 200 && rect.bottom >= 200) {
        currentSectionId = sec.getAttribute("id");
      }
    });
  }

  
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


document.addEventListener("DOMContentLoaded", onScroll);