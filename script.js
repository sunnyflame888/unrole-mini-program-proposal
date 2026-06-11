const header = document.querySelector("[data-header]");
const sections = Array.from(document.querySelectorAll("[data-section]"));
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  }
);

sections.forEach((section) => revealObserver.observe(section));

const navObserver = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!active) return;

    navLinks.forEach((link) => {
      const target = link.getAttribute("href")?.slice(1);
      const isActive =
        target === active.target.id ||
        (target === "boot" && ["boot", "brand"].includes(active.target.id)) ||
        (target === "access" && ["access", "opens"].includes(active.target.id)) ||
        (target === "archive" && ["archive", "reason"].includes(active.target.id)) ||
        (target === "member" && ["member", "my-pass", "image-standard", "closing"].includes(active.target.id));

      link.classList.toggle("is-active", Boolean(isActive));
    });
  },
  {
    threshold: [0.24, 0.42, 0.62],
  }
);

sections.forEach((section) => navObserver.observe(section));

document.querySelectorAll(".concept-frame").forEach((frame) => {
  const img = frame.querySelector("img");
  if (!img) {
    frame.classList.add("image-missing");
    return;
  }

  const markReady = () => {
    frame.classList.remove("image-missing");
    frame.classList.add("image-ready");
  };

  const markMissing = () => {
    frame.classList.remove("image-ready");
    frame.classList.add("image-missing");
  };

  img.loading = "eager";

  if (img.complete) {
    img.naturalWidth > 0 ? markReady() : markMissing();
  }

  img.addEventListener("load", markReady, { once: true });
  img.addEventListener("error", markMissing, { once: true });

  const probe = new Image();
  probe.addEventListener("load", markReady, { once: true });
  probe.addEventListener("error", markMissing, { once: true });
  probe.src = img.getAttribute("src");
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
