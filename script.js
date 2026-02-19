const texts = ["Java Developer", "Web Developer"];
let index = 0;
let charIndex = 0;
let typingSpeed = 150;
let deletingSpeed = 80;
let isDeleting = false;

function typeEffect() {
  let currentText = texts[index];
  let displayText = currentText.substring(0, charIndex);
  document.getElementById("typing").textContent = displayText;

  if (!isDeleting) {
    // Typing
    charIndex++;
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait 1 sec before deleting
      return;
    }
  } else {
    // Deleting
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // go to next text
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}
function openProject(projectName){
    window.location.href = `project.html?project=${projectName}`;
}
typeEffect();
//
   const slides1 = document.getElementById("slides1");
    const totalSlides1 = slides1.children.length;
    let currentIndex1 = 0;

    function showSlide(index) {
      // keep index in range (0 to totalSlides-1)
      if (index < 0) {
        currentIndex1 = totalSlides1 - 1;   // go to last
      } else if (index >= totalSlides1) {
        currentIndex1 = 0;                 // go to first
      } else {
        currentIndex1 = index;
      }

      // move slides container
      slides1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      showSlide(currentIndex1 - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      showSlide(currentIndex1 + 1);
    });

    // Auto-slide every 3 seconds (optional)
    setInterval(() => {
      showSlide(currentIndex1 + 1);
    }, 3000);

    // 2nd
    const slides2 = document.getElementById("slides2");
    const totalSlides2 = slides2.children.length;
    let currentIndex2 = 0;

    function showSlide1(index) {
      // keep index in range (0 to totalSlides-1)
      if (index < 0) {
        currentIndex2 = totalSlides2 - 1;   // go to last
      } else if (index >= totalSlides2) {
        currentIndex2 = 0;                 // go to first
      } else {
        currentIndex2 = index;
      }

      // move slides container
      slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      showSlide(currentIndex2 - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      showSlide(currentIndex2 + 1);
    });

    // Auto-slide every 3 seconds (optional)
    setInterval(() => {
      showSlide1(currentIndex2 + 1);
    }, 3000);

    //3rd
    const slides3 = document.getElementById("slides3");
    const totalSlides3 = slides3.children.length;
    let currentIndex3 = 0;

    function showSlide3(index) {
      // keep index in range (0 to totalSlides-1)
      if (index < 0) {
        currentIndex3 = totalSlides3 - 1;   // go to last
      } else if (index >= totalSlides3) {
        currentIndex3 = 0;                 // go to first
      } else {
        currentIndex3 = index;
      }

      // move slides container
      slides3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      showSlide(currentIndex3 - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      showSlide(currentIndex3 + 1);
    });

    // Auto-slide every 3 seconds (optional)
    setInterval(() => {
      showSlide3(currentIndex3 + 1);
    }, 3000);

    // contat
      const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop real submit for now

      // reset error states
      let isValid = true;
      [nameError, emailError, subjectError, messageError].forEach(err => err.style.display = "none");

      if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
      }

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        emailError.style.display = "block";
        isValid = false;
      }

      if (subjectInput.value.trim() === "") {
        subjectError.style.display = "block";
        isValid = false;
      }

      if (messageInput.value.trim().length < 5) {
        messageError.textContent = "Message should be at least 5 characters.";
        messageError.style.display = "block";
        isValid = false;
      }

      if (!isValid) return;

      // Fake success for now (no backend yet)
      successMessage.style.display = "block";

      // Clear fields
      form.reset();

    });
