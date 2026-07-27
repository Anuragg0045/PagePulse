# 🚀 PagePulse - Website SEO Auditor

PagePulse is a web-based SEO auditing tool that analyzes a webpage and returns important SEO metrics such as HTTP status, response time, page title, meta description, H1 count, images without alt attributes, and word count.

This project was built as part of the **Digital Heroes Training Task**.

---

# Features

- Analyze any publicly accessible webpage
- HTTP Status Code
- Response Time
- Page Title
- Meta Description
- H1 Count
- Images Without Alt Attributes
- Word Count
- SEO Score
- Responsive User Interface

---

# Tech Stack

## Backend

- Node.js
- Express.js
- Axios
- Cheerio

## Frontend

- HTML
- CSS
- JavaScript

## Testing

- Jest
- Supertest

---

# Project Structure

```
backend/
│
├── controller/
├── route/
├── services/
├── tests/
├── public/
├── utils/
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Anuragg0045/PagePulse.git
```

Move into the project

```bash
cd PagePulse
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

Run tests

```bash
npm test
```

The application runs on:

```
http://localhost:3000
```

---

# API Contract

## Endpoint

```
POST /audit
```

---

## Request Body

```json
{
    "url":"https://github.com"
}
```

---

## Success Response (200)

```json
{
    "status":200,
    "responseTime":"250 ms",
    "title":"GitHub",
    "metaDescription":"...",
    "h1Count":2,
    "imagesWithoutAlt":3,
    "wordCount":1500
}
```

---

## Error Response (400)

```json
{
    "success":false,
    "message":"URL is required"
}
```

---

## Error Response (500)

```json
{
    "success":false,
    "message":"Failed to fetch the webpage."
}
```

---

# Testing

The project includes automated API tests using Jest and Supertest.

Covered scenarios:

- ✅ Happy path (valid URL)
- ✅ Missing URL
- ✅ Invalid URL

Run tests:

```bash
npm test
```

---

# Design Decisions

## 1. Service Layer

The SEO parsing logic is placed inside a separate service instead of the controller.

### Reason

This keeps controllers lightweight and separates business logic from request handling. It also makes the parsing logic easier to test and reuse.

---

## 2. Axios for HTTP Requests

Axios is used to fetch webpage HTML.

### Reason

Axios provides clean asynchronous HTTP requests, built-in error handling, and a simple API that integrates well with Express applications.

---

## 3. Cheerio for HTML Parsing

Cheerio is used to parse HTML and extract SEO information.

### Reason

Cheerio provides a fast, jQuery-like syntax for traversing the DOM without requiring a browser, making it lightweight and efficient for server-side scraping.

---

# Future Improvements

If more development time were available, I would:

- Add caching to avoid repeated requests for the same website.
- Support JavaScript-rendered pages using Puppeteer.
- Analyze additional SEO metrics such as canonical tags, Open Graph tags, robots.txt, sitemap.xml, and structured data.
- Improve the SEO scoring algorithm with weighted metrics.

---





Example

```
https://pagepulse.onrender.com
```

---

# Author

**Shivam Sharma**

GitHub

https://github.com/Anuragg0045

---

# Training Task

Built for **Digital Heroes Training Task**.