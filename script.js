// ---------------------------
// Launch Button Functionality
// ---------------------------

// ✅ Replace with your Hugging Face app link
const HUGGINGFACE_URL = "https://saiganesh903-ai-python-lecturer.hf.space/";

document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launchBtn");
  
  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      console.log("Launch button clicked!");
      window.open(HUGGINGFACE_URL, "_blank");
    });
  } else {
    console.error("Launch button not found!");
  }
});
