# Routerpage — React + Vite + Tailwind CSS

A single-page React application built with Vite, React Router v7, and Tailwind CSS v4.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
routerpage/
├── public/
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx       # About page component
│   │   ├── Footer/
│   │   │   └── Footer.jsx      # Site-wide footer with navigation links
│   │   ├── Header/
│   │   │   └── Header.jsx      # Site-wide header with navbar
│   │   ├── Home/
│   │   │   └── Home.jsx        # Home page component
│   │   └── Layout.jsx          # Shared layout (Header + Outlet + Footer)
│   ├── App.jsx                 # Root app component
│   ├── main.jsx                # Entry point — router setup with RouterProvider
│   ├── index.css               # Global styles
│   └── App.css                 # App-level styles
├── index.html
├── vite.config.js
└── package.json
```

## Components

### `Layout.jsx`
Shared layout wrapper used as the root route element. Renders `<Header />`, `<Outlet />` (child page), and `<Footer />` on every page.

### `Header.jsx`
Sticky top navigation bar with logo, **Log in** and **Get started** links, and a Home nav item using React Router's `NavLink`.

### `Home.jsx`
Landing page featuring:
- Two side-by-side landscape images (equal height, full width)
- A **Download Now** button centered below the images

### `About.jsx`
About page featuring:
- A full-width image alongside descriptive text content

### `Footer.jsx`
Site footer with:
- Brand logo and tagline
- Navigation links (Home, About)
- Social media icon links (Discord, Twitter, GitHub, Dribbble)

## Routing

Routing is handled with `createBrowserRouter` and `RouterProvider` from React Router v7.

```
/         →  Layout  →  Home
/about    →  Layout  →  About
```

```jsx
// main.jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '',      element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])
```

## Tailwind CSS Setup

Tailwind v4 is configured via the Vite plugin (no `tailwind.config.js` needed):

```js
// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

```css
/* index.css */
@import "tailwindcss";
```
