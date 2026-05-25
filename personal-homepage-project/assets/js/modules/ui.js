const STORAGE_KEY = "personal-homepage-theme";

export function setCurrentYear() {
  const yearTargets = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear().toString();

  yearTargets.forEach((target) => {
    target.textContent = currentYear;
  });
}

export function initNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector("#primary-menu");
  const links = document.querySelectorAll(".nav__link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const linkPage = link.getAttribute("href")?.replace("./", "");

    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen.toString());
  });
}

export function initTheme() {
  const themeButton = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
  }

  if (!themeButton) {
    return;
  }

  themeButton.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }

    localStorage.setItem(STORAGE_KEY, nextTheme);
  });
}

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const preview = document.querySelector("[data-form-preview]");

  if (!form || !preview) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("visitor-name");
    const topic = formData.get("message-topic");
    const message = formData.get("visitor-message");

    preview.textContent = `Preview for ${name}: ${topic} message - "${message}"`;
    form.reset();
  });
}
