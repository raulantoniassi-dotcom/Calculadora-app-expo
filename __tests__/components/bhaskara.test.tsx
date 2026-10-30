import { describe, expect, test } from '@jest/globals';
import { calcularBhaskara } from '../../src/app/bhaskara/bhaskara';


describe('Bhaskara', () => {
  it('Delta negativo', () => {
    const resultado = calcularBhaskara(1, 2, 3);
      expect(resultado).toBe("Não existem raízes reais.");
    });

  it('Delta positivo', () => {
    const resultado = calcularBhaskara(1, 5, 6);
      expect(resultado).toBe("X1 = -2.00, X2 = -3.00");
    });
});