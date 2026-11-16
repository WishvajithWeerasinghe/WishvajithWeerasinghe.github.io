const menu = document.querySelector<HTMLDetailsElement>(".mobile-menu");

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (menu) menu.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.open) {
    menu.open = false;
    menu.querySelector("summary")?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
    menu.open = false;
  }
});

// Keep both navigation menus in sync with the section being read.
const sections = [...document.querySelectorAll<HTMLElement>("main > section[id]")];
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
let scrollQueued = false;

function updateNavigation() {
  const marker = window.innerHeight * 0.35;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section.id;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
    current = sections.at(-1)?.id;
  }
  navLinks.forEach((link) => {
    if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollQueued = false;
}

window.addEventListener("scroll", () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 760 && menu) menu.open = false;
  updateNavigation();
});
updateNavigation();

const filters = document.querySelector<HTMLElement>(".project-filters");
const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
const projectCount = document.querySelector<HTMLElement>(".project-count");

if (filters) filters.hidden = false;
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let count = 0;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    projectCards.forEach((card) => {
      card.hidden = filter !== "All work" && card.dataset.category !== filter;
      if (!card.hidden) count += 1;
    });
    if (projectCount) projectCount.textContent = `${count} ${count === 1 ? "project" : "projects"} to explore`;
  });
});

document.querySelectorAll<HTMLButtonElement>("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.projectOpen ?? "");
    if (dialog instanceof HTMLDialogElement) {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }
  });
});

document.querySelectorAll<HTMLDialogElement>(".project-dialog").forEach((dialog) => {
  dialog.querySelector<HTMLButtonElement>("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});

const copyButton = document.querySelector<HTMLButtonElement>(".copy-email");
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector<HTMLElement>(".copy-status");
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email ?? "");
      if (status) status.textContent = "Email address copied. Say hello anytime!";
    } catch {
      if (status) status.textContent = "Couldn’t copy automatically. You can select the email address above.";
    }
  });
}
