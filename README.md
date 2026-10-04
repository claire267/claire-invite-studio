# Claire Invite Studio

A production-ready SaaS platform for creating and managing premium digital
wedding invitation websites. Built with Next.js, PostgreSQL, and Claude AI.

## What's included

- **Admin dashboard** — create/edit weddings, manage clients, upload photos, view analytics
- **Couple dashboard** — view RSVPs, guest messages, questions, reply to guests
- **Guest wedding sites** — countdown timer, photo gallery, story, program, map, dress code, RSVP form, guest book, AI assistant chat
- **AI wedding assistant** — answers guest questions using only that wedding's real stored data
- **Full RSVP system** — attendance, guest count, meal/salad/drink per person, gift preference
- **Auth & security** — NextAuth sessions, hashed passwords, role-based route protection

## 1. Local setup

```bash
# Install dependencies
npm install

# Copy environment template and fill in real values (see below)
cp .env.example .env

# Push the schema to your database and generate the Prisma client
npx prisma migrate dev --name init

# Seed sample data (1 admin, 1 couple, 1 sample wedding)
npm run db:seed

# Start the dev server
npm run dev
```

Visit `http://localhost:3000`.

**Sample logins after seeding:**
- Admin: `admin@claireinvitestudio.com` / `admin123`
- Couple: `margot@example.com` / `couple123`
- Sample live site: `http://localhost:3000/w/margot-and-julian`

**Change these passwords before going live.**

## 2. Setting up each service

### PostgreSQL (free options)
Pick one, create a database, copy its connection string into `DATABASE_URL` in `.env`:
- **Neon** (neon.tech) — serverless Postgres, generous free tier
- **Supabase** (supabase.com) — Postgres + extras
- **Railway** (railway.app)

### Cloudinary (image/video storage)
1. Create a free account at cloudinary.com
2. Copy your Cloud Name, API Key, and API Secret from the dashboard into `.env`

### Stripe (payments — fully wired up)
1. Create an account at stripe.com, grab your **test** secret key first (Developers → API keys)
2. Put it in `STRIPE_SECRET_KEY`
3. Set up the webhook so Stripe can confirm payments:
   - Locally: run `stripe listen --forward-to localhost:3000/api/stripe/webhook` (install the Stripe CLI first) and copy the signing secret it prints into `STRIPE_WEBHOOK_SECRET`
   - In production: Stripe Dashboard → Developers → Webhooks → Add endpoint → `https://yourdomain.com/api/stripe/webhook`, subscribed to `checkout.session.completed` and `checkout.session.expired` → copy that signing secret into `STRIPE_WEBHOOK_SECRET`
4. **To charge a client:** send them to `/purchase?weddingId=THEIR_WEDDING_ID` (find the id in the admin weddings list). They pick a package and pay via Stripe Checkout.
5. Use Stripe's test card `4242 4242 4242 4242`, any future expiry, any CVC, while testing
6. When ready to go live, swap in your live Stripe keys (they start with `sk_live_...`) instead of test keys (`sk_test_...`)

### Anthropic (AI assistant)
1. Get an API key from console.anthropic.com
2. Put it in `ANTHROPIC_API_KEY`
3. The assistant automatically uses each wedding's own stored details —
   no extra setup per wedding needed

### NextAuth secret
Generate one securely:
```bash
openssl rand -base64 32
```
Put the output in `NEXTAUTH_SECRET`.

## 3. How the pieces fit together

```
Guest visits /w/margot-and-julian
   → Server component fetches the Wedding row (+ images, schedule) via Prisma
   → Renders hero, gallery, story, program, RSVP form, guest book, AI chat
   → RSVP form POSTs to /api/rsvp → saved to the Rsvp table
   → AI chat POSTs to /api/ai-assistant → Claude answers using that
     wedding's stored details only

Couple logs in at /login
   → NextAuth checks email/password against the User table
   → Redirected to /couple/dashboard
   → middleware.ts blocks them from /admin routes

You (admin) log in
   → Redirected to /admin
   → Create clients (/admin/clients) → create their wedding (/admin/weddings/new)
   → Edit story/colors/photos (/admin/weddings/[id])
   → View analytics across all weddings (/admin/analytics)
```

## 4. Deploying to production

1. **Push to GitHub** — create a repo, push this code (`.env` is gitignored, never commit it)
2. **Deploy on Vercel** (vercel.com) — import the GitHub repo; Vercel auto-detects Next.js
3. **Add environment variables** in the Vercel project settings — paste in everything from your `.env` (use your production Postgres URL, not localhost)
4. **Run the migration against production DB**: from your local machine, temporarily point `DATABASE_URL` at production and run `npx prisma migrate deploy`
5. **Set `NEXTAUTH_URL`** in Vercel to your real domain (e.g. `https://claireinvitestudio.com`)
6. **Custom domain** — add it in Vercel's domain settings, update your DNS

After that, every `git push` to your main branch auto-deploys.

## 5. Adding a new wedding (your actual workflow going forward)

1. Log in as admin
2. Go to **Clients** → create a login account for the couple
3. Go to **Weddings → New Wedding** → fill in names, date, venue, and the couple's email
4. Open that wedding's **Edit** page → add their story, dress code, colors, upload photos
5. Toggle **Published** on
6. Send them their link: `yourdomain.com/w/their-slug`
7. Give the couple their login so they can watch RSVPs come in themselves

## Project structure

```
src/
  app/
    page.tsx                 → platform marketing page
    login/                   → shared login for admin + couples
    admin/                   → admin dashboard (protected)
    couple/                  → couple dashboard (protected)
    w/[slug]/                → public guest wedding site
    api/                     → all backend routes
  components/                → shared React components
  lib/                       → prisma client, auth config, AI, cloud storage
prisma/
  schema.prisma              → full database schema
  seed.ts                    → sample data
```
