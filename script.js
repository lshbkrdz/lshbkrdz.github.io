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
    type: "Project and Issue Tracking Platform",
    status: "Demo Application",
    sections: {
      Problem: "Teams need a clear way to plan work, track bugs, discuss decisions, and see what changed without losing context across chats and documents.",
      Solution: "TaskForge organizes work into workspaces, project boards, issues, priorities, comments, filters, search, notifications, and activity history so team context stays attached to the work item.",
      Architecture: "A React and TypeScript client communicates with Django REST endpoints backed by PostgreSQL. Redis and Celery support notification delivery, async activity processing, and scheduled reminders.",
      "Main features": ["User authentication", "Workspaces", "Project boards", "Issue creation", "Status management", "Priority levels", "Comments", "Activity history", "Filters", "Search", "Notifications"],
      "Technology stack": "React, TypeScript, Django, PostgreSQL, REST API, Redis, Celery.",
      "Technical decisions": "Issues are structured records with status, priority, assignee, due date, labels, and timeline events. Activity records are append-only so comments, status changes, and assignment changes can be reviewed later.",
      Challenges: "The hard part is balancing quick task creation with enough structure for larger teams, filtered views, and notification rules.",
      "Testing approach": "Tests would cover board transitions, permissions, notification triggers, search behavior, filters, and timeline event creation.",
      "Demo data note": "Alex Morgan, Nina Patel, Daniel Kim, and Sofia Reyes are fictional demo users used to show realistic collaboration states.",
      "Future improvements": "Sprint planning, file attachments, saved views, GitHub issue sync, keyboard shortcuts, and analytics for delivery trends."
    }
  },
  apiwatch: {
    title: "APIWatch",
    type: "API Monitoring Dashboard",
    status: "Portfolio Project",
    sections: {
      Problem: "API failures are expensive when teams discover them from users instead of monitoring. Teams need uptime, latency, incident history, and endpoint health in one place.",
      Solution: "APIWatch tracks endpoint checks, response times, incidents, status filtering, scheduled checks, failure alerts, and error history in a dashboard designed for quick operational decisions.",
      Architecture: "FastAPI provides the monitoring API, scheduled Python jobs execute HTTP checks, PostgreSQL stores historical results, and dashboard views summarize uptime, latency, and incident activity.",
      "Main features": ["Endpoint monitoring", "Uptime history", "Response-time charts", "Incident logs", "Failure alerts", "Status filtering", "Scheduled checks", "Error history"],
      "Technology stack": "Python, FastAPI, PostgreSQL, Scheduled Jobs, REST APIs, Charts, Docker.",
      "Technical decisions": "Monitoring results are stored as timestamped events. Incidents are grouped from failed checks so the interface can show both individual failures and higher-level operational status.",
      Challenges: "The main challenge is preventing noisy alerts while still reporting real failures quickly and clearly.",
      "Testing approach": "Tests would include scheduled job behavior, timeout handling, incident grouping, status filtering, and response-time aggregation.",
      "Demo data note": "Uptime, response time, endpoint count, and incident numbers are simulated monitoring metrics.",
      "Future improvements": "Slack alerts, retry policies, public status pages, custom check intervals, webhook notifications, and multi-region checks."
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
    video: "https://placeholder.example/stockflow-video",
    caseStudy: "Current portfolio case study",
    credentials: "Demo login will be added when the deployed app is ready.",
    stack: "React, TypeScript, FastAPI, PostgreSQL, REST API, Docker, JWT Authentication",
    deployment: "Planned: Render backend + managed PostgreSQL + static frontend deployment",
    testStatus: "Planned automated tests: auth, imports, stock movement, permissions, reporting",
    lastUpdated: "2026-07-11",
    architecture: "Frontend dashboard, REST API layer, PostgreSQL data model, background import/export tasks, audit-log trail"
  },
  taskforge: {
    liveDemo: "https://placeholder.example/taskforge-demo",
    repository: "https://github.com/lshbkrdz/taskforge",
    video: "https://placeholder.example/taskforge-video",
    caseStudy: "Current portfolio case study",
    credentials: "Demo users are fictional; login credentials will be added with the real demo.",
    stack: "React, TypeScript, Django, PostgreSQL, REST API, Redis, Celery",
    deployment: "Planned: Django API + PostgreSQL + Redis worker + static frontend deployment",
    testStatus: "Planned automated tests: board transitions, filters, comments, notifications, permissions",
    lastUpdated: "2026-07-11",
    architecture: "Workspace-based frontend, Django REST resources, async notification worker, activity-event timeline"
  },
  apiwatch: {
    liveDemo: "https://placeholder.example/apiwatch-demo",
    repository: "https://github.com/lshbkrdz/apiwatch",
    video: "https://placeholder.example/apiwatch-video",
    caseStudy: "Current portfolio case study",
    credentials: "No demo login yet; monitoring data shown here is simulated.",
    stack: "Python, FastAPI, PostgreSQL, Scheduled Jobs, REST APIs, Charts, Docker",
    deployment: "Planned: FastAPI service + scheduled check worker + PostgreSQL metrics store",
    testStatus: "Planned automated tests: scheduled checks, timeout handling, incident grouping, metric summaries",
    lastUpdated: "2026-07-11",
    architecture: "Scheduled endpoint checks, event storage, incident grouping, dashboard summary API, status filtering"
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
  const repositoryButton = evidence.repositoryReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.repository}" target="_blank" rel="noreferrer">Public GitHub Repository</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Public GitHub Repository Coming Soon</button>`;
  const repositoryLabel = evidence.repositoryReady ? "" : " <span>placeholder URL</span>";

  return `
    <section class="evidence-box ${compact ? "evidence-box-compact" : ""}" aria-label="Project evidence">
      <div class="evidence-head">
        <h4>Project Evidence</h4>
        <span>Placeholders until real links are added</span>
      </div>
      <div class="evidence-actions">
        <button class="btn btn-small btn-disabled" type="button" disabled>Live Demo Coming Soon</button>
        ${repositoryButton}
        <button class="btn btn-small btn-disabled" type="button" disabled>Video Walkthrough Coming Soon</button>
        <button class="btn btn-small btn-primary" type="button" data-project-open="${projectId}">Technical Case Study</button>
      </div>
      <dl class="evidence-list">
        <div><dt>Live Demo</dt><dd>${evidence.liveDemo} <span>placeholder URL</span></dd></div>
        <div><dt>Public GitHub Repository</dt><dd>${evidence.repository}${repositoryLabel}</dd></div>
        <div><dt>Video Walkthrough</dt><dd>${evidence.video} <span>placeholder URL</span></dd></div>
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
