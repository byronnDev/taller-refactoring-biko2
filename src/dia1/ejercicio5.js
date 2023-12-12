const PENINSULA_IVA = 1.21;
const CANARIAS_IVA = 1.7;

function calculateTotal(product, locate, isPremiumMember) {
  var value;
  if (locate === "peninsula") {
    // Calcular el precio con el IVA de la Peninsula
    value = product.price * PENINSULA_IVA;
  } else if (locate === "canarias") {
    // Calcular el precio con el IVA de Canarias
    value = product.price * CANARIAS_IVA;
  }

  return calculateTotalPrimeMember(value, isPremiumMember);
}

function calculateTotalPrimeMember(value, isPremiumMember) {
  if (isPremiumMember) {
    return value *= 0.7;
  } else {
    return value *= 0.9;
  }
}

const x = calculateTotal({ name: "Product 1", price: 50 }, "peninsula", true);

console.log(`Product 1: ${x} €`);
