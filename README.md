# my_CMS_test

A multi-theme content management system built with [Payload CMS](https://payloadcms.com/) + [Next.js](https://nextjs.org/).
Includes two built-in theme templates — **Real Estate** and **Law Firm** — switchable via environment variable.

---

## Project Structure

```
my_CMS_test/
└── my-real-estate/                  # Main project directory
    ├── package.json                 # Dependencies & npm scripts
    ├── next.config.ts               # Next.js configuration
    ├── tsconfig.json                # TypeScript configuration
    ├── .env                         # Environment variables (local)
    ├── .env.example                 # Environment variables example
    ├── data/                        # SQLite database (auto-generated at runtime)
    │   └── payload.db
    ├── src/
    │   ├── payload.config.ts        # Payload CMS core config (DB, collections, editor)
    │   ├── payload-types.ts         # Auto-generated TypeScript types from Payload
    │   ├── seed.ts                  # Seed script for Real Estate theme
    │   ├── seed-lawfirm.ts          # Seed script for Law Firm theme
    │   │
    │   ├── collections/             # Payload collection definitions
    │   │   ├── Users.ts             #   User collection (admin / editor roles)
    │   │   ├── Posts.ts             #   Blog posts collection
    │   │   └── Media.ts             #   Media uploads collection
    │   │
    │   ├── access/                  # Access control
    │   │   └── roles.ts             #   Role-based access control logic
    │   │
    │   ├── themes/                  # Theme configuration
    │   │   ├── index.ts             #   Theme loader (selects theme based on env var)
    │   │   ├── realestate.ts        #   Real Estate theme config
    │   │   └── lawfirm.ts           #   Law Firm theme config
    │   │
    │   ├── components/              # Shared frontend components
    │   │   ├── DashboardShell.tsx   #   Dashboard layout shell
    │   │   ├── Editor.tsx           #   Tiptap rich text editor
    │   │   └── PostForm.tsx         #   Post editing form
    │   │
    │   ├── lib/
    │   │   └── auth.ts              # Authentication utilities
    │   │
    │   └── app/
    │       ├── (frontend)/          # Frontend pages (Next.js App Router)
    │       │   ├── layout.tsx       #   Root layout
    │       │   ├── page.tsx         #   Homepage
    │       │   ├── globals.css      #   Global styles
    │       │   ├── blog/            #   Blog listing & detail pages
    │       │   └── dashboard/       #   Custom admin dashboard
    │       │       ├── page.tsx     #     Dashboard home
    │       │       ├── login/       #     Login page
    │       │       ├── posts/       #     Post management (list/create/edit)
    │       │       ├── media/       #     Media management
    │       │       └── users/       #     User management
    │       │
    │       └── (payload)/           # Payload CMS backend (auto-generated)
    │           ├── admin/           #   Payload admin panel
    │           ├── api/             #   REST & GraphQL API routes
    │           └── custom/          #   Custom API routes
    └── .next/                       # Next.js build output (auto-generated)
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | Frontend framework + App Router |
| **Payload CMS 3** | Headless CMS |
| **SQLite** | Database (via `@payloadcms/db-sqlite`) |
| **Tiptap** | Rich text editor |
| **TypeScript** | Type safety |
| **Sharp** | Image processing |

---

## Getting Started

### 1. Install Dependencies

```bash
cd my-real-estate
npm install
```

### 2. Configure Environment Variables

The project includes a `.env` file with defaults that work out of the box for local development:

```env
PAYLOAD_SECRET=super-secret-key-change-in-production
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URI=file:./data/payload.db
```

### 3. Seed the Database

Choose the seed command matching your theme:

```bash
# Real Estate theme
npm run seed

# Law Firm theme
npm run seed:lawfirm
```

### 4. Start the Dev Server

```bash
# Real Estate (default theme)
npm run dev

# Law Firm
npm run dev:lawfirm
```

Once running, visit:
- **Frontend**: http://localhost:3000
- **Custom Dashboard**: http://localhost:3000/dashboard
- **Payload Admin Panel**: http://localhost:3000/admin

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Real Estate theme |
| `npm run dev:lawfirm` | Start dev server with Law Firm theme |
| `npm run build` | Build for production (Real Estate) |
| `npm run build:lawfirm` | Build for production (Law Firm) |
| `npm run start` | Start production server (Real Estate) |
| `npm run start:lawfirm` | Start production server (Law Firm) |
| `npm run seed` | Seed database with Real Estate data |
| `npm run seed:lawfirm` | Seed database with Law Firm data |

---

## Default Accounts

| Theme | Email | Password | Role |
|---|---|---|---|
| Real Estate | `admin@luxerealty.com` | `changeme123` | admin |
| Law Firm | `admin@sterlinglaw.com` | `changeme123` | admin |

> Both themes share the same SQLite database. When switching themes, it is recommended to delete `data/payload.db` and re-run the corresponding seed command.

---

## Theme Switching

Controlled by the `NEXT_PUBLIC_SITE_THEME` environment variable:

- Not set or `realestate` → Real Estate theme
- `lawfirm` → Law Firm theme

Theme config files are located in `src/themes/`, defining site name, tagline, navigation, hero content, and more.
