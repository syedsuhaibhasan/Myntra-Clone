# Myntra Clone

A front-end clone of the Myntra shopping experience built with plain HTML, CSS, and JavaScript. The project focuses on recreating the core storefront and cart flow you would expect from an e-commerce UI: browsing products, adding items to a bag, reviewing cart totals, and removing items from the bag page.

## Live Features

- Home page with a Myntra-style header, navigation, search bar, product grid, and footer.
- Product cards rendered dynamically from a JavaScript data array.
- Add-to-bag action for each product.
- Bag count badge in the header that updates as items are added or removed.
- Bag page with item listing, pricing summary, convenience fee, and place-order button UI.
- Cart state persisted in `localStorage`, so items remain in the bag after refresh.

## Technologies Used

- HTML5 for page structure and layout.
- CSS3 for styling, spacing, layout, and visual polish.
- JavaScript for rendering products, handling bag actions, and computing totals.
- Browser `localStorage` for simple client-side persistence.
- Google Material Symbols for iconography.

## Topics Covered

This project is a good reference for learning or revising the following topics:

- Semantic page structure with `header`, `main`, and `footer`.
- Flexbox-based layouts for navigation, product cards, and cart summary panels.
- DOM manipulation with `querySelector`, `innerHTML`, and dynamic template rendering.
- Event handling through inline actions for adding and removing cart items.
- Array operations such as `map`, `filter`, and `forEach`.
- Data-driven UI rendering from a product list in JavaScript.
- Working with `localStorage` to save and restore application state.
- Cart subtotal, discount, and total calculation logic.
- Reusable UI patterns for product cards, bag items, and summary boxes.

## Project Structure

- `index.html` - Home page markup.
- `index.css` - Shared styling for the landing page and global layout.
- `app.js` - Product data, bag state management, and home-page rendering.
- `bag.html` - Cart/bag page markup.
- `bag.css` - Styles specific to the bag page.
- `bag.js` - Bag page rendering, totals calculation, and remove-item logic.
- `images/` - Product and brand assets used by the UI.

## How It Works

### Home Page

The home page loads a fixed product list from `app.js`, renders each item into a grid, and attaches an Add to Bag button to every product card. When a product is added, its ID is stored in `localStorage` and the header badge is updated.

### Bag Page

The bag page reads the saved product IDs from `localStorage`, maps them back to the product dataset, and renders the bag contents. It also calculates:

- Total MRP
- Discount on MRP
- Convenience fee
- Final payable amount

Removing an item updates the stored bag state, refreshes the item list, and recalculates the totals immediately.

## Getting Started

This project does not require any build tools or package installation.

### Prerequisites

- A modern browser such as Chrome, Edge, or Firefox.
- A local code editor if you want to modify the files.

### Run Locally

1. Open the project folder.
2. Open `index.html` directly in your browser, or serve the folder with a simple local server.
3. Navigate to the Bag page using the bag icon in the header.

### Optional Local Server

If you prefer to serve the project instead of opening files directly, use any simple static server such as VS Code Live Server or another local HTTP server.

## Key Behaviors

- Product cards are created from JavaScript rather than hard-coded in HTML.
- The bag count reflects the number of stored product IDs.
- Cart contents survive refresh because the bag state is written to browser storage.
- The bag summary updates when items are removed.

## Limitations

This is a UI clone and not a production-ready shopping platform. A few things are intentionally simplified:

- No backend or API integration.
- No user authentication.
- No real checkout or payment flow.
- Search, profile, wishlist, and category links are present as interface elements only.
- Product data is static and defined inside the JavaScript file.

## Future Improvements

- Add working navigation for category and account pages.
- Implement product search and filters.
- Add quantity controls in the bag.
- Separate product data into a dedicated JSON file or API.
- Improve accessibility and responsive behavior for smaller screens.
- Add form validation and a real checkout flow.

## Credits

- Inspired by the Myntra shopping experience.
- Uses brand-style assets and Material Symbols for the interface.
