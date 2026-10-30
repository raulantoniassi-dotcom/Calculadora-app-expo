
import { render, fireEvent } from "@testing-library/react-native";
import CalculadoraScreen from '../../src/app/calculadora/calc';

// describe eu n sei oq significa calma ai
// describe é basicamente a DIV do html, ele separa uma "classe" de testes, nesse caso a tela da calculadora ne kk
describe("Testes da Tela de Calculadora", () => {
  it("deve exibir o número pressionado no visor", () => {
    // sabosta ai declara que getByText e o getAllByTest vire a tela da calculadora
   const { getByTestId, getAllByText } = render(<CalculadoraScreen />);

    // esse fireEvent é pra disparar uma ação. como tá no .press ele ta meio que "pressionando" o botao, tlgd aquela pilha do "onPress()" do html?
    fireEvent.press(getAllByText("7")[0]);

    // aqui ta esperando o 7 da tela brotar no bagulho(visor)
   expect(getByTestId("Visor")).toHaveTextContent("7");
  });

  // ta falando: o "nome do teste" faz sabosta q ta dps ai rsrsrs
  it("deve realizar uma soma corretamente (7 + 5 = 12)", () => {
    const { getByTestId, getAllByText } = render(<CalculadoraScreen />);

    // ta apertando os botao tudo que ta entre parenteses
    fireEvent.press(getAllByText("7")[0]);
    fireEvent.press(getAllByText("+")[0]);
    fireEvent.press(getAllByText("5")[0]);
    fireEvent.press(getAllByText("=")[0]);

    // dai esse ngc ai ta esperando o resultado da conta ali em cima ser 12 mermo, por isso do toHaveTextContent()
    expect(getByTestId("Visor")).toHaveTextContent("12");
  });
});

