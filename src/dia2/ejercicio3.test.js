const isOddNumber = (num) => {
  return num % 2 === 0;
};

//Añade los test
describe("isOddNumber", () => {
  it("should return true when is odd number and false when is even", () => {
    const result = isOddNumber(1);

    expect(result).toBeFalsy()

    const result2 = isOddNumber(2);

    expect(result2).toBeTruthy()
  });
})