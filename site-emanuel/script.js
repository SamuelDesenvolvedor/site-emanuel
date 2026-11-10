const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("lead-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  if (!document.getElementById("consent").checked) return;
  const subject = encodeURIComponent("Solicitação de cotação - site Emanoel Corretora");
  const body = encodeURIComponent(
    `Olá, gostaria de solicitar informações sobre Seguro de Vida.\n\n` +
    `Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("phone")}\n` +
    `Perfil: ${data.get("profile")}\nMensagem: ${data.get("message") || "Não informada"}\n\n` +
    `Autorizo o contato referente a esta solicitação.`
  );
  document.getElementById("form-status").textContent = "Abrindo seu aplicativo de e-mail para confirmar o envio.";
  window.location.href = `mailto:contato@emanoelseguros.com.br?subject=${subject}&body=${body}`;
});
