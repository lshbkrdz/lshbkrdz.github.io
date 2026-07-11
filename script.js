const projectDetails = {
  stockflow: {
    title: "StockFlow",
    type: "Inventory and Order Management Platform",
    status: "Portfolio Project",
    sections: {
      Problem: "Small teams often manage inventory, supplier communication, purchase orders, and sales orders across disconnected spreadsheets. That makes low-stock risk, audit history, and reporting difficult to trust.",
      Solution: "StockFlow centralizes product records, stock movement history, supplier data, purchase orders, sales orders, CSV import/export, and reporting into one permission-aware operations workspace.",
      Architecture: "React and TypeScript power the dashboard and forms. FastAPI exposes REST resources for products, suppliers, orders, imports, and reports. PostgreSQL stores normalized inventory data, JWT protects sessions, and Docker keeps the development environment repeatable.",
      "Main features": ["User login", "Role-based permissions", "Product management", "Inventory levels", "Low-stock warnings", "Supplier records", "Purchase orders", "Order tracking", "CSV import/export", "Audit logs", "Reporting dashboard"],
      "Technology stack": "React, TypeScript, FastAPI, PostgreSQL, REST API, Docker, JWT Authentication.",
      "Technical decisions": "Inventory changes are modeled as auditable movement records instead of direct quantity edits. CSV imports run through row-level validation before any database writes. Dashboard totals are calculated from stored order states rather than hard-coded summary fields.",
      Challenges: "The main challenge is keeping stock counts accurate while pending purchase orders, reserved sales orders, returns, and manual adjustments all affect availability.",
      "Testing approach": "Test coverage would focus on authentication, permission checks, CSV validation, stock movement calculations, order-state transitions, and dashboard summary totals.",
      "Demo data note": "The displayed product counts, supplier records, order totals, and low-stock alerts are simulated portfolio data.",
      "Future improvements": "Barcode scanning, supplier portals, recurring purchase orders, export templates, and role-specific notification rules."
    }
  },
  taskforge: {
    title: "TaskForge",
    type: "Full-Stack Project and Issue Tracking Platform",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Teams need a clear way to plan work, track bugs, discuss decisions, and see what changed without losing context across chats and documents.",
      Solution: "TaskForge provides a working full-stack issue tracker with demo authentication, workspace and project management, issue CRUD, assignment, due dates, labels, comments, filters, dashboard statistics, activity history, and a protected demo-data reset.",
      Architecture: "A React, TypeScript, and Vite frontend communicates with a FastAPI REST API. The backend validates requests with Pydantic, stores local development data in SQLite, seeds realistic demonstration records, and protects application routes with a simple bearer-token demo session.",
      Frontend: "The interface is a responsive dark admin application with dashboard metrics, project forms, issue filters, issue details, comments, activity timelines, loading states, empty states, validation feedback, destructive-action confirmations, and visible focus states.",
      Backend: "FastAPI exposes health, authentication, dashboard, workspaces, projects, issues, comments, users, activity, and demo reset endpoints with useful error messages and reference validation.",
      Database: "SQLite stores workspaces, projects, issues, comments, users, and activity entries for local development. Seed logic restores the original simulated dataset for portfolio review.",
      Authentication: "The demo login uses demo@taskforge.dev and demo1234. The backend verifies the password and requires a bearer token for protected API actions.",
      "Main features": ["Demo login", "Workspaces", "Project create/edit/delete", "Issue create/edit/delete", "Status and priority changes", "Assignees", "Due dates", "Labels", "Search and filters", "Comments", "Activity history", "Dashboard statistics", "Demo data reset"],
      Validation: "The API prevents missing project, user, workspace, issue, and comment references, validates request payloads, and returns appropriate HTTP errors for invalid actions.",
      "Technology stack": "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pytest.",
      "Testing approach": "Pytest covers health, successful login, invalid login, project creation, issue creation, issue update, issue deletion, filtering, comment creation, and demo reset. Vitest covers frontend helper logic, and the production frontend build was verified.",
      "Technical challenges": "The main challenge was turning a portfolio preview into a complete local product with realistic seeded data, real API state, protected reset behavior, responsive layouts, and evidence screenshots captured from the running application.",
      "Demo data note": "Portfolio application using simulated demonstration data. Alex Morgan, Nina Patel, Daniel Kim, and Sofia Reyes are fictional demo users.",
      "Future improvements": "Public deployment, saved issue views, drag-and-drop board movement, file attachments, GitHub issue sync, CI test badges, and project-level reporting charts."
    }
  },
  apiwatch: {
    title: "APIWatch",
    type: "API Monitoring Dashboard",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "API failures are expensive when teams discover them from users instead of monitoring. Teams need uptime, latency, incident history, and endpoint health in one place.",
      Solution: "APIWatch is a working full-stack monitoring dashboard for registering endpoints, running manual and scheduled checks, storing response-time history, calculating uptime, grouping incidents, acknowledging incidents, and resetting a stable demo dataset.",
      Architecture: "A React, TypeScript, and Vite frontend calls a FastAPI REST API. The backend uses SQLite for local storage, HTTPX for real endpoint checks, Pydantic validation, safe URL protection, simulated endpoint profiles, and a guarded local scheduler.",
      "Monitoring engine": "Real endpoints are checked with HTTPX. Seeded portfolio endpoints use simulation profiles such as healthy, degraded, unstable, down, and timeout so the demo remains stable while still storing realistic check data.",
      Scheduler: "A lightweight background scheduler starts with the FastAPI app, scans enabled endpoints, prevents overlapping checks for the same endpoint, and logs failures without crashing the API.",
      "Safe URL validation": "The API rejects unsupported schemes, malformed URLs, embedded credentials, localhost, loopback, private-network, link-local, reserved, and metadata targets when public safety mode is enabled.",
      "Incident grouping": "Failed checks open or update one open incident per endpoint. A later successful check resolves the open incident and records duration instead of creating duplicate incidents for every failure.",
      "Metrics aggregation": "Dashboard uptime, response time, endpoint health counts, incident counts, response-time charts, uptime timeline, and recent checks are calculated from stored backend check records.",
      Frontend: "The frontend includes demo login, metrics, SVG charts, endpoint CRUD, manual checks, filters, endpoint history, incident list/detail views, acknowledgement notes, reset confirmation, loading states, and mobile layouts.",
      Backend: "FastAPI exposes health, auth, dashboard, endpoints, checks, incidents, activity, metadata, and reset endpoints with protected private routes and useful validation errors.",
      Database: "SQLite stores demo users, endpoints, check results, incidents, and activity records for local development.",
      Authentication: "Protected routes require the demo bearer token returned by login. Demo credentials are demo@apiwatch.dev and demo1234.",
      "Main features": ["Endpoint management", "Manual API checks", "Simulated scheduled monitoring", "Response-time history", "Uptime calculations", "Incident grouping", "Incident resolution", "Incident acknowledgement", "Status filtering", "Safe URL validation", "Demo-data reset", "Automated tests"],
      "Technology stack": "React, TypeScript, Vite, Python, FastAPI, SQLite, HTTPX, REST API, Pytest.",
      Testing: "Backend tests cover authentication, protected routes, CRUD, URL validation, manual checks, timeout and unexpected-status handling, incident grouping, incident resolution, dashboard aggregation, filters, and demo reset. Frontend tests and production build were also verified.",
      "Technical challenges": "The key challenge was making portfolio-safe monitoring realistic: stable simulated endpoints, real HTTP checks for user-added public URLs, protected URL validation, non-duplicating incidents, and charts driven by stored check data.",
      "Demo data note": "Portfolio application using simulated demonstration monitoring data. Simulated endpoints are clearly distinguished from real HTTP endpoints.",
      "Future improvements": "Production worker queue, notification channels, public status pages, multi-region checks, saved filters, incident severity levels, and CI badges."
    }
  },
  clientdesk: {
    title: "ClientDesk",
    type: "CRM and Client Management Platform",
    status: "Concept Product",
    sections: {
      Problem: "Freelancers and small teams often need a CRM that is lighter than enterprise tools but more reliable than scattered notes and spreadsheets.",
      Solution: "ClientDesk provides contact management, lead pipeline tracking, notes, tasks, client status, invoice tracking, search, filters, and activity timelines in a compact CRM interface.",
      Architecture: "The concept uses a React frontend, FastAPI backend, PostgreSQL database, authenticated REST endpoints, and responsive layouts for desktop and mobile use.",
      "Main features": ["Contact management", "Lead pipeline", "Notes", "Tasks", "Client status", "Invoice tracking", "Search", "Filters", "Activity timeline"],
      "Technology stack": "React, FastAPI, PostgreSQL, Authentication, REST API, Responsive Design.",
      "Technical decisions": "Client activity is grouped into timeline events so conversations, notes, tasks, invoices, and pipeline changes can be reviewed from one record.",
      Challenges: "The main product challenge is keeping the tool lightweight while still supporting real sales follow-up and client organization.",
      "Testing approach": "Tests would cover contact creation, pipeline movement, search results, filter combinations, timeline ordering, and invoice status updates.",
      "Demo data note": "Northstar Labs, Orbit Supply, and any displayed client contacts are fictional demo records.",
      "Future improvements": "Email reminders, invoice PDF generation, calendar sync, import tools, custom fields, and lead source reporting."
    }
  },
  autoflow: {
    title: "AutoFlow",
    type: "Business Automation Toolkit",
    status: "Portfolio Project",
    sections: {
      Problem: "Manual file handling, data cleanup, reporting, and API synchronization can consume hours while introducing avoidable errors.",
      Solution: "AutoFlow packages repeatable workflows for batch file processing, CSV validation, JSON transformation, automated reports, failed-task logs, API synchronization, and configurable error handling.",
      Architecture: "Python scripts and reusable workflow modules process files, validate structured data, call REST APIs, generate reports, and write logs that can be reviewed after every run.",
      "Main features": ["Batch file processing", "CSV validation", "JSON transformation", "Automated reports", "Failed-task logs", "API synchronization", "Configurable workflows", "Error handling"],
      "Technology stack": "Python, REST APIs, CSV, JSON, Automation, Logging.",
      "Technical decisions": "Workflow steps are designed as small reusable functions with clear inputs, outputs, retries, and failure states. Logs separate expected validation errors from unexpected runtime failures.",
      Challenges: "Automation needs careful validation and logging because silent failures can create bigger operational problems than manual work.",
      "Testing approach": "Tests would use fixture files for valid rows, invalid rows, malformed JSON, API failure responses, retry behavior, and report output checks.",
      "Demo data note": "Workflow timestamps, row counts, transformed files, and report names are simulated portfolio examples.",
      "Future improvements": "A configuration UI, scheduled runs, email summaries, webhook triggers, cloud storage integrations, and richer reporting templates."
    }
  }
};

