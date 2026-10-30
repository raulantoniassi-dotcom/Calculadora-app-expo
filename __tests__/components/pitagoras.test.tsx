import { calcularCatetoA } from "../../src/app/pitagoras/pitagoras";
import { calcularCatetoB } from "../../src/app/pitagoras/pitagoras";
import { calcularHipotenusa } from "../../src/app/pitagoras/pitagoras";

describe("Teste calculo do teorema de pitagoras", () => {
  it("calculo do cateto A", () => {
    const resultado = calcularCatetoA(10, 6);

    expect(resultado).toBe(8);
  });

  it("calculo do cateto B", () => {
    const resultado = calcularCatetoB(3, 5);

    expect(resultado).toBe(4);
  });

  it("calculo da hipotenusa", () => {
    const resultado = calcularHipotenusa(12, 5);

    expect(resultado).toBe(13);
  });
});
