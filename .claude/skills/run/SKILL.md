---
description: Launch the portfolio dev server and screenshot it in the browser
---

# Run — robby-porfolio

## Start

```bash
pkill -f "npm run dev" 2>/dev/null; sleep 1
npm run dev &
echo $! > /tmp/portfolio-dev.pid
timeout 30 bash -c 'until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done'
```

Port: **3000**

## Drive

```bash
chromium-cli --session portfolio <<'EOF'
nav http://localhost:3000
wait-for text=Robby
screenshot
console --errors
EOF
```

Screenshots: `chromium_cli/sessions/portfolio/screenshots/screenshot.png`

## Stop

```bash
kill $(cat /tmp/portfolio-dev.pid) 2>/dev/null || pkill -f "npm run dev"
```

## Gotchas

- First `nav` can take 10s+ — Next.js compiles on demand. `wait-for` handles it.
- No auth needed — fully static/public page.
- Scroll animations use IntersectionObserver; sections below the fold won't animate in a static screenshot.
