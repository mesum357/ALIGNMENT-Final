
// Rzwin
// Rzwin


// Modal functionality
const modalTriggers = document.querySelectorAll(".modal-trigger");
const closeBtns = document.querySelectorAll(".close-btn");
const closeBtnsn = document.querySelectorAll(".close-btn_main");
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");

// Track if any modal is open
let isModalOpen = false;

// Open modal when clicking on an image
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    overlay.style.display = "block";
    if (modalId === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "flex";
    }
    document.body.style.overflow = "hidden";
    setSlide(0, modal);
    modal.dispatchEvent(new Event("modal:open"));
    isModalOpen = true;
  });
});

// Close modal when clicking close button
closeBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const modal = this.closest(".modal");
    modal.style.display = "none";
    overlay.style.display = "none";
    if (modal && modal.id === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "none";
    }
    document.body.style.overflow = "";
    isModalOpen = false;
  });
});
closeBtnsn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const modal = this.closest(".modal");
    modal.style.display = "none";
    overlay.style.display = "none";
    if (modal && modal.id === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "none";
    }
    document.body.style.overflow = "";
    isModalOpen = false;
  });
});



// Close modal when clicking anywhere
document.addEventListener("click", function (e) {
  if (isModalOpen) {
    // Check if click is outside modal content
    const clickedInsideModal =
      e.target.closest(".modal-content") ||
      e.target.closest(".modal-trigger") ||
      e.target.classList.contains("close-btn");

    if (!clickedInsideModal) {
      modals.forEach((modal) => {
        if (modal.id === "modalG") {
          var modalGOverlay = document.getElementById("modalG-overlay");
          if (modalGOverlay) modalGOverlay.style.display = "none";
        }
        modal.style.display = "none";
      });
      overlay.style.display = "none";
      document.body.style.overflow = "";
      isModalOpen = false;
    }
  }
});

// Debugging for modal2
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    const modalId = this.getAttribute("data-modal");
    console.log("Trigger clicked for modal:", modalId);
    if (modalId === "modal2") {
      console.log("Attempting to open modal2");
    }
  });
});

// Set slide function
function setSlide(index, modalElement) {
  const slider = modalElement.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const dots = modalElement.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Initialize dots for all modals
modals.forEach((modal) => {
  const slides = modal.querySelectorAll(".slide");
  const dotsContainer = modal.querySelector(".dots");
  const prevBtn = modal.querySelector(".prev-btn");
  const nextBtn = modal.querySelector(".next-btn");

  // Store currentSlide as a property of the modal
  modal.currentSlide = 0;

  // Create dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.currentSlide = index;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === modal.currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === modal.currentSlide);
    });

    // Always show both buttons for wrap-around
    if (prevBtn) prevBtn.style.display = slides.length > 1 ? "inline-block" : "none";
    if (nextBtn) nextBtn.style.display = slides.length > 1 ? "inline-block" : "none";
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (modal.currentSlide === 0) {
        modal.currentSlide = slides.length - 1; // Wrap to last
      } else {
        modal.currentSlide--;
      }
      updateSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (modal.currentSlide === slides.length - 1) {
        modal.currentSlide = 0; // Wrap to first
      } else {
        modal.currentSlide++;
      }
      updateSlide();
    });
  }

  // When modal is opened, always reset to first slide
  modal.addEventListener("modal:open", () => {
    modal.currentSlide = 0;
    updateSlide();
  });

  // Initialize
  updateSlide();
});


document.querySelectorAll(".thank-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Prevent double click
    if (btn.classList.contains('loading')) return;
    // Add loading state
    btn.classList.add('loading');
    btn.disabled = true;
    // Save original content to restore later
    const originalContent = btn.innerHTML;
    // Show loading spinner (simple CSS spinner or text)
    btn.innerHTML = '<span class="spinner" style="display:inline-block;width:20px;height:20px;border:2px solid #ccc;border-top:2px solid #00BCD1;border-radius:50%;animation:spin 1s linear infinite;vertical-align:middle;"></span>';
    // Find the first visible, non-empty email input
    const emailInputs = [
      document.getElementById("email"),
      document.getElementById("email1"),
      document.getElementById("email2"),
      document.getElementById("email3"),
      document.getElementById("email4"),
      document.getElementById("email5")
    ];
    let emailValue = "";
    for (const input of emailInputs) {
      if (input && input.offsetParent !== null && input.value.trim().length > 0) {
        emailValue = input.value.trim();
        break;
      }
    }
    if (!emailValue) {
      console.log("No email found");
      btn.classList.remove('loading');
      btn.disabled = false;
      btn.innerHTML = originalContent;
      return;
    }
    const param = { email: emailValue };
    emailjs.send('service_m4c1dqb', 'template_1ayxyid', param)
      .then(() => {
        console.log("Successfully sent email");
        const modal = this.closest(".modal");
        if (modal) {
          modal.style.display = "none";
          document.getElementById("modalG-overlay").style.display = "none";
        }
        if (typeof overlay !== 'undefined') {
          overlay.style.display = "none";
        }
        document.body.style.overflow = "";
        isModalOpen = false;
        document.getElementById("modalG").style.display = "block";
        document.getElementById("modalG-overlay").style.display = "flex";
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      })
      .finally(() => {
        btn.classList.remove('loading');
        btn.disabled = false;
        btn.innerHTML = originalContent;
      });
  });
});

// Add spinner animation CSS if not present
if (!document.getElementById('spinner-style')) {
  const style = document.createElement('style');
  style.id = 'spinner-style';
  style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
  document.head.appendChild(style);
}