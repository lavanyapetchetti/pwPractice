# 📌 Playwright TypeScript Test Framework

This repository contains an automated testing framework using **Playwright** with **TypeScript**. It follows the **Page Object Model (POM)** for better maintainability and scalability.

---

## 🚀 Setup & Installation

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (≥ 16.x)
- **npm** or **yarn**
- **Playwright**

### 2. Clone the Repository
```sh
git clone https://github.com/lavanyapetchetti/pwPractice.git
cd pwPractice
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Install Playwright Browsers
```sh
npx playwright install
```

---

## 📝 Running Tests

### Run All Tests
```sh
npx playwright test
```

### Run a Specific Test
```sh
npx playwright test tests/login.spec.ts
```

### Run Tests in Headed Mode
```sh
npx playwright test --headed
```

### Generate HTML Report
```sh
npx playwright show-report
```

---
