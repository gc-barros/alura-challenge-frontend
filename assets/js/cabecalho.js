function initCabecalho() {
    const menuButton = document.querySelector("[data-menu-button]");
    const menuLateral = document.querySelector("[data-menu-lateral]");
    const searchInput = document.querySelector("[data-search-input]");
    const searchButton = document.querySelector("[data-search-button]");

    function menuButtonToggle() {
        menuButton.classList.toggle("cabecalho__botao--menu-ativo");
    }
    
    menuButton.addEventListener("click", () => {
        const searchInputAtivo = searchInput.classList.contains("cabecalho__busca--ativo");
        if (searchInputAtivo) {
            searchInput.classList.remove("cabecalho__busca--ativo");
            menuButtonToggle();
            searchButton.classList.remove = "cabecalho__botao--lupa-inativo";
        } else {
            menuLateral.classList.toggle("cabecalho__menu--ativo");
            menuButtonToggle();
        }
    });
    
    searchButton.addEventListener("click", () => {
        const menuLateralAtivo = menuLateral.classList.contains("cabecalho__menu--ativo");
        searchButton.classList.add = "cabecalho__botao--lupa-inativo";
        if (menuLateralAtivo) {
            menuLateral.classList.remove("cabecalho__menu--ativo");
            searchInput.classList.toggle("cabecalho__busca--ativo");
        } else {
            searchInput.classList.toggle("cabecalho__busca--ativo");
            menuButtonToggle();
        }
    });
}

export default initCabecalho;