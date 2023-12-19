function createElement(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  document.body.appendChild(element);
}

function crearEncabezado(texto) {
  createElement("h1", texto);
}

function crearParrafo(texto) {
  createElement("p", texto);
}

function crearLista(texto) {
  createElement("li", texto);
}
