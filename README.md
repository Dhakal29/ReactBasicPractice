# ⚛️ React Basic Practice

A personal learning project to practice core React concepts — built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^19 | UI library |
| Vite | ^8 | Dev server & bundler |
| Tailwind CSS | ^4 | Utility-first styling |
| @tailwindcss/vite | ^4 | Tailwind Vite plugin (no config file needed) |

---

## 📁 Project Structure

```
src/
├── main.jsx              # App entry point — renders ColorChangerApp (with PasswordGenerator + CurrencyConverter inside)
├── App.jsx               # Practice playground (counters, profile card, shopping list)
├── index.css             # Global styles + Tailwind import
├── hooks/
│   └── userCurrencyInfo.js     # Custom hook — fetches live exchange rates from API
└── components/
    ├── CurrencyConverter.jsx   # 💱 Full currency converter (uses hook + InputCurrency)
    ├── InputCurrency.jsx       # Reusable currency input field with dropdown
    ├── PasswordGenerator.jsx   # 🔐 Password Generator mini-app
    ├── ColorPart.jsx           # Full-screen background color component
    ├── Button.jsx              # Reusable button component
    ├── Profile.jsx             # Profile dropdown with logout modal
    ├── ShoppingList.jsx        # Filterable shopping list
    ├── CounterCard.jsx         # Individual counter with increment/reset/delete
    ├── AddCounterForm.jsx      # Form to add new counters
    ├── Card.jsx                # User profile card (Tailwind styled)
    └── customreact.js          # Custom React renderer (learning exercise)
```

---

## 🧩 Components Built

### 💱 Currency Converter (`CurrencyConverter.jsx` + `InputCurrency.jsx` + `userCurrencyInfo.js`)
A fully functional real-time currency converter featuring:
- **From field** — type an amount and select the source currency
- **To field** — select the target currency, displays the converted result (read-only)
- **⇅ Swap button** — instantly swaps both currencies and amounts
- **Convert button** — calculates `amount × rate` and shows the result
- **160+ currencies** supported (USD, EUR, NPR, INR, GBP, JPY and more)
- **Auto re-fetch** — API is called again whenever the `from` currency changes

> Uses a **custom hook** `useCurrencyInfo(currency)` with `useState` + `useEffect`  
> API: `https://open.exchangerate-api.com/v6/latest/{currency}` — **free, no API key needed**

**Data flow:**
```
useCurrencyInfo(from)        ← fetches live rates from API
      ↓ returns rates {}
CurrencyConverter.jsx        ← manages state (amount, from, to, convertedAmount)
      ↓ passes props
InputCurrency (From)         ← user types amount + picks source currency
InputCurrency (To)           ← shows result, read-only
      ↓ on submit
amount × rates[to]           ← conversion formula
```

---

### 🔐 Password Generator (`PasswordGenerator.jsx`)
A fully interactive password generator featuring:
- **Length slider** — choose password length from 6 to 32 characters
- **Include Numbers** checkbox — toggle digits (0–9)
- **Include Symbols** checkbox — toggle special characters (!@#$...)
- **Generate button** — creates a random password instantly
- **Copy to clipboard** button — copies with a "✅ Copied!" confirmation

> Uses `useState` and `useCallback` hooks

---

### 🎨 Color Changer (`ColorPart.jsx` + `ColorChangerApp` in `main.jsx`)
A full-screen background color switcher:
- Fixed full-screen background (`position: fixed`) that changes color on button click
- Color buttons: Red, Blue, Green, Yellow, Purple, Black
- The **Password Generator** is embedded inside this view using `position: relative` + `zIndex` to appear above the fixed background

> Uses `useState` hook and inline styles with `zIndex` layering

---

### 👤 Profile Dropdown (`Profile.jsx`)
A user profile menu in the top-right corner:
- Click avatar to toggle dropdown (About / Settings / Logout)
- Logout triggers a **confirmation modal** with backdrop blur
- Modal closes when clicking outside (stopPropagation pattern)

> Uses `useState` with multiple boolean flags for UI state

---

### 🛒 Shopping List (`ShoppingList.jsx`)
A filterable list of grocery items:
- Toggle between **All Products** and **Fruits Only**
- Items color-coded: magenta for fruits, green for vegetables
- Badge labels (Fruit / Vegetable) on each item
- Rendered using `.map()` over a data array

> Uses `useState` + `Array.filter()` + conditional styling

---

### 🔢 Counter Cards (`CounterCard.jsx` + `AddCounterForm.jsx`)
A dynamic counter system in `App.jsx`:
- Add new counters by name via a form
- Each counter has: **Increment**, **Reset**, **Delete**, and **Increase Target** buttons
- Counters are disabled when they hit their target
- **Search** counters by label
- **Filter** by target size (show all vs. target ≥ 10)
- **Reset All** button to reset every counter at once

> Uses `useState` with array state, `.map()`, `.filter()`, and lifting state up

---

### 🃏 Card (`Card.jsx`)
A simple user profile card styled with Tailwind CSS:
- Displays avatar image, name, and email
- Dark mode support via Tailwind's `dark:` variants

---

### 🛠️ Custom React Renderer (`customreact.js`)
A learning exercise that manually implements a basic version of React's rendering:
- Takes a custom JS element object `{ type, props, children }`
- Creates a real DOM element and appends it to the container
- Demonstrates what `React.createElement` does under the hood

---

## 💡 React Concepts Practiced

- ✅ JSX syntax and transpilation
- ✅ Functional components
- ✅ `useState` hook (single values, booleans, arrays of objects)
- ✅ `useCallback` hook for memoized functions
- ✅ **Custom hooks** (`useCurrencyInfo`) with `useEffect` + `useState`
- ✅ **API integration** with `fetch` (no API key, free open endpoint)
- ✅ Props and prop destructuring
- ✅ Conditional rendering (`&&`, ternary)
- ✅ List rendering with `.map()` and `key`
- ✅ Lifting state up
- ✅ Event handling (`onClick`, `onChange`)
- ✅ Controlled inputs (text, range, checkbox)
- ✅ Component composition
- ✅ `zIndex` layering with fixed/relative positioning
- ✅ Tailwind CSS utility classes
- ✅ Dark mode with `prefers-color-scheme`
- ✅ `React.createElement` vs JSX
- ✅ Custom DOM renderer (manual `createElement`)

---

## 🏃 Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
