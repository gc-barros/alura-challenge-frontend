function initCodeEditor() {
    const editor = document.querySelector("[data-editor]");
    const codigoModelo = editor.textContent;

    editor.addEventListener('focus', () => {
        if (editor.textContent == codigoModelo) {
            editor.innerText = "";
        }
    });
}

export default initCodeEditor;

