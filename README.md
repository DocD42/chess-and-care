## Chess & Care

Marketing website and waitlist foundation for Chess & Care, a calm and premium
product for adult chess players focused on health, performance, and meaningful
matching.

### Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Local file-backed waitlist demo storage
- Mock product repository layer for onboarding and dashboard foundation

### Local development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run lint
npm run build
```

### Project structure

```text
src/
  app/
    (marketing)/             # Landing page routes
    (product)/app/           # MVP product routes and shell
    api/waitlist/route.ts    # Local demo waitlist endpoint
    globals.css              # Theme tokens and shared visual system
    layout.tsx               # Root fonts and metadata
  components/
    app-shell/               # Product shell navigation and header
    sections/                # Reusable landing-page sections
    ui/                      # Small layout and styling primitives
  content/                   # Marketing copy and section data
  data/mock/
    product-seed.json        # Seeded demo product state
  features/
    dashboard/               # Dashboard components
    onboarding/              # Questionnaire schema, actions, and UI
  lib/
    types/                   # Shared domain types
    waitlist.ts              # Shared validation and types
    waitlist-store.ts        # Local repository layer
  server/
    repositories/            # Data contracts and mock implementations
    services/                # View-model assembly for routes
    session/                 # Demo session provider
```

### Waitlist handling

- The waitlist form posts to `/api/waitlist`.
- Submissions are validated on both client and server.
- Local demo entries are stored in `data/waitlist-submissions.json`.
- That file is git-ignored so local testing does not pollute commits.
- The repository layer is isolated so a real database can replace it later.

### Product foundation

- Product routes now live under `/app`.
- The product area uses a demo session with seeded mock state.
- Current MVP foundation includes:
  - dashboard shell
  - onboarding overview and per-step routes
  - chess profile summary page
  - health profile summary page
  - matching preferences summary page
  - Duo Mode concept page
- Product state reads from `src/data/mock/product-seed.json`.
- Local onboarding saves are written to `src/data/mock/product-state.local.json`.
- The mock repository can later be replaced with PostgreSQL-backed implementations without changing page-level UI contracts.

### Next recommended improvements

1. Replace the local waitlist repository with a real backend or hosted database.
2. Add authentication and replace the demo session with real user identity.
3. Normalize onboarding answers into editable profile records and matching inputs.
4. Replace the mock product repository with a real database layer.
5. Add analytics, consent handling, legal pages, and end-to-end tests.

### Notes

- The remote GitHub repository was empty, so the project was bootstrapped from scratch in this repo.
- The local dev server starts successfully with `npm run dev`.
