// ---------------------------
// Launch Button Functionality
// ---------------------------

// Replace this with your real Hugging Face app URL
const HUGGINGFACE_URL = "https://saiganesh903-ai-python-lecturer.hf.space/";

document.addEventListener("DOMContentLoaded", function () {
  const launchBtn = document.getElementById("launchBtn");

  if (launchBtn) {
    launchBtn.addEventListener("click", function () {
      console.log("Launch button clicked"); // Debug log
      window.open(HUGGINGFACE_URL, "_blank");
    });
  } else {
    console.error("Launch button not found in the document");
  }
});
