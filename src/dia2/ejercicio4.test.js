const CANARIAS_IVA = 1.07;
const PENINSULA_IVA = 1.21;

function calculateFinalPrice(price, place) {
  if (place === "peninsula") {
    // Calcular el precio con el IVA de la Peninsula
    return price * PENINSULA_IVA;
  }

  if (place === "canarias") {
    // Calcular el precio con el IVA de Canarias
    return price * CANARIAS_IVA;
  }

  return price;
}

//Añade los test
describe("calculateFinalPrice", () => {
  it("should return price with IVA when place is peninsula", () => {
    const result = calculateFinalPrice(100, "peninsula");
    expect(result).toBe(121);
  });

  it("should return price with IVA when place is canarias", () => {
    const result = calculateFinalPrice(100, "canarias");
    expect(result).toBe(107);
  });
});