const projectEvidence = {
  stockflow: {
    liveDemo: "https://placeholder.example/stockflow-demo",
    repository: "https://github.com/lshbkrdz/stockflow",
    repositoryReady: true,
    video: "https://youtu.be/L9d5Kerptoo",
    videoReady: true,
    caseStudy: "Current portfolio case study",
    credentials: "Demo login will be added when the deployed app is ready.",
    stack: "React, TypeScript, FastAPI, PostgreSQL, REST API, Docker, JWT Authentication",
    deployment: "Planned: Render backend + managed PostgreSQL + static frontend deployment",
    testStatus: "Planned automated tests: auth, imports, stock movement, permissions, reporting",
    lastUpdated: "2026-07-11",
    architecture: "Frontend dashboard, REST API layer, PostgreSQL data model, background import/export tasks, audit-log trail"
  },
  taskforge: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/taskforge",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current portfolio case study",
    credentials: "demo@taskforge.dev / demo1234",
    stack: "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pytest",
    deployment: "Local application verified. Public live deployment not completed yet.",
    testStatus: "Backend: python -m pytest, 8 passed. Frontend: npm run test, 2 passed. Production build completed with npm run build.",
    lastUpdated: "2026-07-11",
    architecture: "React/Vite frontend, FastAPI REST API, SQLite data layer, Pydantic validation, token-based demo session, seeded demo reset, activity timeline"
  },
  apiwatch: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/apiwatch",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current portfolio case study",
    credentials: "demo@apiwatch.dev / demo1234",
    stack: "React, TypeScript, Vite, Python, FastAPI, SQLite, HTTPX, REST API, Pytest",
    deployment: "Local application verified. Public live deployment not completed yet.",
    testStatus: "Backend: python -m pytest, 15 passed. Frontend: npm run test, 4 passed. Production build completed with npm run build.",
    lastUpdated: "2026-07-11",
    architecture: "React/Vite frontend, FastAPI REST API, SQLite storage, HTTPX monitor, simulated endpoint profiles, guarded scheduler, incident grouping, safe URL validation"
  },
  clientdesk: {
    liveDemo: "https://placeholder.example/clientdesk-demo",
    repository: "https://github.com/lshbkrdz/clientdesk",
    video: "https://placeholder.example/clientdesk-video",
    caseStudy: "Current portfolio case study",
    credentials: "Demo records are fictional; login credentials will be added with the deployed app.",
    stack: "React, FastAPI, PostgreSQL, Authentication, REST API, Responsive Design",
    deployment: "Planned: FastAPI backend + PostgreSQL + static responsive frontend",
    testStatus: "Planned automated tests: contacts, pipeline stages, search, filters, invoice status, timeline ordering",
    lastUpdated: "2026-07-11",
    architecture: "Contact records, pipeline state machine, activity timeline, invoice status tracking, authenticated API"
  },
  autoflow: {
    liveDemo: "https://placeholder.example/autoflow-demo",
    repository: "https://github.com/lshbkrdz/autoflow",
    video: "https://placeholder.example/autoflow-video",
    caseStudy: "Current portfolio case study",
    credentials: "No login required for planned CLI/workflow demos.",
    stack: "Python, REST APIs, CSV, JSON, Automation, Logging",
    deployment: "Planned: repository workflows, runnable scripts, sample input/output fixtures, optional dashboard wrapper",
    testStatus: "Planned automated tests: CSV fixtures, JSON transforms, API failure handling, retry behavior, report output",
    lastUpdated: "2026-07-11",
    architecture: "Configurable workflow steps, validation layer, API sync modules, report generation, structured logs"
  }
};

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const brandPhoto = document.querySelector("[data-brand-photo]");
const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalType = document.querySelector("[data-modal-type]");
const modalStatus = document.querySelector("[data-modal-status]");
const modalContent = document.querySelector("[data-modal-content]");
const modalClose = document.querySelector("[data-modal-close]");
let lastFocusedElement = null;

