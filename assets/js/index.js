import initCabecalho from "./cabecalho.js"

initCabecalho();


// Testes provisórios:
const highlightButton = document.querySelector('[data-highligth-botao]');
highlightButton.addEventListener('click', function () {
    this.classList.toggle("editor__botao--highlight-ativo");
})

const saveButton = document.querySelector("[data-salvar-botao]");
saveButton.addEventListener('click', (e) => {
    e.preventDefault();
})