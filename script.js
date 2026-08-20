const projectDetails = {
  carcure: {
    title: "CarCure",
    type: "AI Vehicle Damage Assessment App",
    status: "Production Mobile Project",
    sections: {
      Problem: "Drivers and vehicle buyers often receive incomplete repair expectations from a few collision photos. Costs also vary significantly by country, currency, labor market, vehicle, damage severity, parts availability, and possible hidden structural or mechanical damage.",
      Solution: "CarCure turns up to three vehicle photos and optional vehicle details into a structured damage assessment. It identifies visible damage, highlights hidden areas that require inspection, estimates an itemized repair range for the user's market, and communicates safety and drivability concerns without presenting the result as a guaranteed shop quote.",
      Architecture: "The public Expo React Native frontend handles image selection, camera capture, localization, authentication screens, results, and responsive mobile interaction. It communicates with a separately maintained private production API; backend source code and credentials are intentionally not published with the portfolio project.",
      Frontend: "The mobile interface includes a compact responsive header, multi-image assessment flow, vehicle and damage notes, analysis progress, itemized results, account access, language selection, safe-area handling, and keyboard-aware forms that keep primary actions reachable.",
      "Pricing approach": "Estimates are localized to the user's country and currency instead of using a single-country price table. The assessment accounts for severity, likely parts, labor, paint and materials, structural work, safety systems, and a clearly separated hidden-damage contingency.",
      "Main features": ["Up to three damage photos", "Camera and photo-library input", "AI-assisted damage identification", "Itemized repair plan", "Location-aware prices and currency", "Visible and possible hidden damage", "Safety and drivability guidance", "Vehicle details and damage notes", "English, Georgian, and Russian localization", "Authentication and account creation", "Responsive Android and iOS layouts"],
      "Product safeguards": "Results distinguish visible findings from possible hidden damage, surface uncertainty, recommend professional inspection for structural or safety-critical concerns, and avoid silently treating a photo estimate as a final repair invoice.",
      Performance: "Screenshots are compressed, interface motion is kept lightweight, long content remains scrollable, and the mobile layout accounts for device safe areas and the on-screen keyboard to avoid obscuring controls.",
      "Technology stack": "Expo, React Native, TypeScript, Expo Router, EAS Build, image and camera integrations, internationalization, location-aware pricing, and a private production API.",
      Distribution: "The Android app uses the existing com.carcure.app package and is prepared for signed Android App Bundle distribution through Google Play closed testing.",
      "Future improvements": "Expand calibrated regional repair datasets, add more vehicle-specific parts intelligence, improve confidence scoring with additional photo angles, and compare completed estimates with verified shop invoices while preserving user privacy."
    }
  },
  resolveai: {
    title: "ResolveAI",
    type: "AI Customer Support Operations Platform",
    status: "Flagship Full-Stack Project",
    sections: {
      Problem: "Support teams need one reliable workspace for customer conversations, internal ownership, knowledge retrieval, response quality, and operational reporting. Fragmented inboxes and ungrounded AI suggestions make it difficult to maintain speed without losing accuracy or accountability.",
      Solution: "ResolveAI combines organization-scoped ticket operations, customer messages, assignments, priorities, knowledge management, grounded AI response drafts, human approval, notifications, analytics, and audit history in a single working application.",
      Architecture: "A Next.js and TypeScript frontend uses TanStack Query to communicate with a versioned FastAPI REST API. SQLAlchemy provides the data layer, Alembic manages migrations, PostgreSQL with pgvector is prepared for production retrieval, Redis and Celery support background work, and Docker Compose defines the local service topology.",
      Frontend: "The responsive support workspace includes a ticket inbox, detailed conversation view, dashboard metrics, analytics, knowledge management, team settings, notifications, loading and error states, keyboard-visible focus styling, and mobile layouts without horizontal overflow.",
      Backend: "FastAPI routes are separated from authentication, authorization, database, AI-provider, ticket, knowledge, and audit services. Requests use Pydantic validation, organization context is enforced on protected resources, and API errors return useful status codes and messages.",
      Database: "The domain model covers organizations, members, invitations, customers, tickets, messages, knowledge documents and chunks, AI drafts and citations, notifications, audit logs, usage events, refresh tokens, subscriptions, and processed webhook events.",
      Authentication: "Passwords are hashed with bcrypt. The API issues short-lived JWT access tokens and stores hashed refresh tokens that rotate on use. Centralized roles and permissions cover owner, admin, agent, and viewer access while organization scoping protects tenant data.",
      "AI and retrieval": "Knowledge files are parsed into deterministic chunks, embedded through a provider boundary, and retrieved for ticket context. Draft responses include citations and remain pending until a human agent reviews and approves them. The project can run locally with a deterministic provider and supports an OpenAI-compatible provider through environment configuration.",
      "Main features": ["Organization-scoped authentication", "Role-based permissions", "Ticket inbox and filters", "Assignments and priorities", "Customer message history", "Knowledge document ingestion", "Grounded response drafts", "Source citations", "Human approval workflow", "Dashboard analytics", "Notifications", "Audit history", "AI usage tracking", "Repeatable seeded data"],
      Validation: "The backend validates organization membership, role permissions, ticket and customer references, knowledge uploads, message payloads, invitation data, refresh-token state, and webhook signatures. Sensitive configuration is environment-driven and excluded from source control.",
      Testing: "Pytest completed with 9 passing backend tests. Ruff checks, frontend linting, a Vitest test, the Next.js production build, the Alembic migration, seed reset, npm security audit, desktop and mobile browser workflows, and browser-console checks were all completed successfully.",
      "Technical challenges": "The central challenge was keeping AI assistance auditable and subordinate to the support workflow. ResolveAI stores citations separately, keeps generated drafts in a review state, records meaningful actions, and maintains organization boundaries across every protected operation.",
      "Technology stack": "Next.js, React, TypeScript, TanStack Query, Recharts, FastAPI, Python, Pydantic, SQLAlchemy, Alembic, PostgreSQL, pgvector, Redis, Celery, Docker Compose, Pytest, Vitest, GitHub Actions.",
      "Sample records note": "ResolveAI includes fictional organizations, customers, tickets, messages, knowledge articles, AI drafts, and activity records so reviewers can inspect complete support workflows without exposing real customer information.",
      "Future improvements": "Public deployment, production object storage, live event transport, outbound email delivery, invitation acceptance and password-reset screens, Stripe checkout and billing portal flows, PDF ingestion, and staging verification for external AI providers."
    }
  },
  humanizer: {
    title: "Humanizer Studio",
    type: "Local-First Writing Analysis and Rewrite Studio",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Long-form narration can become repetitive, overly formal, and structurally predictable. Existing AI-detector scores are often presented without transparency, while aggressive rewriting can silently damage names, figures, dates, quotations, or the writer's intended meaning.",
      Solution: "Humanizer Studio provides transparent style diagnostics and a controlled rewriting workspace for YouTube narration. It compares the original and result, explains mechanical patterns, creates a seeded rewrite profile, and rejects responses that fail preservation or meaningful-change checks.",
      Architecture: "A React and TypeScript single-page application runs through Vite. Pure local analyzer modules calculate rhythm, structure, repetition, formulaic language, paragraph variation, spoken flow, and naturalness. A provider boundary supports both the deterministic offline rules engine and optional contextual AI rewriting.",
      Frontend: "The responsive dark interface includes side-by-side before and after editors, naturalness and style scorecards, a run profile, mode and strength controls, history, analyzer issue cards, privacy settings, model presets, and clear provider or validation errors.",
      "AI provider": "Official OpenAI endpoints use the Responses API with GPT-5.6 presets. Other compatible gateways can use the Chat Completions format. Long scripts are processed in context-aware chunks with neighboring context and one automatic repair retry when validation fails.",
      Privacy: "The application works without network access in local mode. API keys remain in browser session storage and are deliberately excluded from persistent settings. Full script history is disabled by default.",
      Preservation: "Names, exact numbers, dates, URLs, email addresses, quotations, and negations are protected and validated. Unsafe, unchanged, or insufficiently rewritten candidates are rejected instead of being presented as successful output.",
      "Main features": ["Local style analyzer", "Before and after comparison", "Seeded rewrite profiles", "Narration modes and strength controls", "160 configurable phrase patterns", "Protected fact validation", "Context-aware AI chunking", "Automatic repair retry", "Cross-script novelty scoring", "Local history", "Session-only API keys", "Responsive interface"],
      Testing: "The project has 76 passing Vitest tests. TypeScript checking, ESLint with zero warnings, and the Vite production build also pass.",
      "Technology stack": "React, TypeScript, Vite, Vitest, ESLint, OpenAI Responses API, OpenAI-compatible Chat Completions, browser session storage, responsive CSS.",
      "Technical decisions": "Analyzer percentages are explicitly labeled as heuristic style estimates rather than proof of authorship. Rewriting and scoring are separate systems, validation failures remain visible, and deterministic seeds make rewrite planning reproducible.",
      "Future improvements": "A native desktop wrapper with operating-system keychain storage, semantic heading-aware chunking, sentence-level visual diffs, editable reference-style profiles, and scoring calibrated against a labeled narration corpus."
    }
  },
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
      "Sample records note": "The displayed product counts, supplier records, order totals, and low-stock alerts use realistic sample operating records.",
      "Future improvements": "Barcode scanning, supplier portals, recurring purchase orders, export templates, and role-specific notification rules."
    }
  },
  taskforge: {
    title: "TaskForge",
    type: "Full-Stack Project and Issue Tracking Platform",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Teams need a clear way to plan work, track bugs, discuss decisions, and see what changed without losing context across chats and documents.",
      Solution: "TaskForge provides a working full-stack issue tracker with test authentication, workspace and project management, issue CRUD, assignment, due dates, labels, comments, filters, dashboard statistics, activity history, and a protected data reset.",
      Architecture: "A React, TypeScript, and Vite frontend communicates with a FastAPI REST API. The backend validates requests with Pydantic, stores local development data in SQLite, seeds realistic project records, and protects application routes with a simple bearer-token test session.",
      Frontend: "The interface is a responsive dark admin application with dashboard metrics, project forms, issue filters, issue details, comments, activity timelines, loading states, empty states, validation feedback, destructive-action confirmations, and visible focus states.",
      Backend: "FastAPI exposes health, authentication, dashboard, workspaces, projects, issues, comments, users, activity, and reset endpoints with useful error messages and reference validation.",
      Database: "SQLite stores workspaces, projects, issues, comments, users, and activity entries for local development. Seed logic restores the original sample dataset for portfolio review.",
      Authentication: "The test login uses demo@taskforge.dev and demo1234. The backend verifies the password and requires a bearer token for protected API actions.",
      "Main features": ["Test login", "Workspaces", "Project create/edit/delete", "Issue create/edit/delete", "Status and priority changes", "Assignees", "Due dates", "Labels", "Search and filters", "Comments", "Activity history", "Dashboard statistics", "Data reset"],
      Validation: "The API prevents missing project, user, workspace, issue, and comment references, validates request payloads, and returns appropriate HTTP errors for invalid actions.",
      "Technology stack": "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pytest.",
      "Testing approach": "Pytest covers health, successful login, invalid login, project creation, issue creation, issue update, issue deletion, filtering, comment creation, and data reset. Vitest covers frontend helper logic, and the production frontend build was verified.",
      "Technical challenges": "The main challenge was turning a portfolio preview into a complete local product with realistic seeded data, real API state, protected reset behavior, responsive layouts, and evidence screenshots captured from the running application.",
      "Sample records note": "TaskForge includes seeded team-member and issue records for review. Alex Morgan, Nina Patel, Daniel Kim, and Sofia Reyes are sample users.",
      "Future improvements": "Public deployment, saved issue views, drag-and-drop board movement, file attachments, GitHub issue sync, CI test badges, and project-level reporting charts."
    }
  },
  apiwatch: {
    title: "APIWatch",
    type: "API Monitoring Dashboard",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "API failures are expensive when teams discover them from users instead of monitoring. Teams need uptime, latency, incident history, and endpoint health in one place.",
      Solution: "APIWatch is a working full-stack monitoring dashboard for registering endpoints, running manual and scheduled checks, storing response-time history, calculating uptime, grouping incidents, acknowledging incidents, and resetting a stable sample dataset.",
      Architecture: "A React, TypeScript, and Vite frontend calls a FastAPI REST API. The backend uses SQLite for local storage, HTTPX for real endpoint checks, Pydantic validation, safe URL protection, sample endpoint profiles, and a guarded local scheduler.",
      "Monitoring engine": "Real endpoints are checked with HTTPX. Seeded portfolio endpoints use controlled profiles such as healthy, degraded, unstable, down, and timeout so the local review remains stable while still storing realistic check data.",
      Scheduler: "A lightweight background scheduler starts with the FastAPI app, scans enabled endpoints, prevents overlapping checks for the same endpoint, and logs failures without crashing the API.",
      "Safe URL validation": "The API rejects unsupported schemes, malformed URLs, embedded credentials, localhost, loopback, private-network, link-local, reserved, and metadata targets when public safety mode is enabled.",
      "Incident grouping": "Failed checks open or update one open incident per endpoint. A later successful check resolves the open incident and records duration instead of creating duplicate incidents for every failure.",
      "Metrics aggregation": "Dashboard uptime, response time, endpoint health counts, incident counts, response-time charts, uptime timeline, and recent checks are calculated from stored backend check records.",
      Frontend: "The frontend includes test login, metrics, SVG charts, endpoint CRUD, manual checks, filters, endpoint history, incident list/detail views, acknowledgement notes, reset confirmation, loading states, and mobile layouts.",
      Backend: "FastAPI exposes health, auth, dashboard, endpoints, checks, incidents, activity, metadata, and reset endpoints with protected private routes and useful validation errors.",
      Database: "SQLite stores users, endpoints, check results, incidents, and activity records for local development.",
      Authentication: "Protected routes require the bearer token returned by login. Test credentials are demo@apiwatch.dev and demo1234.",
      "Main features": ["Endpoint management", "Manual API checks", "Scheduled monitoring", "Response-time history", "Uptime calculations", "Incident grouping", "Incident resolution", "Incident acknowledgement", "Status filtering", "Safe URL validation", "Data reset", "Automated tests"],
      "Technology stack": "React, TypeScript, Vite, Python, FastAPI, SQLite, HTTPX, REST API, Pytest.",
      Testing: "Backend tests cover authentication, protected routes, CRUD, URL validation, manual checks, timeout and unexpected-status handling, incident grouping, incident resolution, dashboard aggregation, filters, and data reset. Frontend tests and production build were also verified.",
      "Technical challenges": "The key challenge was making portfolio-safe monitoring realistic: stable sample endpoints, real HTTP checks for user-added public URLs, protected URL validation, non-duplicating incidents, and charts driven by stored check data.",
      "Sample records note": "APIWatch includes controlled sample monitoring records. Seeded endpoints are clearly distinguished from real HTTP endpoints.",
      "Future improvements": "Production worker queue, notification channels, public status pages, multi-region checks, saved filters, incident severity levels, and CI badges."
    }
  },
  clientdesk: {
    title: "ClientDesk",
    type: "CRM and Client Management Platform",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Freelancers and small teams often need a CRM that is lighter than enterprise tools but more reliable than scattered notes and spreadsheets.",
      Solution: "ClientDesk provides a working full-stack CRM with test authentication, contacts, companies, lead pipeline stages, notes, tasks, invoices, search, filters, CSV exports, activity history, and a protected data reset.",
      Architecture: "A React, TypeScript, and Vite frontend communicates with a FastAPI REST API. The backend validates requests with Pydantic, stores local development data in SQLite, hashes the test password, issues bearer tokens, and seeds realistic CRM records.",
      Authentication: "The test login uses demo@clientdesk.dev and demo1234. The password is stored as a PBKDF2 hash, and protected routes reject unauthenticated requests.",
      "Contact management": "Users can create, view, edit, search, filter, sort, open details for, and delete contacts. Contact details show company context, notes, open tasks, invoices, leads, and related activity.",
      "Company management": "Users can create, update status for, delete, and review seeded companies such as Northstar Labs, Orbit Supply, Ember Studio, Meridian Works, and Clearpath Digital.",
      "Lead pipeline": "Leads can be created, filtered, moved between New Lead, Contacted, Qualified, Proposal Sent, Negotiation, Won, and Lost, and each stage change records activity.",
      "Activity events": "The backend records contact, company, lead, note, task, invoice, pipeline, and reset events as timestamped activity entries shown in chronological order.",
      Tasks: "Tasks support creation, status updates, completion, reopening, deletion, priority badges, due dates, and filtering by status.",
      "Invoice tracking": "Invoices support creation, status updates, deletion, currencies, due dates, outstanding totals, paid totals, and CSV exports. No payment processing or card data is included.",
      Search: "Global search returns grouped contacts, companies, leads, tasks, and invoices from the current database state.",
      Filters: "Contacts, leads, tasks, and invoices expose practical filters backed by API query parameters.",
      "CSV exports": "Contacts, leads, tasks, and invoices export from current SQLite records, not hard-coded frontend data.",
      Database: "SQLite stores users, contacts, companies, leads, notes, tasks, invoices, and activity entries for local development.",
      Testing: "Pytest covers health, login, invalid login, protected-route rejection, password hashing, contact CRUD, company creation, lead creation, pipeline movement, search/filter combinations, note creation, task completion/reopen, invoice updates, activity ordering, CSV exports, data reset, and dashboard aggregation. Vitest covers frontend presentation logic, and the production build was verified.",
      "Technical challenges": "The main challenge was keeping the CRM lightweight while still making core workflows genuinely functional: related records, timeline activity, current-state exports, backend-derived dashboard totals, and responsive layouts.",
      "Main features": ["Test login", "Contact management", "Company management", "Lead pipeline", "Pipeline stage movement", "Notes", "Tasks", "Invoice tracking", "Search", "Filters", "Activity timeline", "CSV exports", "Data reset"],
      "Technology stack": "React, TypeScript, Vite, Python, FastAPI, SQLite, REST API, Pytest, Responsive Design.",
      "Sample records note": "ClientDesk includes seeded companies, contacts, invoices, and activity records for local review.",
      "Future improvements": "Email reminders, calendar synchronization, invoice PDF generation, import tools, custom fields, lead-source reporting, production database migration, multi-user workspaces, and role-based permissions."
    }
  },
  bistroboard: {
    title: "BistroBoard",
    type: "Restaurant Ordering and Kitchen Operations Platform",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Restaurant ordering pages often stop at static menu cards, which does not prove that cart state, order validation, backend totals, kitchen workflows, reservations, and operational metrics actually work together.",
      Solution: "BistroBoard is a working full-stack restaurant ordering application with menu browsing, search, dietary filters, cart checkout, pickup and delivery orders, reservation requests, kitchen status management, dashboard metrics, activity history, and data reset.",
      Architecture: "A React, TypeScript, and Vite frontend calls a FastAPI REST API. SQLite stores menu items, orders, order items, reservations, and activity records for local development. Seed logic restores a realistic restaurant operating state.",
      Frontend: "The frontend uses a warm light restaurant design instead of another dark admin dashboard. It includes a customer menu, cart sidebar, checkout fields, receipt state, reservation form, kitchen board, loading and error states, empty states, responsive layout, and visible focus styles.",
      Backend: "FastAPI exposes health, menu, category, order, order-status, reservation, dashboard, activity, and reset endpoints with useful HTTP errors and reference validation.",
      Database: "SQLite stores menu records, customers, orders, order items, reservations, and timeline activity. Order totals, discounts, fees, prep estimates, revenue, average ticket, and open-order counts are calculated from backend data.",
      "Ordering workflow": "Users can add menu items, change quantities, apply the WELCOME10 promo code, choose pickup or delivery, enter contact details, submit an order, and receive an order confirmation from the backend.",
      Reservations: "The reservation view writes new table requests through the API and updates dashboard metrics without hard-coded frontend totals.",
      "Kitchen operations": "The kitchen board displays current orders and lets staff move each order through received, confirmed, preparing, ready, out-for-delivery, completed, and cancelled states while recording activity.",
      Validation: "The API validates missing cart items, unavailable menu items, invalid fulfillment types, missing delivery addresses, invalid status transitions, and empty reservation/contact details.",
      Testing: "Pytest covers health, menu listing, dashboard data, order creation, order status updates, order deletion, reservation creation, activity, validation errors, and data reset. Vitest covers frontend helper logic, and the production frontend build was verified.",
      "Technical challenges": "The main challenge was making a restaurant project feel product-grade while keeping it portfolio-safe: payment capture is not connected, metrics are backend-derived, empty/error states are useful, and screenshots are captured from the running application.",
      "Main features": ["Menu browsing", "Search and dietary filters", "Cart checkout", "Pickup and delivery validation", "Promo code discount", "Order receipt", "Kitchen status board", "Reservation requests", "Dashboard metrics", "Activity timeline", "Data reset", "Responsive light UI"],
      "Technology stack": "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pydantic, Pytest, Vitest, Responsive CSS.",
      "Sample records note": "BistroBoard includes seeded restaurant menu, customer, order, reservation, and payment-method records. No real payment capture is connected.",
      "Future improvements": "Public deployment, staff authentication, table map, kitchen printer integration, payment provider integration, email/SMS confirmations, scheduled menu availability, and multi-location support."
    }
  },
  reservehub: {
    title: "ReserveHub",
    type: "Appointment Booking Platform",
    status: "Completed Portfolio Project",
    sections: {
      Problem: "Service businesses need a reliable way to publish services, show available staff, accept bookings, prevent double-booked time slots, and manage appointment status without relying on spreadsheets or scattered messages.",
      Solution: "ReserveHub is a working full-stack appointment booking platform with public booking, service catalog, staff matching, availability-based slots, appointment CRUD, status workflows, search, filters, dashboard metrics, activity history, and sample-record restoration.",
      Architecture: "A React, TypeScript, and Vite frontend communicates with a FastAPI REST API. SQLite stores business settings, services, staff, service coverage, availability, blocked times, appointments, and activity. Backend logic calculates slots and rejects overlapping bookings.",
      Frontend: "The frontend uses a light, professional service-business interface with a public booking page, admin schedule view, service catalog, staff cards, loading states, empty states, alerts, responsive layout, and visible focus states.",
      Backend: "FastAPI exposes health, settings, services, staff, slots, appointments, appointment status, dashboard, activity, and restore endpoints with Pydantic validation and useful HTTP errors.",
      Database: "SQLite stores normalized services, staff members, staff-service coverage, availability windows, blocked times, appointments, and activity entries for local development.",
      "Booking workflow": "Users choose a service, matching staff member, date, available time slot, and customer details. The API calculates the appointment end time from service duration and prevents conflicts before saving.",
      "Schedule operations": "The admin view supports appointment search, status filtering, status changes, dashboard metrics, and sample-record restoration.",
      Validation: "The API validates services, staff-service relationships, appointment date, HH:MM time format, staff availability, blocked times, and double-booking conflicts.",
      Testing: "Pytest covers health, service/staff availability, slot generation, appointment creation, double-booking rejection, invalid staff-service matching, status updates, search/filtering, dashboard data, deletion, and sample restore. Vitest covers frontend helper logic, and the production frontend build was verified.",
      "Main features": ["Public booking", "Service catalog", "Staff matching", "Availability slots", "Double-booking prevention", "Appointment CRUD", "Status workflow", "Search and filters", "Dashboard metrics", "Activity history", "Sample-record restore", "Responsive light UI"],
      "Technology stack": "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pydantic, Pytest, Vitest, Responsive CSS.",
      "Sample records note": "ReserveHub includes seeded service, staff, availability, appointment, and activity records for local review.",
      "Future improvements": "Admin authentication, email confirmations, calendar export, staff-specific booking links, recurring availability editor, payment deposits, multi-location support, deployment pipeline, and test badges."
    }
  }
};

