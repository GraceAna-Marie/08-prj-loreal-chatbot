/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");
/* System Prompt */
const systemPrompt = `
You are the L'Oréal Beauty Assistant.

Only answer questions about:
- L'Oréal products
- Skincare
- Haircare
- Makeup
- Fragrances
- Beauty routines
- Ingredients
- Product recommendations

If someone asks something unrelated, politely respond:

"I'm here to help with L'Oréal products and beauty-related questions. I can't answer unrelated topics."

Keep your responses friendly, professional, and concise.
`;

// Set initial message
chatWindow.innerHTML =
  "<div class=\"msg ai\">👋 Hello! I'm your L'Oréal Beauty Assistant. Ask me about skincare, makeup, haircare, fragrances, or product recommendations!</div>";

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("msg", sender);
  message.textContent = text;

  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* Handle form submit */
/* Handle form submit */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = userInput.value.trim();

  if (!message) return;

  // Display the user's message
  addMessage(message, "user");

  // Clear the input field
  userInput.value = "";

  try {
    const response = await fetch(
      "https://loreal-api.grace5termure.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    addMessage(data.choices[0].message.content, "ai");
  } catch (error) {
    console.error(error);
    addMessage("Sorry, I couldn't connect to the L'Oréal assistant.", "ai");
  }
});
