const focusPrompts = [
  "Write the first three lines of code before checking your phone.",
  "Choose one bug and explain it out loud before editing anything.",
  "Study for twenty minutes, then write one sentence about what improved.",
  "Turn a confusing task into three small checklist items.",
  "Open the rubric first and match your next step to one requirement."
];

export function initQuoteGenerator() {
  const button = document.querySelector("[data-quote-button]");
  const output = document.querySelector("[data-quote-output]");

  if (!button || !output) {
    return;
  }

  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * focusPrompts.length);
    output.textContent = focusPrompts[randomIndex];
  });
}
