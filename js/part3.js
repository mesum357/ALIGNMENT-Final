// LAST PART JS

// Keep your existing Lottie initializations
const ringsLottie = lottie.loadAnimation({
  container: document.getElementById("rings"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/RocketRing.json",
});

const boosterLottieFile1 = lottie.loadAnimation({
  container: document.getElementById("booster"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/booster-open-from-lotus-flower.json",
});

const rocketAnimation = document.querySelector(".rocket-img div");
const reverseImg = document.querySelector(".reverse-img img");

// Section Transition Controller
function initSectionTransitions() {
  const sections = {
    sec1File1: document.querySelector(".sec-1-file1"),
    sec1File2: document.querySelector(".sec-1-file2"),
    sec2File2: document.querySelector(".sec-2-file2"),
  };

  // Initial state setup
  // Assuming these are handled by your main page load CSS/JS initially
  // sections.sec1File2.style.display = "none";
  // sections.sec1File2.style.opacity = "0";
  // sections.sec2File2.style.display = "none";
  // sections.sec2File2.style.opacity = "0";

  // Rocket animation completion handler
  // Make sure rocketAnimation exists before adding listener
  if (rocketAnimation) {
    rocketAnimation.addEventListener("animationend", () => {
      handleRocketAnimationEnd(sections);
    });
  }


  // Transition event listeners (Ensure elements exist before adding listeners)
  if (sections.sec1File1) {
      sections.sec1File1.addEventListener("transitionend", (e) => {
        if (
          e.propertyName === "opacity" &&
          sections.sec1File1.style.opacity === "0"
        ) {
          // Hide sec-1-file1 after fade out
          sections.sec1File1.style.display = "none";
          // Show sec-1-file2
          if (sections.sec1File2) {
              sections.sec1File2.style.display = "flex";
              sections.sec1File2.style.opacity = "1";
              setTimeout(() => {
                sections.sec1File2.style.opacity = "0";
              }, 8000);
          }
        }
      });
  }


  // IMAGES TRANSITIONS

  // Transition event listeners
  if (sections.sec1File2) {
      sections.sec1File2.addEventListener("transitionend", (e) => {
        if (
          e.propertyName === "opacity" &&
          sections.sec1File2.style.opacity === "0"
        ) {
          // Hide sec-1-file2 after fade out
          sections.sec1File2.style.display = "none";
          // Show sec-2-file2
          if (sections.sec2File2) {
              sections.sec2File2.style.display = "block";
              sections.sec2File2.classList.add("visibility"); // Assuming 'visibility' class applies initial styles
              setTimeout(() => {
                setTimeout(() => {
                  sections.sec2File2.style.opacity = "1";
                  // After sec2File2 is visible, show sec2Img and focusDiv
                  const sec2Img = document.querySelector(".sec-2-text-file2 img");
                  const focusDiv = document.getElementById("Focus"); // Start with Focus
                  const sec2ImgFadeInDelay = 2000;
                  const mainFocusDivAppearDelay = 5000; // Delay before first Focus appears

                  if (sec2Img) {
                     setTimeout(() => {
                        sec2Img.classList.add("fade-in");
                        // Start sequential appearance of Focus elements after image fades in
                        if (focusDiv) {
                            setTimeout(() => {
                                focusDiv.classList.add("visible");
                                const whiteDivInFocus = focusDiv.querySelector(".white-div-file2");
                                if (whiteDivInFocus) whiteDivInFocus.classList.add("Blink");

                                // Staggered reveal of Focus1, Focus2, Focus3, Focus4, Focus5
                                const focusElements = ["Focus2", "Focus3", "Focus1", "Focus4", "Focus5"]; // Adjusted order based on original JS
                                let delay = 2000; // Delay after the first Focus appears

                                focusElements.forEach(id => {
                                    setTimeout(() => {
                                        const el = document.getElementById(id);
                                        if (el) {
                                            el.classList.add("visible");
                                            const whiteDiv = el.querySelector(".white-div-file2");
                                            if (whiteDiv) whiteDiv.classList.add("Blink");
                                        }
                                    }, delay);
                                    delay += 2000; // Increase delay for next element
                                });

                                // Assuming startFocusDivSequence is a function that might exist elsewhere
                                // if (typeof startFocusDivSequence === "function") startFocusDivSequence();

                            }, mainFocusDivAppearDelay - sec2ImgFadeInDelay); // Adjust delay start
                         }
                     }, sec2ImgFadeInDelay);
                  }
                }, 100);
              }, 100);
          }
        }
      });
  }
}

function handleRocketAnimationEnd(sections) {
  const ring2Div = document.getElementById("ring2");
  if (ring2Div) {
    setTimeout(() => {
      ring2Div.style.opacity = "1";
      ring2Div.style.transition = "opacity 1s ease-in-out";
      ring2Div.style.transform = "rotate(-60deg)";
    }, 4500);
  }


  setTimeout(() => {
    ["rings", "ring2", "white", "white2", "white3", "white4"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = "0";
        el.style.transition = "opacity 2s ease-out";
        // Note: Adding fade-out class here seems redundant if opacity is set directly
        // if (id === "ring2") el.classList.add("fade-out"); // Check if this class exists and is needed
      }
    });
  }, 4500);

  if (sections.sec1File1) {
      setTimeout(() => {
        sections.sec1File1.style.opacity = "0";
        sections.sec1File1.style.transition = "opacity 2s ease-out";

        setTimeout(() => {
          ["rings", "ring2", "reverse-img"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
            // function initSec2File2Animations() {} // This line inside the loop seems incorrect
          });
          // This function call might belong outside the loop if needed
          // initSec2File2Animations(); // Ensure this function is defined if called
        }, 2000); // Delay after sec1File1 starts fading out
      }, 5000); // Delay from rocket animation end
  }
}

