document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle Logic
  const faqQuestions = document.querySelectorAll(".faqQuestions");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".plusIcon");

      // Close other answers and reset icons
      document.querySelectorAll(".faqAnswer.show").forEach((openAnswer) => {
        if (openAnswer !== answer) {
          openAnswer.classList.remove("show");
          openAnswer.previousElementSibling
            .querySelector(".plusIcon")
            ?.classList.remove("rotate");
        }
      });

      // Toggle current answer and icon
      answer.classList.toggle("show");
      icon.classList.toggle("rotate");
    });
  });

  // 🚀 Sign Up Button Redirect
  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "https://www.netflix.com/in/login";
    });
  }

  // ✅ Email validation on "Get Started"
  const getStarted = document.getElementById("get-started");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("email-error");

  if (getStarted && emailInput) {
    getStarted.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default navigation

      const emailValue = emailInput.value.trim();
      errorMsg.textContent = "";
      emailInput.classList.remove("invalid");

      if (!emailValue) {
        errorMsg.textContent = "⚠️ Please enter your email address to continue your journey.";
        emailInput.classList.add("invalid");
        emailInput.style.border = "2px solid red";

        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        errorMsg.textContent = `⚠️ Please include an '@' in the email address. '${emailValue}' is missing an '@'.`;
        emailInput.style.border = "2px solid red";
        return;
      }

      // ✅ Valid email – redirect
      window.location.href = "https://www.netflix.com/login";
    });
  }
});


