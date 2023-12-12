// Función 1: Calcular el precio total de productos con descuento
function calcularPrecioTotalConDescuento(productos) {
  let precioTotal = 0;

  for (let producto in productos) {
    const precioConDescuento =
      producto.precio * (1 - producto.descuento);
    precioTotal += precioConDescuento;
  }

  return precioTotal;
}

// Función 2: Calcular el precio total de productos sin descuento
function calcularPrecioTotalSinDescuento(productos) {
  let precioTotal = 0;

  for (let producto in productos) {
    precioTotal += producto.precio;
  }

  return precioTotal;
}
