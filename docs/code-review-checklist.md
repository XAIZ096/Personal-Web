# Code review checklist

Use this checklist when completing the required code review.

## Functionality

- Open `index.html`, `about.html`, and `ai.html`.
- Test navigation between all pages.
- Test the theme button.
- Test the project category filter.
- Test the study focus generator.
- Test the contact preview form.
- Test the AI page study planner.

## HTML

- Confirm each page has `<!doctype html>`.
- Confirm each page has author, description, favicon, and viewport metadata.
- Confirm each page uses `<script type="module">`.
- Confirm images have alt text.
- Confirm standard semantic tags are used.

## CSS

- Confirm CSS is organized in `assets/css/styles.css`.
- Confirm the CSS does not use `!important`.
- Confirm the layout uses grid and flexbox.
- Confirm mobile layout works.

## JavaScript

- Confirm JavaScript is organized into ES modules.
- Confirm there is original JavaScript functionality with more than five lines of code.
- Confirm no jQuery or component library is used.

## Project files

- Confirm `README.md` includes author, class link, project objective, screenshot, build instructions, and GenAI section.
- Confirm `package.json` lists the project scripts and development tools.
- Confirm `LICENSE` uses MIT license.
