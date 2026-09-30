# Nimexa Projects

React + Vite application for B.Tech EEE, CSE and Mechanical project ideas.
Includes compact cards, filters, full project dialogs, demo requests, FAQs and a validated WhatsApp enquiry form.

## Run locally

Use Node.js 22.12+ (or Node.js 20.19+). Run these commands in this folder:

```sh
npm install
npm run dev
```

Open the URL printed by Vite. Use the development server instead of opening index.html directly from disk.

## Build and verify

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static host. Tailwind CSS is compiled locally with PostCSS; there is no Tailwind CDN dependency. Google Fonts and WhatsApp links require internet access.

## Source files

- `src/App.jsx`: page sections and catalogue filter state
- `src/components/Projects.jsx`: cards, categories, dialogs, FAQs and form
- `src/components/Navigation.jsx`: responsive navigation and hero readings
- `src/data.js`: all 26 projects, category cards, FAQs and contact settings
- `src/styles.css`: shared styles and Tailwind directives
- `public/assets/icons/`: circuit logo and favicon
- `tailwind.config.js`: colours, typography and theme

Edit `src/data.js` to change projects or the WhatsApp number. Project selectors and filters use the same catalogue. Demo availability is set per project. There is no backend or message storage; the form opens a prefilled WhatsApp message.

Tests cover branch filters, project dialog focus and enquiry links, demo selection, FAQ toggling, mobile navigation and form validation. External navigation is mocked, so tests do not send messages.
