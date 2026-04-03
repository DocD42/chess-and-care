## Chess & Care

Marketing website and waitlist foundation for Chess & Care, a calm and premium
product for adult chess players focused on health, performance, and meaningful
matching.

### Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Local file-backed waitlist demo storage

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
    api/waitlist/route.ts    # Local demo waitlist endpoint
    globals.css              # Theme tokens and shared visual system
    layout.tsx               # Fonts and metadata
    page.tsx                 # Page composition
  components/
    sections/                # Reusable landing-page sections
    ui/                      # Small layout and styling primitives
  content/
    site-content.ts          # Copy and structured section data
  lib/
    waitlist.ts              # Shared validation and types
    waitlist-store.ts        # Local repository layer
```

### Waitlist handling

- The waitlist form posts to `/api/waitlist`.
- Submissions are validated on both client and server.
- Local demo entries are stored in `data/waitlist-submissions.json`.
- That file is git-ignored so local testing does not pollute commits.
- The repository layer is isolated so a real database can replace it later.

### Next recommended improvements

1. Replace the local waitlist repository with a real backend or hosted database.
2. Add analytics, consent handling, and legal pages.
3. Extend the design system into product flows such as onboarding, matching, and dashboards.
4. Add end-to-end form tests once the backend contract is fixed.

### Notes

- The remote GitHub repository was empty, so the project was bootstrapped from scratch in this repo.
- The local dev server starts successfully with `npm run dev`.
