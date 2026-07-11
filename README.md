# Lasha Bakuradze Portfolio

Premium static developer portfolio for Lasha Bakuradze, focused on full-stack software development, web applications, backend APIs, automation systems, dashboards, internal tools, and AI-assisted development workflows.

The site is built for GitHub Pages and uses only HTML, CSS, and vanilla JavaScript. There is no Node.js, npm, backend service, database, API key, or build step required.

## File Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── images/
```

## Local Preview

From the repository root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but the local server preview is closer to how GitHub Pages serves the site.

## GitHub Pages Deployment

This repository is intended to deploy at:

```text
https://lshbkrdz.github.io
```

To publish updates:

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Build professional developer portfolio"
git push origin main
```

GitHub Pages will serve the latest `main` branch for a user site repository named `lshbkrdz.github.io`.

## Replacing Project Content

Project cards are written in `index.html`. Search for the project name, then update:

- Project name
- Project type
- Status badge
- Description
- Technology tags
- Feature list
- Preview data labels
- Button labels and links

Project detail modal content is stored in `script.js` inside the `projectDetails` object. Update the matching project key to edit:

- Problem
- Solution
- Architecture
- Main features
- Technology stack
- Technical decisions
- Challenges
- Testing approach
- Future improvements

## Replacing Simulated Data

The current portfolio intentionally uses realistic fictional portfolio data. It is clearly labeled with terms such as:

- Portfolio Project
- Demo Application
- Concept Product
- Simulated demo data
- Simulated monitoring data
- Demo users
- Demo records

When replacing simulated data with real project information, remove or update those labels only if the information represents real work, real users, or real production usage.

## Adding Screenshots

Place project screenshots in:

```text
assets/images/
```

Use relative paths in `index.html`, for example:

```html
<img src="assets/images/stockflow-dashboard.png" alt="StockFlow dashboard screenshot">
```

Keep image file names lowercase and descriptive.

## Adding GitHub Links

Each project currently uses disabled source-code buttons with `Coming Soon` text to avoid broken links.

When a repository is ready, replace the disabled button with a real link:

```html
<a class="btn btn-small btn-secondary" href="https://github.com/lshbkrdz/project-repo" target="_blank" rel="noreferrer">Source Code</a>
```

## Adding Demo Links

Each project currently uses disabled demo buttons with `Coming Soon` text.

When a demo is ready, replace the disabled button with a real link:

```html
<a class="btn btn-small btn-primary" href="https://your-demo-url.example" target="_blank" rel="noreferrer">Live Demo</a>
```

## Updating Contact Details

In `index.html`, search for:

```text
your.email@example.com
LinkedIn: add your profile URL
```

Replace them with your real email address and LinkedIn profile URL.

The contact section uses `mailto:` because GitHub Pages does not provide a backend. If you want a working contact form later, connect a service such as Formspree and do not commit API keys or secrets.

## Notes

- All paths are relative for GitHub Pages compatibility.
- The website does not load project screenshots yet, so there are no broken images.
- Demo metrics, users, companies, orders, alerts, and dashboard states are simulated and should not be presented as client results.
