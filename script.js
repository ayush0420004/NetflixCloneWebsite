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

  // New additions
  "Trending Now": "अभी चलन में",
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.":
    "Netflix एक स्ट्रीमिंग सेवा है जो पुरस्कार विजेता टीवी शो, फ़िल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ हजारों इंटरनेट से जुड़े डिवाइस पर उपलब्ध कराता है।",

  "You can watch as much as you want, whenever you want, without a single ad-all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!":
    "आप जब चाहें, जितना चाहें देख सकते हैं — बिना किसी विज्ञापन के और एक कम मासिक शुल्क पर। हमेशा कुछ नया देखने को मिलता है, और हर हफ्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं।",

  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.":
    "Netflix को अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर देखें, एक निश्चित मासिक शुल्क पर। प्लान ₹149 से ₹649 प्रति माह तक उपलब्ध हैं। कोई अतिरिक्त शुल्क नहीं, कोई अनुबंध नहीं।",

  "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.":
    "कहीं भी, कभी भी देखें। अपने Netflix खाते से साइन इन करें और netflix.com पर अपने कंप्यूटर या Netflix ऐप वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखना शुरू करें, जैसे स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल।",

  "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.":
    "आप अपने पसंदीदा शो को iOS या Android ऐप के माध्यम से डाउनलोड भी कर सकते हैं। यात्रा के दौरान या बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें। Netflix को कहीं भी अपने साथ ले जाएं।",

  "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.":
    "Netflix लचीला है। कोई झंझट भरे अनुबंध नहीं हैं और न ही कोई प्रतिबद्धताएं। आप अपने खाते को दो क्लिक में ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं — जब चाहें शुरू करें या बंद करें।",

  "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.":
    "Netflix के पास फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, एनीमे, पुरस्कार विजेता ओरिजिनल्स और बहुत कुछ की विशाल लाइब्रेरी है। जब चाहें, जितना चाहें देखें।",

  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space":
    "Netflix Kids अनुभव आपके सदस्यता में शामिल है जिससे माता-पिता को नियंत्रण मिलता है और बच्चे अपने लिए बने सुरक्षित वातावरण में पारिवारिक टीवी शो और फ़िल्में देख सकते हैं।",

  "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.":
    "बच्चों की प्रोफ़ाइल PIN-संरक्षित पैरेंटल कंट्रोल के साथ आती है, जिससे आप उनके देखने योग्य कंटेंट की मैच्योरिटी रेटिंग तय कर सकते हैं और विशेष टाइटल ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते कि बच्चे देखें।",

  "FAQ": "अक्सर पूछे जाने वाले सवाल",
  "Investor Relation": "निवेशक संबंध",
  "Privacy": "गोपनीयता",
  "Speed Test": "स्पीड टेस्ट",
  "Help Centre": "सहायता केंद्र",
  "Jobs": "नौकरियाँ",
  "Cookie Prefrence": "कुकी प्राथमिकता",
  "Legal Notices": "कानूनी सूचनाएँ",
  "Account": "खाता",
  "Ways to watch": "देखने के तरीके",
  "Coperate Information": "कॉर्पोरेट जानकारी",
  "Only on Netflix": "सिर्फ Netflix पर",
  "Media Centre": "मीडिया केंद्र",
  "Terms of use": "उपयोग की शर्तें",
  "Contact Us": "हमसे संपर्क करें",
  "Netflix India – Watch TV Shows Online, Watch Movies Online": "Netflix इंडिया – ऑनलाइन टीवी शो देखें, फ़िल्में देखें"
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
