export function initGreeting() {
  const greeting = document.querySelector("#time-greeting");

  if (!greeting) {
    return;
  }

  const hour = new Date().getHours();
  let message = "Welcome to my homepage";

  if (hour < 12) {
    message = "Good morning and welcome";
  } else if (hour < 18) {
    message = "Good afternoon and welcome";
  } else {
    message = "Good evening and welcome";
  }

  greeting.textContent = message;
}