// Initialize transitions
// window.addEventListener("DOMContentLoaded", function () { // This listener is already open below, don't duplicate
//   initSectionTransitions();
// }); // Closing the listener opened below

// Keep existing Lottie initializations
const FocusLottie = lottie.loadAnimation({
  container: document.getElementById("Focus"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/Focus-Wheel.json",
});
const Focus1Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus1"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/magnet.json",
});
const Focus2Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/fast deactivation.json",
});
const Focus3Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus3"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/water fall.json",
});
const Baloon = lottie.loadAnimation({
  container: document.getElementById("thank-img"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/thanks.json",
});


// --- NEW MODAL & SLIDER JS ---

function initModals() {
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modals = document.querySelectorAll(".modal"); // Get all modals if you have more
  const closeButtons = document.querySelectorAll(".modal .close-btn");// Get close buttons within modals
  const closeButtonThanks = document.querySelector(".close-btn-thanks"); // Get close buttons for the "Thanks" modal

  // Function to open a modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show"); // Add the 'show' class to make it visible
      document.body.style.overflow = "hidden"; // Prevent scrolling background
      // Re-initialize or reset slider when modal opens (optional but good practice)
      const slider = modal.querySelector('.slider');
      if (slider) {
          // Assuming initSlider takes the modal element or slider element
          initSlider(modal); // Pass the modal or slider to initSlider
      }
      modal.dispatchEvent(new Event("modal:open"));
    }
  }

  // Function to close a modal
  function closeModal(modalElement) {
    if (modalElement) {
      modalElement.classList.remove("show"); // Remove the 'show' class
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  // Add click listeners to triggers
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal");
      if (modalId) {
        openModal(modalId);
      }
    });
  });

  // Add click listeners to close buttons
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the closest parent modal element
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  // Add click listener to close modal when clicking outside the modal content
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      // Check if the click was directly on the modal overlay (the modal element itself),
      // not inside the modal-content
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}


