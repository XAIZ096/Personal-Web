import { initContactForm, initNavigation, initTheme, setCurrentYear } from "./modules/ui.js";
import { initGreeting } from "./modules/greeting.js";
import { initProjectFilters } from "./modules/projects.js";
import { initQuoteGenerator } from "./modules/quotes.js";
import { initStudyPlanner } from "./modules/studyPlanner.js";

setCurrentYear();
initNavigation();
initTheme();
initGreeting();
initProjectFilters();
initQuoteGenerator();
initContactForm();
initStudyPlanner();