const projectEvidence = {
  carcure: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/carcure-frontend",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current production mobile case study",
    credentials: "No public reviewer account is provided. Production credentials and backend access remain private.",
    stack: "Expo, React Native, TypeScript, Expo Router, EAS Build, AI vision workflow, internationalization, location-aware pricing",
    deployment: "Android application prepared for Google Play closed testing. The production backend is maintained in a separate private repository.",
    testStatus: "Frontend configuration, TypeScript, lint, and production Android build preparation verified in the application repository.",
    lastUpdated: "2026-08-20",
    architecture: "Expo React Native mobile client, multi-photo assessment flow, localized pricing and currency layer, private production API integration, EAS Android distribution"
  },
  resolveai: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/ResolveAI",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Verified implementation case study",
    credentials: "agent@demo.resolveai.app / DemoPassword123! (seeded local reviewer account)",
    stack: "Next.js, React, TypeScript, FastAPI, Python, SQLAlchemy, Alembic, PostgreSQL, pgvector, Redis, Celery, Docker Compose, Pytest, Vitest",
    deployment: "Local application verified. Docker deployment configuration is included; a public live deployment has not been completed.",
    testStatus: "Backend: 9 Pytest tests passed. Ruff, frontend lint, Vitest, Next.js production build, migrations, seed reset, npm audit, desktop/mobile workflows, and browser-console checks passed.",
    lastUpdated: "2026-08-02",
    architecture: "Next.js support workspace, versioned FastAPI REST API, organization-scoped SQLAlchemy domain, JWT and rotating refresh tokens, knowledge retrieval and cited AI-draft pipeline, Celery/Redis background-work layer, PostgreSQL/pgvector deployment path"
  },
  humanizer: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/AI-text-humanizer",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Verified implementation case study",
    credentials: "No account is required. Local mode works offline; an API key is optional for contextual AI rewriting.",
    stack: "React, TypeScript, Vite, Vitest, ESLint, OpenAI Responses API, OpenAI-compatible Chat Completions, Responsive CSS",
    deployment: "Source code and documentation are public on GitHub. The application is verified locally; a separate public app deployment has not been completed.",
    testStatus: "76 Vitest tests passed. TypeScript type checking, ESLint with zero warnings, secret scan, and Vite production build passed.",
    lastUpdated: "2026-08-20",
    architecture: "React/Vite local-first workspace, pure heuristic analyzer, seeded rewrite planner, preservation and validation pipeline, offline rule provider, optional chunked AI provider, session-only API credentials, browser-local history"
  },
  stockflow: {
    liveDemo: "https://placeholder.example/stockflow-preview",
    repository: "https://github.com/lshbkrdz/stockflow",
    repositoryReady: true,
    video: "https://youtu.be/L9d5Kerptoo",
    videoReady: true,
    caseStudy: "Current portfolio case study",
    credentials: "Access details will be added when the deployed app is ready.",
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
    architecture: "React/Vite frontend, FastAPI REST API, SQLite data layer, Pydantic validation, token-based test session, seeded reset, activity timeline"
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
    architecture: "React/Vite frontend, FastAPI REST API, SQLite storage, HTTPX monitor, controlled endpoint profiles, guarded scheduler, incident grouping, safe URL validation"
  },
  clientdesk: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/clientdesk",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current portfolio case study",
    credentials: "demo@clientdesk.dev / demo1234",
    stack: "React, TypeScript, Vite, Python, FastAPI, SQLite, REST API, Pytest, Responsive Design",
    deployment: "Local application verified. Public live deployment not completed yet.",
    testStatus: "Backend: python -m pytest, 16 passed. Frontend: npm run test, 6 passed. Production build completed with npm run build.",
    lastUpdated: "2026-07-11",
    architecture: "React/Vite frontend, FastAPI REST API, SQLite CRM data model, Pydantic validation, token-based test auth, seeded reset, timeline activity, CSV export layer"
  },
  bistroboard: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/bistroboard",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current portfolio case study",
    credentials: "No login required. Checkout, reservations, orders, and payment-method records are seeded for local review.",
    stack: "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pydantic, Pytest, Vitest, Responsive CSS",
    deployment: "Local application verified. Public live deployment not completed yet.",
    testStatus: "Backend: python -m pytest, 10 passed. Frontend: npm run test, 3 passed. Production build completed with npm run build.",
    lastUpdated: "2026-07-29",
    architecture: "React/Vite customer ordering frontend, FastAPI REST API, SQLite restaurant data model, Pydantic validation, seeded reset, kitchen status workflow, activity timeline"
  },
  reservehub: {
    liveDemo: "",
    liveDemoReady: false,
    repository: "https://github.com/lshbkrdz/ReserveHub",
    repositoryReady: true,
    video: "",
    videoReady: false,
    caseStudy: "Current portfolio case study",
    credentials: "No login required for the public booking flow. Admin schedule tools run locally without authentication in this portfolio build.",
    stack: "React, TypeScript, Vite, FastAPI, Python, SQLite, REST API, Pydantic, Pytest, Vitest, Responsive CSS",
    deployment: "Local application verified. Public live deployment not completed yet.",
    testStatus: "Backend: python -m pytest, 11 passed. Frontend: npm run test, 4 passed. Production build completed with npm run build.",
    lastUpdated: "2026-07-29",
    architecture: "React/Vite booking frontend, FastAPI REST API, SQLite appointment data model, Pydantic validation, staff-service matching, availability slot engine, double-booking protection, activity timeline"
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
    ? `<a class="btn btn-small btn-secondary" href="${evidence.liveDemo}" target="_blank" rel="noopener noreferrer">Live Preview</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Live Preview - Coming Soon</button>`;
  const liveDemoValue = evidence.liveDemo
    ? `${evidence.liveDemo}${evidence.liveDemoReady ? "" : " <span>placeholder URL</span>"}`
    : "Not deployed yet";
  const repositoryButton = evidence.repositoryReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.repository}" target="_blank" rel="noopener noreferrer">Public GitHub Repository</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Public GitHub Repository Coming Soon</button>`;
  const repositoryValue = evidence.repository || evidence.repositoryText || "Not available yet";
  const repositoryLabel = !evidence.repositoryReady && evidence.repository ? " <span>placeholder URL</span>" : "";
  const videoButton = evidence.videoReady
    ? `<a class="btn btn-small btn-secondary" href="${evidence.video}" target="_blank" rel="noopener noreferrer">Watch Video Walkthrough</a>`
    : `<button class="btn btn-small btn-disabled" type="button" disabled>Video Walkthrough Coming Soon</button>`;
  const videoValue = evidence.video
    ? `${evidence.video}${evidence.videoReady ? "" : " <span>placeholder URL</span>"}`
    : "Not available yet";
  const helperText = projectId === "carcure" || projectId === "resolveai" || projectId === "stockflow" || projectId === "taskforge" || projectId === "apiwatch" || projectId === "clientdesk" || projectId === "bistroboard" || projectId === "reservehub" ? "" : "<span>Placeholders until real links are added</span>";

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
        <div><dt>Live Preview</dt><dd>${liveDemoValue}</dd></div>
        <div><dt>Public GitHub Repository</dt><dd>${repositoryValue}${repositoryLabel}</dd></div>
        <div><dt>Video Walkthrough</dt><dd>${videoValue}</dd></div>
        <div><dt>Technical Case Study</dt><dd>${evidence.caseStudy}</dd></div>
        <div><dt>Access Credentials</dt><dd>${evidence.credentials}</dd></div>
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
