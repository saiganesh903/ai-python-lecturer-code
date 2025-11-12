// ---------------------------
// AI Chat + Launch Button Script
// ---------------------------

// ✅ Replace with your Hugging Face app link:
const HUGGINGFACE_URL = "https://saiganesh903-ai-python-lecturer.hf.space";

// Launch AI Lecturer button
const launchBtn = document.getElementById("launchBtn");

if (launchBtn) {
  launchBtn.addEventListener("click", () => {
    // Open the Hugging Face space in a new tab
    window.open(HUGGINGFACE_URL, "_blank");
  });
}

// ---------------------------
// Chat box logic (optional mini demo)
// ---------------------------

const chatInput = document.createElement("textarea");
chatInput.placeholder = "Ask Prof. Reddy something...";
chatInput.style.marginTop = "20px";
document.body.appendChild(chatInput);

const sendBtn = document.createElement("button");
sendBtn.innerText = "Ask 🧠";
document.body.appendChild(sendBtn);

const chatOutput = document.createElement("div");
chatOutput.id = "chatOutput";
document.body.appendChild(chatOutput);

sendBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return alert("Please type a question for Prof. Reddy!");
  chatOutput.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;
  chatInput.value = "";

  try {
    const response = await fetch("https://saiganesh903-ai-python-lecturer.hf.space/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    if (data.reply) {
      chatOutput.innerHTML += `<p><b>Prof. Reddy:</b> ${data.reply}</p>`;
    } else {
      chatOutput.innerHTML += `<p><i>Error: ${data.error}</i></p>`;
    }
  } catch (err) {
    chatOutput.innerHTML += `<p><i>Connection issue: ${err.message}</i></p>`;
  }
});
