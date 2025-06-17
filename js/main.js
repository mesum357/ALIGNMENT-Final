// Loading screen functionality
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  
  // Hide loading screen when everything is loaded
  window.addEventListener('load', () => {
    // Add loaded class to all elements
    const elementsToLoad = [
      '#mainContainer',
      '#scroolDataMain',
      '.Stars',
      '.Cloud',
      '.CloudTwo',
      '.titleMain',
      '.fadeText',
      '.topic',
      '.topicText',
      '.SkipButtonContainer',
      '.welocme'
    ];
    
    elementsToLoad.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => element.classList.add('loaded'));
    });

    // Hide loading screen
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  });
});

window.addEventListener("load", () => {
  const stars = document.querySelector(".Stars");
  const cloud = document.querySelector(".Cloud");
  const cloudTwo = document.querySelector(".CloudTwo");
  const text = document.querySelector(".showText");
  const text2 = document.querySelector(".showText2");
  const img1 = document.querySelector(".topicOneImg");
  const img2 = document.querySelector(".topicTwoImg");
  const img3 = document.querySelector(".topicThreeImg");
  const topicOneData = document.querySelector(".topicOneData");
  const topicOneTitle = document.querySelector(".topicOneTitle");
  const topicTwoTitle = document.querySelector(".topicTwoTitle");
  const topicTwoData = document.querySelector(".topicTwoData");
  const topicThreeDataUp = document.querySelector(".topicThreeDataUp");
  const topicThreeTitle = document.querySelector(".topicThreeTitle");
  const topicThreeData = document.querySelector(".topicThreeData");
  const topicFourDataup = document.querySelector(".topicFourDataup");
  const topicFourTitle = document.querySelector(".topicFourTitle");
  const topicFourData = document.querySelector(".topicFourData");
  const topicFourSubTitle = document.querySelector(".topicFourSubTitle");
  const SkipButton = document.querySelector(".SkipButton");
  const welcome = document.querySelector(".welocme");
  const takeOffBtn = document.querySelector(".takeOff");
  const mainContainer = document.getElementById("mainContainer");
  const yesTitle = document.querySelector(".yesTitle");
  const rocket = document.querySelector(".rocket");
  const takeOffText = document.querySelector(".takeOffText");

  const timeouts = [];

  // Function to run animation sequence
  function runSequence() {
    timeouts.push(
      setTimeout(() => {
        cloudTwo.style.transition = "opacity 3000ms linear";
        cloudTwo.style.opacity = "1";
      }, 1000)
    );
    timeouts.push(
      setTimeout(() => {
        cloud.style.transition = "opacity 3000ms linear";
        cloud.style.opacity = "1";
      }, 1000)
    );
    timeouts.push(
      setTimeout(() => {
        SkipButton.style.transition = "opacity 3000ms linear";
        SkipButton.style.opacity = "1";
      }, 1000)
    );

    timeouts.push(
      setTimeout(() => {
        text.style.transition = "opacity 1000ms linear";
        text.style.opacity = "1";
      }, 4000)
    );

    timeouts.push(
      setTimeout(() => {
        text2.style.transition = "opacity 1000ms linear";
        text2.style.opacity = "1";
      }, 5000)
    );

    timeouts.push(
      setTimeout(() => {
        text.style.opacity = "0";
      }, 7000)
    );

    timeouts.push(
      setTimeout(() => {
        text2.style.opacity = "0";
      }, 7000)
    );

    // Topic One
    timeouts.push(
      setTimeout(() => {
        img1.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img1.style.opacity = "1";
        img1.style.width = "40%";
      }, 8000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneData.style.transition = "opacity 900ms linear";
        topicOneData.style.opacity = "1";
      }, 10000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneTitle.style.transition = "opacity 900ms linear";
        topicOneTitle.style.opacity = "1";
      }, 10700)
    );

    timeouts.push(
      setTimeout(() => {
        img1.style.opacity = "0";
        img1.style.transition = "opacity 900ms linear";
      }, 13000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneData.style.opacity = "0";
      }, 13000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneTitle.style.opacity = "0";
      }, 13000)
    );

    // Topic Two
    timeouts.push(
      setTimeout(() => {
        img2.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img2.style.opacity = "1";
        img2.style.width = "40%";
      }, 14000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoTitle.style.transition = "opacity 900ms linear";
        topicTwoTitle.style.opacity = "1";
      }, 16000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoData.style.transition = "opacity 900ms linear";
        topicTwoData.style.opacity = "1";
      }, 16700)
    );

    timeouts.push(
      setTimeout(() => {
        img2.style.opacity = "0";
        img2.style.transition = "opacity 900ms linear";
      }, 19000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoTitle.style.opacity = "0";
      }, 19000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoData.style.opacity = "0";
      }, 19000)
    );

    // Topic Three
    timeouts.push(
      setTimeout(() => {
        img3.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img3.style.opacity = "1";
        img3.style.width = "40%";
      }, 20000)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeDataUp.style.transition = "opacity 900ms linear";
        topicThreeDataUp.style.opacity = "1";
      }, 22000)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeTitle.style.transition = "opacity 900ms linear";
        topicThreeTitle.style.opacity = "1";
      }, 22700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeData.style.transition = "opacity 900ms linear";
        topicThreeData.style.opacity = "1";
      }, 23400)
    );

    timeouts.push(
      setTimeout(() => {
        img3.style.opacity = "0";
        img3.style.transition = "opacity 900ms linear";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeDataUp.style.opacity = "0";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeTitle.style.opacity = "0";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeData.style.opacity = "0";
      }, 25700)
    );

    // Topic Four
    timeouts.push(
      setTimeout(() => {
        topicFourDataup.style.transition = "opacity 900ms linear";
        topicFourDataup.style.opacity = "1";
      }, 26700)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourTitle.style.transition =
          "opacity 900ms linear, font-size 900ms linear";
        topicFourTitle.style.opacity = "1";
        topicFourTitle.style.fontSize = "45px";
      }, 27400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourData.style.transition = "opacity 900ms linear";
        topicFourData.style.opacity = "1";
      }, 28300)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourSubTitle.style.transition = "opacity 900ms linear";
        topicFourSubTitle.style.opacity = "1";
      }, 29000)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourDataup.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourTitle.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourData.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourSubTitle.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        cloudTwo.style.transition = "visibility 1000ms linear";
        cloudTwo.style.visibility = "visible";
      }, 30200)
    );
    timeouts.push(
      setTimeout(() => {
        cloud.style.transition = "visibility 1000ms linear";
        cloud.style.visibility = "hidden";
        cloud.style.width = "0";
      }, 30000)
    );

    // Hide Skip Button and show welcome
    timeouts.push(
      setTimeout(() => {
        SkipButton.style.transition = "opacity 1s linear";
        SkipButton.style.opacity = "0";
        setTimeout(() => {
          SkipButton.style.display = "none";
          SkipButton.style.transition = "display 1s linear";
        }, 1000);
      }, 31000)
    );

    timeouts.push(
      setTimeout(() => {
        welcome.style.visibility = "visible";
        welcome.style.opacity = "0";
        welcome.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
          welcome.style.opacity = "1";

          // Hide the yesTitle initially
          const yesTitle = document.querySelector(".yesTitle");
          if (yesTitle) {
            yesTitle.style.visibility = "hidden";
            yesTitle.style.opacity = "0";
            yesTitle.style.transition = "opacity 1s ease-in-out";

            // Show the yesTitle with a 1s delay after welcome appears
            setTimeout(() => {
              yesTitle.style.visibility = "visible";
              yesTitle.style.opacity = "1";
            }, 1000);
          }
        }, 50);
      }, 32200)
    );

    // Default yesTitle fade out at 35000ms (only if skip not clicked)
    timeouts.push(
      setTimeout(() => {
        yesTitle.style.transition = "opacity 1s linear";
        yesTitle.style.opacity = "0";
        setTimeout(() => {}, 1000);
      }, 35000)
    );
    timeouts.push(
      setTimeout(() => {
        rocket.classList.add("rocketShow");
        setTimeout(() => {}, 1000);
      }, 35000)
    );
    timeouts.push(
      setTimeout(() => {
        takeOffBtn.classList.add("expand");
      }, 37200)
    );
    timeouts.push(
      setTimeout(() => {
        takeOffText.classList.add("show");
      }, 38200)
    );
  }

  runSequence();
  SkipButton.addEventListener("click", () => {
    timeouts.forEach(clearTimeout);

    const elementsToFade = [
      text,
      text2,
      img1,
      img2,
      img3,
      topicOneData,
      topicOneTitle,
      topicTwoTitle,
      topicTwoData,
      topicThreeDataUp,
      topicThreeTitle,
      topicThreeData,
      SkipButton,
    ];

    elementsToFade.forEach((el) => {
      el.style.transition = "opacity 2s linear";
      el.style.opacity = "0";
    });

    // Hide all elements after fading out
    setTimeout(() => {
      elementsToFade.forEach((el) => {
        el.style.display = "none";
      });

      welcome.style.visibility = "visible";
    }, 100);

    // Cloud visibility transitions
    cloudTwo.style.opacity = "0";
    cloudTwo.style.visibility = "visible";
    cloudTwo.style.transition = "opacity 1s linear, visibility 3s linear";
    setTimeout(() => {
      cloudTwo.style.opacity = "1";
    }, 100); // trigger opacity after visibility set

    cloud.style.opacity = "1";
    cloud.style.transition = "opacity 1s linear, visibility 3s linear";
    setTimeout(() => {
      cloud.style.opacity = "0";
      cloud.style.visibility = "hidden";
    }, 100); // fade out and then hide

    // Continue with rest of the transitions
    setTimeout(() => {
      yesTitle.style.transition = "opacity 1s linear";
      yesTitle.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
      rocket.classList.add("rocketShow");
    }, 1800);

    setTimeout(() => {
      takeOffBtn.classList.add("expand");
    }, 4000);

    setTimeout(() => {
      takeOffText.classList.add("show");
    }, 5000);

    welcome.style.visibility = "visible";
    welcome.style.opacity = "0";
    welcome.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      welcome.style.opacity = "1";

      // Hide the yesTitle initially
      const yesTitle = document.querySelector(".yesTitle");
      if (yesTitle) {
        yesTitle.style.visibility = "hidden";
        yesTitle.style.opacity = "0";
        yesTitle.style.transition = "opacity 1s ease-in-out";

        // Show the yesTitle with a 1s delay after welcome appears
        setTimeout(() => {
          yesTitle.style.visibility = "visible";
          yesTitle.style.opacity = "1";
        }, 1000);
      }
    }, 50);
  });

  // Load animations
  const blueExplosion = lottie.loadAnimation({
    container: document.getElementById("blueExplosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/Blue-explosion.json",
  });

  const yellow = lottie.loadAnimation({
    container: document.getElementById("yellow-explosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/yellow-explosion.json",
  });

  const our_mission = lottie.loadAnimation({
    container: document.getElementById("our_mission"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-mission.json", // path to the animation json
  });
  const ourDedication = lottie.loadAnimation({
    container: document.getElementById("our-dedication"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-dedication.json", // path to the animation json
  });
  const radio = lottie.loadAnimation({
    container: document.getElementById("radio"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/radio-tower.json", // path to the animation json
  });

  const ourVision = lottie.loadAnimation({
    container: document.getElementById("our-vision"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-vision.json", // path to the animation json
  });

  const pinkExplosion = lottie.loadAnimation({
    container: document.getElementById("pinkExplosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/pink-explosion.json",
  });

  // Function to play the animation three times
  function playThrice(animation) {
    return new Promise((resolve) => {
      let playCount = 0;

      const playNext = () => {
        if (playCount < 3) {
          animation.play();
          playCount++;

          animation.onComplete = playNext; // Play again when it completes
        } else {
          resolve(); // Resolve the promise after 3 plays
        }
      };

      playNext(); // Start the first play
    });
  }

  // Function to start the animations
  function startAnimations() {
    // Start the animations after "welocme" becomes block
    const welcomeElement = document.querySelector(".welocme");

    // If "welocme" is initially display:block, trigger animations immediately
    if (
      welcomeElement &&
      window.getComputedStyle(welcomeElement).display === "block"
    ) {
      Promise.all([
        playThrice(blueExplosion),
        playThrice(yellow),
        playThrice(pinkExplosion),
      ]).then(() => {
        blueExplosion.style.display = "hidden";
        yellow.style.display = "hidden";
        pinkExplosion.style.display = "hidden";
      });
    }

    // Observe changes to the display property of .welocme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          welcomeElement.style.display === "block"
        ) {
          // Trigger animations to run three times when .welcome becomes block
          Promise.all([
            playThrice(blueExplosion),
            playThrice(yellow),
            playThrice(pinkExplosion),
          ]).then(() => {
            // Hide them after animation
            blueExplosion.style.visibility = "hidden";
            yellow.style.visibility = "hidden";
            pinkExplosion.style.visibility = "hidden";
          });
        }
      });
    });

    // Set observer for the 'style' attribute change
    observer.observe(welcomeElement, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  // Call the function to start the animations
  startAnimations();

  // Rocket Animation Setup
  const rocketAnimationInstance = lottie.loadAnimation({
    container: document.getElementById("rocketAnimation"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/rocket-iwth-hearts.json",
  });

  const starsForQuestions = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsTwo = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-two"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsThree = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-Three"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsFour = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-Four"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  
  const rocketWithBoosterOnly = lottie.loadAnimation({
    container: document.getElementById("rocketWithBoosterOnly"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/rocket-with-booster-only.json", // path to the animation json
  });
  const starsForQuestionsFive = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-five"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsSix = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-six"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const countDown = lottie.loadAnimation({
    container: document.getElementById("count-down"),
    renderer: "svg",
    loop: false,
    autoplay: false, // Set autoplay to false, so it won't play automatically
    path: "../json/count-down.json",
  });


  const starScreen = lottie.loadAnimation({
    container: document.getElementById("star-screen"),
    renderer: "svg",
    loop: false, // run only once
    autoplay: true, // play automatically
    path: "../json/star-screen.json", // path to the animation json
  });
  const cloudsOpt = lottie.loadAnimation({
    container: document.getElementById("clouds_opt"),
    renderer: "svg",
    loop: true, // run continuously
    autoplay: true, // play automatically
    path: "../json/clouds_opt.json", // path to the animation json
  });

  // Update Take Off button functionality to hide itself when clicked

  takeOffBtn.addEventListener("click", () => {
    // Hide the "Take Off" button
    takeOffBtn.style.display = "none";

    // Hide the "Tab to Take off" text when countdown starts
    const takeOffText = document.querySelector(".takeOffText");
    if (takeOffText) {
      takeOffText.style.visibility = "hidden"; // Hide the text by making it invisible
      takeOffText.style.opacity = "0"; // Alternatively, hide it by making it transparent
    }

    // 1. Show and Start Countdown Animation
    const countDownContainer = document.getElementById("count-down");
    countDownContainer.style.display = "block"; // Show countdown

    // Play countdown animation
    countDown.play();

    // Listen for the animation complete event
    countDown.addEventListener("complete", function () {
      // Ensure countdown has finished, then hide countdown and trigger the next step
      countDownContainer.style.display = "none"; // Hide countdown after it completes

      // 2. Add a small delay to ensure the countdown has fully disappeared before taking off actions
      setTimeout(() => {
        // Proceed with "Take Off" logic
        const children = mainContainer.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (
            !child.classList.contains("Stars") &&
            child.id !== "rocketAnimation" &&
            !child.classList.contains("welocme")
          ) {
            child.style.display = "none";
          }
        }

        const takeOffContainer = document.querySelector(".TakeOffContainer");
        if (takeOffContainer) {
          takeOffContainer.style.display = "none";
        }
        const mainTopicContainer = document.querySelector(".mainTopicContainer");
        
        if (mainTopicContainer) {
          mainTopicContainer.style.display = "none";
        }

        const rocketContainer = document.getElementById("rocketAnimation");
        rocketContainer.style.display = "block";
        rocketContainer.style.visibility = "visible";
        rocketContainer.style.opacity = "1";

        if (stars) stars.style.opacity = "1";
        if (cloud) cloud.style.opacity = "1";
        if (cloudTwo) cloudTwo.style.opacity = "1";

        rocketAnimationInstance.goToAndPlay(0, true); // Start Rocket Animation
      });
    });
  });

  rocketAnimationInstance.addEventListener("complete", function () {
    const animationDuration = rocketAnimationInstance.totalFrames;
    const stopAtFrame = animationDuration * 0.9;
    rocketAnimationInstance.goToAndStop(stopAtFrame, true);

    const rocketContainer = document.getElementById("rocketAnimation");
    rocketContainer.style.opacity = "0";
    rocketContainer.style.visibility = "hidden";
    setTimeout(() => {
      rocketContainer.style.display = "none";
    }, 100);

    // Show scroolDataMain from the top, not the bottom
    const scroolDataMain = document.getElementById("scroolDataMain");
    scroolDataMain.style.display = "block";
 
    // Always start at the top
    scroolDataMain.scrollTop = 0;

    // Hide the main container
    mainContainer.style.display = "none";
  });
});

// Load Lottie Rocket Animation
const rocketAnimationInstance = lottie.loadAnimation({
  container: document.getElementById("rocketAnimation"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "rocket-animation.json", // Correct path to your Lottie file
});

// When animation completes (~90%)
rocketAnimationInstance.addEventListener("complete", function () {
  const animationDuration = rocketAnimationInstance.totalFrames;
  const stopAtFrame = animationDuration * 0.9;
  rocketAnimationInstance.goToAndStop(stopAtFrame, true);

  const rocketContainer = document.getElementById("rocketAnimation");
  rocketContainer.style.opacity = "0";
  rocketContainer.style.visibility = "hidden";
  setTimeout(() => {
    rocketContainer.style.display = "none";
  }, 100);

  // Show scroolDataMain from the top, not the bottom
  const scroolDataMain = document.getElementById("scroolDataMain");
  scroolDataMain.style.display = "block";

  // Always start at the top
  scroolDataMain.scrollTop = 0;

  // Hide the main container
  mainContainer.style.display = "none";
});

const target = document.getElementById("scroolDataMain");

const observer = new MutationObserver(() => {
  const style = window.getComputedStyle(target);
  if (style.display !== "none") {
    window.scrollTo({
      top: target.scrollHeight,
      behavior: "smooth",
    });
    observer.disconnect(); // Stop watching once done
  }
});

observer.observe(target, {
  attributes: true,
  attributeFilter: ["style", "class"],
});

// Zoom effect based on rocket position
const rocketImg = document.querySelector(".sticky-rocket-img");
const targetImgs = document.querySelectorAll(".img_Icon");
const targetImgsTwo = document.querySelectorAll(".img_Icon-two");
const img_iconText = document.querySelectorAll(".img_iconText");
const img_iconTextTwo = document.querySelectorAll(".img_iconTextTwo");
const img_iconTextThree = document.querySelectorAll(".img_iconTextThree");
console.log(img_iconText);

function scaleImagesNearRocket() {
  const rocketRect = rocketImg.getBoundingClientRect();
  targetImgs.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const distance = Math.abs(
      (imgRect.top + imgRect.bottom) / 2 -
        (rocketRect.top + rocketRect.bottom) / 2
    );
    if (distance < 150) {
      img.classList.add("scale-up");
    } else {
      img.classList.remove("scale-up");
    }
  });
  targetImgsTwo.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const distance = Math.abs(
      (imgRect.top + imgRect.bottom) / 2 -
        (rocketRect.top + rocketRect.bottom) / 2
    );
    if (distance < 300) {
      img.classList.add("scale-up");
    } else {
      img.classList.remove("scale-up");
    }
  });
  img_iconText.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > 10 && distance < 400) {
      text.classList.add("mt_space");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_space");
    }
  });
  img_iconTextTwo.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > 10 && distance < 400) {
      text.classList.add("mt_spaceTwo");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_spaceTwo");
    }
  });
   img_iconTextThree.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > -100 && distance < 400) {
      text.classList.add("mt_spaceTwo");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_spaceTwo");
    }
  });
}
let isExistingFunctionsDone = false; // Flag to track if existing functions are done

