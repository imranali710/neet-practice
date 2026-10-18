document.addEventListener("DOMContentLoaded", () => {
  const subject = document.body.dataset.subject || "neet";
  const parentName = document.body.dataset.parent || "Home";
  const backLink = document.body.dataset.back || "../../index.html";
  const pageTitle = document.body.dataset.title || document.title;
  const pageSubtitle = document.body.dataset.subtitle || "";

  // Insert Navigation Bar
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.innerHTML = `
    <a href="${backLink}">&larr; Back to ${parentName}</a>
    <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">${subject}</span>
  `;

  // Insert Header Area
  const header = document.createElement("div");
  header.className = "header-area";
  header.innerHTML = `
    <h1>${pageTitle}</h1>
    ${pageSubtitle ? `<p>\${pageSubtitle}</p>` : ''}
  `;

  document.body.prepend(header);
  document.body.prepend(nav);
});