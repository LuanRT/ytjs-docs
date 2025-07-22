--- 
home: true
title: Home
heroText: YouTube.js
heroImage: '/images/logo.png'
tagline: A JavaScript client for YouTube's private API
actions:
  - text: Get Started →
    link: /guide/
    type: primary
  - text: API Documentation
    link: /api/
    type: secondary
features:
  - title: 🚀 Powerful & Flexible
    details: Access YouTube's data without restrictions. Built to handle everything from simple searches to complex operations.
  - title: 🛡️ No API Key Required
    details: Works without API keys or quotas. Use YouTube's private API the same way the website does.
  - title: 🔌 Agnostic
    details: Compatible with Node.js, Deno, and modern browsers. Use it anywhere JavaScript runs.
footer: MIT Licensed | Copyright © LuanRT
---

## Ecosystem

<div class="project-grid">
  <div class="project-card">
    <h3>GoogleVideo</h3>
    <p>A collection of modules for working with YouTube's proprietary video streaming protocols (UMP/SABR).</p>
    <router-link to="/googlevideo/" class="project-link">View Documentation →</router-link>
  </div>
  
  <div class="project-card">
    <h3>Extensions</h3>
    <p>Extend YouTube.js with additional features and functionalities for specialized use cases.</p>
    <router-link to="/guide/advanced-usage" class="project-link">Learn More →</router-link>
  </div>
</div>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.project-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--vp-c-bg-light);
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin-top: 0;
  padding-top: 0;
  color: var(--vp-c-brand);
}

.project-card p {
  margin: 0.5rem 0 1rem;
  color: var(--vp-c-text-mute);
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.project-link:hover {
  text-decoration: underline;
}
</style>