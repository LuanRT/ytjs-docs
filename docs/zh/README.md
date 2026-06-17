---
home: true
title: 首页
heroText: YouTube.js
heroImage: '/images/logo.png'
tagline: YouTube 私有 API 的 JavaScript 客户端
actions:
  - text: 快速开始 →
    link: /zh/guide/
    type: primary
  - text: API 文档
    link: /zh/api/
    type: secondary
features:
  - title: 🚀 强大且灵活
    details: 无限制访问 YouTube 数据。从简单搜索到复杂操作，应有尽有。
  - title: 🛡️ 无需 API 密钥
    details: 无需 API 密钥或配额限制。像 YouTube 网站一样使用私有 API。
  - title: 🔌 平台无关
    details: 兼容 Node.js、Deno 和现代浏览器。在任何 JavaScript 运行环境中使用。
footer: MIT 许可证 | 版权所有 © LuanRT
---

## 生态系统

<div class="project-grid">
  <div class="project-card">
    <h3>GoogleVideo</h3>
    <p>用于处理 YouTube 专有视频流协议（UMP/SABR）的模块集合。</p>
    <router-link to="/zh/googlevideo/" class="project-link">查看文档 →</router-link>
  </div>

  <div class="project-card">
    <h3>扩展</h3>
    <p>为 YouTube.js 添加额外功能，满足特定使用场景。</p>
    <router-link to="/zh/guide/advanced-usage" class="project-link">了解更多 →</router-link>
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
