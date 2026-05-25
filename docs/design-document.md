# Design Document: Personal Homepage

## Project description

This project is a front-end only personal homepage for Xinhao Chen. It introduces the author, highlights technical interests, shows featured project cards, and includes a third AI generated page. The site is built with vanilla HTML5, CSS3, and ES6 modules. It does not use a backend, jQuery, or component libraries.

The homepage is designed to feel clean, professional, and easy to scan. The main audience is classmates, instructors, recruiters, and other students who want to quickly understand the author's interests and work style.

## User personas

### Persona 1: Class instructor

The instructor needs to quickly check whether the assignment requirements are complete. They care about semantic HTML, organized folders, module-based JavaScript, valid pages, a README, a license, and clear evidence of original work.

### Persona 2: Classmate reviewer

A classmate may review the project during the code review. They want a simple structure, readable names, clear styling, and interactive features that are easy to test.

### Persona 3: Recruiter or visitor

A visitor wants a quick summary of Xinhao's background, interests, and projects. They do not want to search through a cluttered page to understand the main information.

## User stories

1. As an instructor, I want to see a clear homepage with meaningful information so that I can evaluate the project quickly.
2. As a classmate, I want the navigation to be simple so that I can move between the homepage, about page, and AI generated page without confusion.
3. As a visitor, I want to see projects grouped by category so that I can focus on the area I care about most.
4. As a mobile user, I want the page to resize properly so that I can read it on a phone.
5. As a user who prefers darker screens, I want a theme button so that I can switch to a darker interface.
6. As an instructor checking accessibility, I want images to have alt text and form fields to have labels so that the page is more inclusive.

## Design mockups

### Homepage desktop mockup

```text
+--------------------------------------------------------------+
| XC            Home     About     AI Page       Change Theme  |
+--------------------------------------------------------------+
|                                                              |
| +-------------------------------+  +----------------------+  |
| | Good afternoon and welcome    |  | profile illustration |  |
| | Hi, I am Xinhao Chen.         |  |                      |  |
| | Short intro paragraph         |  |                      |  |
| | [View Projects] [Learn More]  |  |                      |  |
| +-------------------------------+  +----------------------+  |
|                                                              |
| Quick overview cards                                         |
| +------------+ +------------+ +------------+                 |
|                                                              |
| Featured work + filter buttons                               |
| +------------+ +------------+ +------------+                 |
|                                                              |
| Study focus generator                                        |
| +--------------------------+ +-----------------------------+ |
+--------------------------------------------------------------+
```

### Mobile mockup

```text
+------------------------------+
| XC            Menu Theme     |
+------------------------------+
| Hero intro card              |
| Profile image card           |
| Overview card 1              |
| Overview card 2              |
| Overview card 3              |
| Project filter buttons       |
| Project card                 |
| Project card                 |
| Project card                 |
| Study focus generator        |
+------------------------------+
```

### About page mockup

```text
+--------------------------------------------------------------+
| About me hero                                                |
| Two column skills section                                    |
| Timeline cards                                               |
| Static contact form with message preview                     |
+--------------------------------------------------------------+
```

### AI generated page mockup

```text
+--------------------------------------------------------------+
| AI Generated Study Planner Concept                           |
| Study topic input + available time selector                  |
| Generated plan result card                                   |
| Concept feature cards                                        |
| GenAI disclosure                                             |
+--------------------------------------------------------------+
```

## Visual design choices

- Use a blue accent color to create a professional engineering feeling.
- Use rounded cards and soft shadows to make the page look modern without using a component library.
- Use CSS grid for project cards and overview cards.
- Use flexbox for navigation and button groups.
- Keep the text concise so the homepage feels meaningful instead of crowded.

## Accessibility choices

- All images have alt text.
- The pages use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` tags.
- Interactive controls are real `button`, `input`, `select`, and `textarea` elements.
- The page includes a skip link for keyboard users.
- Form inputs have visible labels.
- Dynamic output areas use `aria-live` where helpful.