// Monitor when your existing functions are done
// You can set this flag to true at the appropriate point in your existing code
// For example, after the MutationObserver or other logic completes
const observerLast = new MutationObserver(() => {
  const target = document.getElementById("scroolDataMain");
  const style = window.getComputedStyle(target);
  if (style.display !== "none") {
    isExistingFunctionsDone = true; // Mark as done
    observerLast.disconnect(); // Stop observing
  }
});

window.addEventListener("scroll", scaleImagesNearRocket);

// Ensure this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const scroolDataMain = document.getElementById("scroolDataMain");
  const rocketStops = document.getElementById("rocketStops");
  const lastDis = document.querySelector(".lastDis");

  if (!scroolDataMain || !rocketStops || !lastDis) {
    console.error("Required elements are missing in the DOM.");
    return;
  }

  // Create an IntersectionObserver to detect when .lastDis enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wait for 0.5 seconds before hiding scroolDataMain and showing rocketStops
          setTimeout(() => {
            scroolDataMain.style.display = "none";
            rocketStops.style.display = "block";
            document.querySelector(".sec-1-file1").style.display = "block";
          }, 1); // 0.5 seconds
        }
      });
    }
  );

  // Observe the .lastDis element
  observer.observe(lastDis);
});

// Update Go Back button functionality to ensure the rocket image appears at the bottom

document.getElementById("goBackButton").addEventListener("click", () => {
  const scroolDataMain = document.getElementById("scroolDataMain");
  const rocketStops = document.getElementById("rocketStops");
  const rocketImg = document.querySelector(".sticky-rocket-img");
  const rocketVideoTwo = document.querySelector(".sticky-rocket-videoTwo");

  // Hide the current section
  rocketStops.style.display = "none";

  // Show the first section and directly jump to its bottom
  scroolDataMain.style.display = "block";
 

  // Ensure the rocket image is visible and the video is hidden
  if (rocketImg && rocketVideoTwo) {
    rocketImg.classList.add("show-rocket");
    rocketVideoTwo.classList.remove("show-rocket");
  }

  // Directly set the scroll position to the bottom of the section
  window.scrollTo({
    top: scroolDataMain.scrollHeight,
    behavior: "auto", // Use "auto" to jump directly without smooth scrolling
  });
});

