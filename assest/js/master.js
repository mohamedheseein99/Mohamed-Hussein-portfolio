// Mobile Navigation Toggle
const hamburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "#fff";
    navbar.style.backdropFilter = "none";
  }
});

// Skill bars animation
// const observeSkills = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const skillProgress = entry.target.querySelector('.skill-progress');
//             const width = skillProgress.getAttribute('data-width');
//             setTimeout(() => {
//                 skillProgress.style.width = width;
//             }, 200);
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.skill-card').forEach(card => {
//     observeSkills.observe(card);
// });

// Scroll animations for sections
const observeSections = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Apply scroll animation to sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
  observeSections.observe(section);
});

// Contact form handling
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // Show success message
  alert("Your message has been sent, thank you");

  // Reset form
  this.reset();
});

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Typing effect for hero section
const heroTitle = document.querySelector(".Hero");
const text = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Add CSS for loading animation
const style = document.createElement("style");
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.5s ease;
    }
    
    body:not(.loaded)::after {
        content: 'Please wait...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        z-index: 100;
        font-family: 'Cairo', sans-serif;
    }
    
    .link.active {
        color: #3498db !important;
    }
    
    .link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
