# API Catalog

This document provides a catalog of the available API endpoints.

## Endpoints

### GET /api/news

- **Description**: Returns a list of the latest news articles.
- **Request**: `GET /api/news`
- **Response**: A JSON array of news articles.
  ```json
  [
    {
      "title": "string",
      "summary": "string",
      "url": "string"
    }
  ]
  ```

### POST /api/fetch-news

- **Description**: Triggers a fetch of the latest news articles from the upstream source. This is used by the daily cron job.
- **Request**: `POST /api/fetch-news`
- **Response**: Empty response with status 200 on success.

### GET /api/test-negotiation

- **Description**: A test endpoint to demonstrate content negotiation. Returns either HTML or Markdown based on the `Accept` header of the request.
- **Request**:
  - `GET /api/test-negotiation` with `Accept: text/html`
  - `GET /api/test-negotiation` with `Accept: text/markdown`
- **Response**:
  - HTML: `<h1>This is an HTML response</h1>`
  - Markdown: `# This is a markdown response`
