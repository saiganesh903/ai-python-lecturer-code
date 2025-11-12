const chatInput = document.createElement("textarea");
chatInput.placeholder = "Ask Prof. Reddy something...";
document.body.appendChild(chatInput);

const sendBtn = document.createElement("button");
sendBtn.innerText = "Ask 🚀";
document.body.appendChild(sendBtn);

const chatOutput = document.createElement("div");
chatOutput.id = "chatOutput";
document.body.appendChild(chatOutput);

sendBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return alert("Please type a message!");

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
    chatOutput.innerHTML += `<p><i>Connection error: ${err.message}</i></p>`;
  }
});
