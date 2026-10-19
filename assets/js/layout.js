// assets/js/layout.js
document.addEventListener("DOMContentLoaded", () => {
  const subject = document.body.dataset.subject || "NEET";
  const parentName = document.body.dataset.parent || "Home";
  const backLink = document.body.dataset.back || "../index.html";
  const pageTitle = document.body.dataset.title || document.title;
  const pageSubtitle = document.body.dataset.subtitle || "";

  // Remove existing injected nav if re-rendered
  const oldNav = document.querySelector(".top-nav");
  if (oldNav) oldNav.remove();
  const oldHeader = document.querySelector(".header-area");
  if (oldHeader) oldHeader.remove();

  // Create Nav Bar
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.innerHTML = `
    <a href="${backLink}">&#8592; ${parentName}</a>
    <span class="badge ${subject.toLowerCase()}">${subject.toUpperCase()}</span>
  `;

  // Create Header Area (Notice backticks around the template literal)
  const header = document.createElement("div");
  header.className = "header-area";
  header.innerHTML = `
    <h1>${pageTitle}</h1>
    ${pageSubtitle ? `<p class="subtitle">\${pageSubtitle}</p>` : ''}
  `;

  document.body.prepend(header);
  document.body.prepend(nav);
});