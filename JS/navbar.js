const botao = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu-principal");

function fecharMenu() {
  menu.classList.remove("is-open");
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-label", "Abrir menu");
}

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("is-open");
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));