# Lasha Bakuradze Portfolio

Premium static developer portfolio for Lasha Bakuradze, focused on full-stack software development, web applications, backend APIs, automation systems, dashboards, internal tools, and AI-assisted development workflows.

The site is built for GitHub Pages and uses only HTML, CSS, and vanilla JavaScript. There is no Node.js, npm, backend service, database, API key, or build step required.

## File Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
`-- assets/
    `-- images/
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

## GitHub Pages Deployment

This repository is intended to deploy at:

```text
https://lshbkrdz.github.io
```

To publish updates:

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Update project evidence sections"
git push origin main
```

GitHub Pages will serve the latest `main` branch for a user site repository named `lshbkrdz.github.io`.

## Project Content

Project cards are written in `index.html`. Search for the project name, then update:

- Project name
- Project type
- Status badge
- Description
- Technology tags
- Feature list
- Preview data labels

Project detail modal content is stored in `script.js` inside the `projectDetails` object.

Project Evidence content is stored in `script.js` inside the reusable `projectEvidence` object. The same renderer is used for project cards and project detail modals, so editing `projectEvidence` updates both places.

## Project Evidence Fields

Each featured project has fields for:

- Live Demo
- Public GitHub Repository
- Video Walkthrough
- Technical Case Study
- Demo Login Credentials
- Technology Stack
- Deployment Information
- Test Status
- Last Updated
- Architecture Overview

Unavailable buttons are disabled and marked `Coming Soon`. Placeholder URLs are clearly labeled as placeholder URLs and should not be treated as real links.

## Connecting Real Project Evidence

All evidence data lives in `script.js` in the `projectEvidence` object.

Example:

```js
stockflow: {
  liveDemo: "https://your-real-demo-url.example",
  repository: "https://github.com/lshbkrdz/stockflow",
  repositoryReady: true,
  video: "https://youtube.com/watch?v=your-video-id",
  testStatus: "Passing - GitHub Actions",
  lastUpdated: "2026-07-11"
}
```

### GitHub Repository

Replace the `repository` placeholder with the real public GitHub repository URL. Set `repositoryReady: true` only after the repository exists and is public.

### Live Demo

Replace the `liveDemo` placeholder with the deployed application URL. Enable the Live Demo button only after the deployment is real and publicly accessible.

### Demo Video

Replace the `video` placeholder with a YouTube, Loom, or direct walkthrough URL. Enable the Video Walkthrough button only after the video exists.

### Case Study

The current Technical Case Study button opens the project modal. Add a separate case study page later if you want deeper writeups, then update `caseStudy` with the new URL.

### Test Badge

Use `testStatus` for a readable status such as `Passing - GitHub Actions`. If you add a badge image later, place it in `assets/images/` and reference it from the evidence renderer.

## Simulated Data

The current portfolio intentionally uses realistic fictional portfolio data. It is clearly labeled with terms such as:

- Portfolio Project
- Demo Application
- Concept Product
- Simulated demo data
- Simulated monitoring data
- Demo users
- Demo records

Portfolio applications may use simulated demo data for users, orders, metrics, alerts, and dashboards. Project Evidence links are reserved for real source code, real repositories, deployed demos, walkthrough videos, test results, and architecture notes as those assets become available.

Do not present fictional demo data as real client usage, real revenue, or real production results.

## Images

Place project screenshots in:

```text
assets/images/
```

The current portrait file is:

```text
assets/images/lasha-bakuradze.jpg
```

Use relative paths in `index.html`, for example:

```html
<img src="assets/images/stockflow-dashboard.png" alt="StockFlow dashboard screenshot">
```

Keep image file names lowercase and descriptive.

## Contact Details

The current contact details are:

```text
lshbkrdz@gmail.com
WhatsApp: +995 595 552 188
GitHub: https://github.com/lshbkrdz
```

To update them later, search for the email address or WhatsApp number in `index.html`.

The contact section uses `mailto:` and WhatsApp links because GitHub Pages does not provide a backend. If you want a working contact form later, connect a service such as Formspree and do not commit API keys or secrets.
