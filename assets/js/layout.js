document.addEventListener("DOMContentLoaded", () => {
  const subject = document.body.dataset.subject || "NEET";
  const parentName = document.body.dataset.parent || "Home";
  const backLink = document.body.dataset.back || "../../index.html";
  const pageTitle = document.body.dataset.title || document.title;
  const pageSubtitle = document.body.dataset.subtitle || "";

  // Mobile Top Bar
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.innerHTML = `
    <a href="${backLink}">&#8592; ${parentName}</a>
    <span class="badge ${subject.toLowerCase()}">${subject.toUpperCase()}</span>
  `;

  // Page Header
  const header = document.createElement("div");
  header.className = "header-area";
  header.innerHTML = `
    <h1>${pageTitle}</h1>
    ${pageSubtitle ? `<p>\${pageSubtitle}</p>` : ''}
  `;

  document.body.prepend(header);
  document.body.prepend(nav);
});