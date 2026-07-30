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
  '<div class="msg ai">👋 Hello! I\'m your L\'Oréal Beauty Assistant. Ask me about skincare, makeup, haircare, fragrances, or product recommendations!</div>';

  function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("msg", sender);
  message.textContent = text;

  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* Handle form submit */
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // When using Cloudflare, you'll need to POST a `messages` array in the body,
  // and handle the response using: data.choices[0].message.content

  // Show message
  chatWindow.innerHTML = "Connect to the OpenAI API for a response!";
});
