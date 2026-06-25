//Map Button IDs to their target HTML pages
const navigationMap = {
  // Main Page Buttons
  "bigbtn": "big-website.html",
  "eigbtn": "EIG Websites.html",
  "csigbtn": "Appventure-website.html",
  "migbtn": "mig-website.html",
  "heigbtn": "heig-website.html",
  "pigbtn": "quanta-website.html",
  "eligbtn": "elig-website.html",

  // Back to Home Buttons (From sub-pages)
  "csigToHome": "IG-info.html",
  "bigToHome": "IG-info.html",
  "migToHome": "IG-info.html",
  "quantaToHome": "IG-info.html",
  "eigToHome": "IG-info.html",
  "heigToHome": "IG-info.html",
  "eligToHome": "IG-info.html",

  //EIG photos button
  "photosbtn": "page_2.html",
  "toHomeBtn": "IG-info.html",
};

//-- A single safe loop that handles every button automatically--
Object.keys(navigationMap).forEach(buttonId => {
  const button = document.getElementById(buttonId);

  if (button) {
    button.addEventListener("click", function() {
      window.location.href = navigationMap[buttonId];
    });
  }
});
