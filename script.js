document.addEventListener("DOMContentLoaded", function () {
  // ✅ FAQ Toggle Logic
  const faqQuestions = document.querySelectorAll(".faqQuestions");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".plusIcon");

      document.querySelectorAll(".faqAnswer.show").forEach((openAnswer) => {
        if (openAnswer !== answer) {
          openAnswer.classList.remove("show");
          openAnswer.previousElementSibling
            .querySelector(".plusIcon")
            ?.classList.remove("rotate");
        }
      });

      answer.classList.toggle("show");
      icon.classList.toggle("rotate");
    });
  });

  // ✅ Sign Up Button Redirect
  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "https://www.netflix.com/in/login";
    });
  }

  // ✅ Email Validation on "Get Started"
  const getStarted = document.getElementById("get-started");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("email-error");

  if (getStarted && emailInput) {
    getStarted.addEventListener("click", function (e) {
      e.preventDefault();

      const emailValue = emailInput.value.trim();
      errorMsg.textContent = "";
      emailInput.classList.remove("invalid");

      if (!emailValue) {
        errorMsg.textContent =
          "⚠️ Please enter your email address to continue your journey.";
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

      // Valid email – redirect
      window.location.href = "https://www.netflix.com/login";
    });
  }

  // ✅ Language Switcher (English ⇄ Hindi)
  const translations = {
    "Enjoy big movies, hit series and more from ₹ 149.": "₹149 से शुरू होने वाली शानदार फ़िल्मों, हिट सीरीज़ और बहुत कुछ का आनंद लें।",
    "Join today. Cancel anytime.": "आज ही शामिल हों। कभी भी रद्द करें।",
    "Ready to watch? Enter your email to create or restart your membership.": "देखना शुरू करने के लिए अपना ईमेल दर्ज करें।",
    "Download your shows to watch offline": "अपने शो डाउनलोड करें और ऑफलाइन देखें",
    "Save your favourites easily and always have something to watch.": "अपने पसंदीदा शो आसानी से सेव करें और कभी भी देखें।",
    "Enjoy on your TV": "अपने टीवी पर आनंद लें",
    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.": "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर आदि पर देखें।",
    "Watch everywhere": "हर जगह देखें",
    "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.": "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर असीमित मूवी और शो स्ट्रीम करें।",
    "Create profiles for kids": "बच्चों के लिए प्रोफ़ाइल बनाएं",
    "Send children on adventures with their favourite characters in a space made just for them—free with your membership.": "बच्चों को उनके पसंदीदा पात्रों के साथ रोमांच पर भेजें — सिर्फ उनके लिए बनाए गए स्थान में।",
    "Sign Up": "साइन अप करें",
    "Email Address": "ईमेल पता",
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले सवाल",
    "What is NetFlix": "Netflix क्या है?",
    "How much does Netflix cost?": "Netflix की कीमत क्या है?",
    "Where can I watch?": "मैं कहां देख सकता हूँ?",
    "How do i cancel ?": "मैं रद्द कैसे करूं?",
    "What can I watch on Netflix?": "मैं Netflix पर क्या देख सकता हूं?",
    "Is NetFlix good for kids ?": "क्या Netflix बच्चों के लिए अच्छा है?",
    "Questions? Call 000-800-919-1743": "प्रश्न? कॉल करें 000-800-919-1743",
  };

  const langSelect = document.getElementById("language-select");

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      if (langSelect.value === "hi") {
        Object.entries(translations).forEach(([eng, hindi]) => {
          const elements = Array.from(document.querySelectorAll("*")).filter(
            (el) =>
              el &&
              el.children.length === 0 &&
              typeof el.innerText === "string" &&
              el.innerText.trim() === eng
          );
          elements.forEach((el) => {
            el.innerText = hindi;
          });
        });

        if (emailInput) {
          emailInput.placeholder = "ईमेल पता";
        }

        if (getStarted) {
          getStarted.innerText = "शुरू करें >";
        }
      } else {
        window.location.reload();
      }
    });
  }

  // ✅ Trending Now Carousel Scroll
  const container = document.getElementById("trendingContainer");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  const cardWidth = 220;
  const scrollAmount = cardWidth * 6;

  if (leftBtn && rightBtn && container) {
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});
