# Personal Homepage Project

## Author

Xinhao Chen

## Class link

[Canvas course page](https://northeastern.instructure.com/)

## Project objective

The goal of this project is to build a front-end only personal homepage using vanilla HTML5, CSS3, and ES6 modules. The site presents meaningful personal information, includes multiple pages, demonstrates original JavaScript functionality, and follows the assignment requirements for organization, documentation, formatting, and accessibility.

## Live site

After deployment, add the GitHub Pages URL here.

## Screenshot

![Homepage screenshot preview](assets/images/site-preview.svg)

## Pages included

- `index.html` - personal homepage with project cards, filters, and a creative study focus generator.
- `about.html` - about page with skills, timeline, and a front-end only contact preview form.
- `ai.html` - third AI generated page with a study planner concept and GenAI disclosure.

## Features

- Semantic HTML structure.
- Responsive layout using CSS grid and flexbox.
- ES6 module JavaScript.
- Original JavaScript interactions:
  - theme switcher,
  - project category filter,
  - study focus generator,
  - contact message preview,
  - AI page study planner.
- Organized folders for CSS, JavaScript, images, and documentation.
- All images include alt text.
- No jQuery, no backend, and no component library.

## Folder structure

```text
personal-homepage-project/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── data-project.svg
│   │   ├── favicon.svg
│   │   ├── hardware-project.svg
│   │   ├── profile.svg
│   │   ├── site-preview.svg
│   │   └── web-project.svg
│   └── js/
│       ├── main.js
│       └── modules/
│           ├── greeting.js
│           ├── projects.js
│           ├── quotes.js
│           ├── studyPlanner.js
│           └── ui.js
├── docs/
│   ├── code-review-checklist.md
│   ├── design-document.md
│   └── video-script.md
├── about.html
├── ai.html
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
└── README.md
```

## Instructions to build and run

1. Install dependencies:

```bash
npm install
```

2. Run ESLint:

```bash
npm run lint
```

3. Format with Prettier:

```bash
npm run format
```

4. Start a local development server:

```bash
npm run start
```

5. Build the static site:

```bash
npm run build
```

The pages can also be opened directly in a browser by opening `index.html`.

## GitHub Pages deployment

1. Push this project to a GitHub repository.
2. Go to the repository settings.
3. Open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save, then wait for GitHub Pages to publish the site.
7. Copy the public URL and add it to the **Live site** section above.

## Validation checklist

- Run Prettier with `npm run format`.
- Run ESLint with `npm run lint`.
- Check the deployed URL in the W3C validator: `https://validator.w3.org/`.
- Confirm every image has an `alt` value.
- Confirm each HTML page uses `<script type="module">`.
- Confirm the project includes the design document, README, package.json, and MIT license.

## GenAI use

AI assistance was used in this project.

- Tool/model: OpenAI ChatGPT, GPT-5.5 Thinking.
- Version/date used: May 2026.
- How it was used: drafting the initial project structure, writing starter HTML/CSS/JS, creating the AI generated study planner page, preparing the design document, and preparing the README.
- Human review: The author should review the code, update any personal details, run validation tools, and make final edits before submission.

Example prompts used:

```text
Follow this personal homepage assignment rubric and create a vanilla HTML, CSS, and ES6 module project.
```

```text
Create a design document with project description, user personas, user stories, and design mockups.
```

```text
Add an original JavaScript feature and a third AI generated page without using jQuery or component libraries.
```

## License

This project uses the MIT License. See `LICENSE` for details.