function initSlider(modalElement) {
  // Get elements specific to the modal's slider
  const slider = modalElement.querySelector('.slider');
  if (!slider) return; // Exit if no slider found in this modal

  const slidesContainer = slider.querySelector('.slides-container');
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  const dotsContainer = modalElement.querySelector('.dots'); // Dots are outside .slider but within the modal
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

  if (!slidesContainer || slides.length === 0) return; // Exit if no slides

  let currentSlideIndex = 0;

  // Function to show a specific slide
  function showSlide(index) {
    if (index < 0) {
        currentSlideIndex = slides.length - 1; // Wrap around to the last slide
    } else if (index >= slides.length) {
        currentSlideIndex = 0; // Wrap around to the first slide
    } else {
        currentSlideIndex = index;
    }

    // Calculate the transform value
    const offset = -currentSlideIndex * 100; // Assumes slides are 100% width
    slidesContainer.style.transform = `translateX(0%)`;

    // Update active dot
    dots.forEach((dot, i) => {
      if (i === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Handle button visibility if not wrapping (optional)
    
    if (prevBtn) prevBtn.style.visibility = currentSlideIndex > 0 ? 'visible' : 'hidden';
    if (nextBtn) nextBtn.style.visibility = currentSlideIndex < slides.length - 1 ? 'visible' : 'hidden';
  }

  // Event listeners for buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlideIndex === 0) {
        showSlide(slides.length - 1);
      } else {
        showSlide(currentSlideIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlideIndex === slides.length - 1) {
        showSlide(0);
      }
    });
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Initialize the first slide state when the slider is found/initialized
  // showSlide(0); // Called when the modal opens inside initModals
}

// Utility function to reset slides in a modal
function resetModalSlides(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const slides = modal.querySelectorAll('.slide');
  const dots = modal.querySelectorAll('.dot');
  slides.forEach((slide, idx) => {
    if (idx === 0) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  dots.forEach((dot, idx) => {
    if (idx === 0) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Attach event listeners to all modal triggers
document.querySelectorAll('.modal-trigger').forEach(trigger => {
  trigger.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    resetModalSlides(modalId);
  });
});

// --- Existing code from your snippet ---
document.addEventListener("DOMContentLoaded", () => {
  // ... your existing code ...
  initSectionTransitions(); // Keep existing init

  // Original image animation handlers
  const sec1ImagesFile1 = document.querySelectorAll(".sec-1-images-file1 img");
  sec1ImagesFile1.forEach((img) => {
    // Check if handler is already added or only add once
    // img.removeEventListener("animationend", fadeOutAfterDelay); // Prevent duplicates if this runs multiple times
     img.addEventListener("animationend", function fadeOutAfterDelay() {
      setTimeout(() => img.classList.add("fade-out"), 1500);
    });
  });

  // Lottie initializations
  const ring2Lottie = lottie.loadAnimation({
    container: document.getElementById("ring2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../json/RocketRing.json",
  });

  // White stars initialization
  ["white", "white2", "white3", "white4"].forEach((id) => {
    const container = document.getElementById(id);
    if(container) { // Check if container exists
        lottie.loadAnimation({
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "../json/white-Stars-Burst.json",
        });
    }
  });

 
  // Focus white stars initialization (Keep these)
  ["F0", "F1", "F2", "F3", "F4", "F5"].forEach((prefix) => {
    loadWhiteStars(prefix, ["1", "2", "3", "4"]);
  });

  // --- Call the new modal and slider initializers ---
  initModals();

  // Existing rocket observer logic
  const rocketImg = document.querySelector(".sticky-rocket-img");
  const rocketVideo = document.querySelector(".sticky-rocket-video");
  const rocketVideoTwo = document.querySelector(".sticky-rocket-videoTwo");
  const starsBg = document.querySelector(".BgVideoRocket");

  const showOnly = (el) => {
    [rocketImg, rocketVideo, rocketVideoTwo].forEach((e) =>
      e.classList.remove("show-rocket")
    );
    if(el) el.classList.add("show-rocket"); // Added check for el
  };

  if (starsBg) { // Check if starsBg exists
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Ensure rocket elements exist before trying to show them
          if (entry.isIntersecting && rocketVideo) {
            showOnly(rocketVideo); // section in view
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > 0 && rocketVideoTwo) {
              showOnly(rocketVideoTwo); // scrolling up
            } else if (rocketImg) {
              showOnly(rocketImg); // scrolling down
            }
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(starsBg);
  }

}); // End of existing DOMContentLoaded listener

// Keep your loadWhiteStars function
function loadWhiteStars(focusElementIdPrefix, starIdSuffixes) {
  starIdSuffixes.forEach((idSuffix) => {
    const container = document.getElementById(
      `white-${focusElementIdPrefix}-${idSuffix}`
    );
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../json/white-Stars-Burst.json",
      });
    }
  });
}
