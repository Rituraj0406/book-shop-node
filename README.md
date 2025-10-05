# BookShop

A simple Node.js e-commerce application for managing books, built with Express, Sequelize, and EJS.

## Features

- Product management (add, edit, delete)
- Shopping cart functionality
- Order creation and viewing
- Admin panel for product management
- Responsive UI with EJS templates and custom CSS

## Tech Stack

- Node.js
- Express
- Sequelize (MySQL)
- EJS templating
- CSS

## Project Structure

```
├── app.js
├── controllers/
├── models/
├── routes/
├── util/
├── data/
├── public/
├── views/
├── package.json
└── .gitignore
```

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bookshop.git
   cd bookshop
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure your MySQL database in [`util/database.js`](util/database.js).

4. Start the server:
   ```sh
   npm start
   ```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## License

ISC

---

*Built for learning and demonstration purposes.*