function renderEvidence(projectId, variant = "card") {
  const evidence = projectEvidence[projectId];
  if (!evidence) return "";

  const compact = variant === "card";
  const liveDemoButton = evidence.liveDemoReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.liveDemo}" target="_blank" rel="noopener noreferrer">Live Demo</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Live Demo — Coming Soon</button>`;
  const liveDemoValue = evidence.liveDemo
    ? `${evidence.liveDemo}${evidence.liveDemoReady ? "" : " <span>placeholder URL</span>"}`
    : "Not deployed yet";
  const repositoryButton = evidence.repositoryReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.repository}" target="_blank" rel="noopener noreferrer">Public GitHub Repository</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Public GitHub Repository Coming Soon</button>`;
  const repositoryLabel = evidence.repositoryReady ? "" : " <span>placeholder URL</span>";
  const videoButton = evidence.videoReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.video}" target="_blank" rel="noopener noreferrer">Watch Video Walkthrough</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Video Walkthrough Coming Soon</button>`;
  const videoValue = evidence.video
    ? `${evidence.video}${evidence.videoReady ? "" : " <span>placeholder URL</span>"}`
    : "Not available yet";
  const helperText = projectId === "stockflow" || projectId === "taskforge" || projectId === "apiwatch" ? "" : "<span>Placeholders until real links are added</span>";

  return `
    <section class="evidence-box ${compact ? "evidence-box-compact" : ""}" aria-label="Project evidence">
      <div class="evidence-head">
        <h4>Project Evidence</h4>
        ${helperText}
      </div>
      <div class="evidence-actions">
        ${liveDemoButton}
        ${repositoryButton}
        ${videoButton}
        <button class="btn btn-small btn-primary" type="button" data-project-open="${projectId}">Technical Case Study</button>
      </div>
      <dl class="evidence-list">
        <div><dt>Live Demo</dt><dd>${liveDemoValue}</dd></div>
        <div><dt>Public GitHub Repository</dt><dd>${evidence.repository}${repositoryLabel}</dd></div>
        <div><dt>Video Walkthrough</dt><dd>${videoValue}</dd></div>
        <div><dt>Technical Case Study</dt><dd>${evidence.caseStudy}</dd></div>
        <div><dt>Demo Login Credentials</dt><dd>${evidence.credentials}</dd></div>
        <div><dt>Technology Stack</dt><dd>${evidence.stack}</dd></div>
        <div><dt>Deployment Information</dt><dd>${evidence.deployment}</dd></div>
        <div><dt>Test Status</dt><dd>${evidence.testStatus}</dd></div>
        <div><dt>Last Updated</dt><dd>${evidence.lastUpdated}</dd></div>
        <div><dt>Architecture Overview</dt><dd>${evidence.architecture}</dd></div>
      </dl>
    </section>
  `;
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
}

