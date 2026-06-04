# Requests_API_Automation

# Playwright API Tests — restful-api.dev

Automated API tests for public endpoints at https://api.restful-api.dev/objects , using Playwright (https://playwright.dev/) and TypeScript.

## What is tested

- GET /objects — returns list of all objects
- POST /objects — creates a new object
- DELETE /objects/:id — deletes an object by ID

## Prerequisites

- Node.js v18 or higher
- npm

## Installation

git clone https://github.com/IgorStolbtsovQcGit/playwright-api-tests.git
cd playwright-api-tests
npm install
npx playwright install

## Run tests

npx playwright test

With verbose output:

npx playwright test --reporter=list

## Project structure

tests/objects.spec.ts — API test cases
playwright.config.ts — Playwright configuration
package.json
README.md