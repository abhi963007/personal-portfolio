/**
 * Main JavaScript file for Abhiram A K Portfolio
 * Handles theme toggling, audio controls, navigation, and UI interactions
 */

// =============================================================================
// GLOBAL VARIABLES
// =============================================================================

const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const emptyArea = document.getElementById("emptyarea");
const mobileTogglemenu = document.getElementById("mobiletogglemenu");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

// =============================================================================
// SETTINGS & THEME FUNCTIONS
// =============================================================================

/**
 * Toggle the settings panel visibility
 */
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

/**
 * Toggle audio playback based on sound switch state
 */
function playpause() {
  const soundSwitch = document.getElementById("switchforsound");
  if (soundSwitch.checked === false) {
    audio.pause();
  } else {
    audio.play();
  }
}

/**
 * Toggle between light and dark visual modes
 */
function visualmode() {
  document.body.classList.toggle("light-mode");
  
  // Apply invert filter to elements that need it in light mode
  const elementsToInvert = document.querySelectorAll(".needtobeinvert");
  elementsToInvert.forEach(function(element) {
    element.classList.toggle("invertapplied");
  });
}

// =============================================================================
// PAGE LOADING & INITIALIZATION
// =============================================================================

/**
 * Handle page load events
 */
window.addEventListener("load", function() {
  // Hide preloader
  loader.style.display = "none";
  
  // Show greeting popup
  const greetingElement = document.querySelector(".hey");
  if (greetingElement) {
    greetingElement.classList.add("popup");
  }
});

// =============================================================================
// MOBILE NAVIGATION FUNCTIONS
// =============================================================================

/**
 * Toggle mobile hamburger menu
 */
function hamburgerMenu() {
  // Prevent body scrolling when menu is open
  document.body.classList.toggle("stopscrolling");
  
  // Toggle menu visibility
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  
  // Animate hamburger bars
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

/**
 * Hide mobile menu when clicking on menu items
 */
function hidemenubyli() {
  // Re-enable body scrolling
  document.body.classList.toggle("stopscrolling");
  
  // Hide menu
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  
  // Reset hamburger bar animations
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// =============================================================================
// NAVIGATION HIGHLIGHTING
// =============================================================================

/**
 * Handle scroll-based navigation highlighting
 */
window.addEventListener("scroll", () => {
  let currentSection = "";
  
  // Find the current section based on scroll position
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 200)) {
      currentSection = section.getAttribute("id");
    }
  });
  
  // Update desktop navigation highlighting
  navLi.forEach(navItem => {
    navItem.classList.remove("activeThisNavItem");
    if (navItem.classList.contains(currentSection)) {
      navItem.classList.add("activeThisNavItem");
    }
  });
  
  // Update mobile navigation highlighting
  mobilenavLi.forEach(navItem => {
    navItem.classList.remove("activeThisNavItem");
    if (navItem.classList.contains(currentSection)) {
      navItem.classList.add("activeThisNavItem");
    }
  });
});

// =============================================================================
// RESUME DOWNLOAD FUNCTION
// =============================================================================

/**
 * Handle resume download with visual feedback
 */
function openURL() {
  const resumeBtn = document.getElementById('resume-btn');
  const originalText = resumeBtn.innerHTML;
  
  // Show loading state
  resumeBtn.innerHTML = `
    <div class="sign">
      <svg viewBox="0 0 640 512">
        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144z"/>
      </svg>
    </div>
    <span>Downloading...</span>
  `;
  resumeBtn.disabled = true;

  // Create a link element and trigger download
  const link = document.createElement('a');
  link.href = 'src/pdf/Abhiram_A_K_CV.pdf';
  link.target = '_blank';
  link.click();

  // Reset button state after a brief delay
  setTimeout(() => {
    resumeBtn.innerHTML = originalText;
    resumeBtn.disabled = false;
  }, 1000);
}