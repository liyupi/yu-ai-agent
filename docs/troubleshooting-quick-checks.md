# Troubleshooting Quick Checks

Use this checklist before digging into framework internals.

## 1. Confirm the backend is up

- Start the backend from the repository root.
- Verify `http://localhost:8123/api/health` returns `ok`.
- If the backend port changes, update your frontend expectations as well.

## 2. Confirm the frontend is using the expected URL

- The Vite dev server runs on `http://localhost:3000`.
- In development, the frontend sends requests to `http://localhost:8123/api`.
- If the page loads but chat requests fail immediately, check whether the backend is reachable from your browser.

## 3. Check required API keys first

- `DASHSCOPE_API_KEY` is required for the DashScope chat model.
- `SEARCH_API_KEY` is required when testing the web search tool.
- If you prefer not to export environment variables, make sure placeholder values in `src/main/resources/application.yml` have been replaced locally.

## 4. Start optional services only when you need them

- PgVector-related configuration is commented out by default.
- MCP client configuration is also commented out by default.
- For a first local run, you can start with the backend + frontend only.

## 5. When SSE looks stuck

- Refresh the page after restarting the backend.
- Check the browser network panel for the `/ai/love_app/chat/sse` request.
- Review backend logs for model or API-key errors before changing frontend code.
