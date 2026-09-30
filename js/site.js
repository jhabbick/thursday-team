const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close Menu" : "Open Menu");
  });
}

const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const thanks = document.querySelector(".form-thanks");
    const error = document.querySelector(".form-error");
    const action = form.getAttribute("action") || "";
    error.hidden = true;

    if (action.includes("YOUR_FORM_ID")) {
      form.hidden = true;
      thanks.hidden = false;
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      form.hidden = true;
      thanks.hidden = false;
    } catch (err) {
      error.hidden = false;
    }
  });
}
