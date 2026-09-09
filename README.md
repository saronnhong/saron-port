# Saron Nhong — Developer Portfolio

My personal software engineering portfolio showcasing my experience, technical skills, and selected full-stack and frontend projects.

The site is designed and developed from scratch with a focus on clean typography, responsive layouts, subtle interactions, and presenting technical projects in a clear and engaging way.

### Live Site

**[saronnhong.com](https://saronnhong.com)**

---

## Technologies

### Frontend

* **React 19** — Component-based user interface
* **JavaScript / JSX** — Application logic and components
* **CSS3** — Custom styling, responsive layouts, and animations
* **Vite 7** — Development server and production build tooling

### UI

* **Font Awesome** — Interface, technology, and social icons
* **Custom SVG Assets** — Technology logos and visual elements

### Testing & Development

* **Vitest** — Unit testing
* **React Testing Library** — Component testing
* **ESLint** — Code quality and linting

### Deployment

* **GitHub Pages** — Static site hosting
* **gh-pages** — Automated deployment
* **Custom Domain** — [saronnhong.com](https://saronnhong.com)

---

## Running Locally

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The portfolio is hosted on GitHub Pages and deployed from the generated Vite `dist` directory.

Deployment is configured in `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist -b gh-pages -f --cname saronnhong.com"
  }
}
```

Deploy the latest version with:

```bash
npm run deploy
```

The `predeploy` script automatically creates a fresh production build before publishing the `dist` directory to the `gh-pages` branch.

For a typical update:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

The `main` branch contains the source code, while the `gh-pages` branch contains the production build served at **[saronnhong.com](https://saronnhong.com)**.

---

Built with React + Vite and deployed with GitHub Pages.