function openProject(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = project.title;
  modalType.textContent = project.type;
  modalStatus.textContent = project.status;
  const sections = Object.entries(project.sections).map(([heading, value]) => {
    if (Array.isArray(value)) {
      const items = value.map((item) => `<li>${item}</li>`).join("");
      return `<section class="modal-section"><h3>${heading}</h3><ul>${items}</ul></section>`;
    }
    return `<section class="modal-section"><h3>${heading}</h3><p>${value}</p></section>`;
  }).join("");
  modalContent.innerHTML = `${renderEvidence(projectId, "modal")}${sections}`;

  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  modal.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function trapModalFocus(event) {
  if (modalBackdrop.hidden || event.key !== "Tab") return;

  const focusable = modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

if (brandPhoto) {
  brandPhoto.addEventListener("error", () => {
    const fallback = brandPhoto.nextElementSibling;
    brandPhoto.hidden = true;
    if (fallback) {
      fallback.hidden = false;
    }
  });
}

document.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project-open]");
  if (projectButton) {
    openProject(projectButton.dataset.projectOpen);
  }
});

document.querySelectorAll("[data-evidence-card]").forEach((container) => {
  container.innerHTML = renderEvidence(container.dataset.evidenceCard, "card");
});

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) {
    closeModal();
  }
  trapModalFocus(event);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
