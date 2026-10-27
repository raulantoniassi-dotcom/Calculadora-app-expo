import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, Spacing } from "@/constants/theme";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalculadoraScreen() {
  const [valor, setValor] = useState("0");
  const [numero1, setNumero1] = useState<number | null>(null);
  const [operacao, setOperacao] = useState("");
  const [novoNumero, setNovoNumero] = useState(false);

  const digitar = (numero: string) => {
    if (novoNumero || valor === "Erro") {
      setValor(numero === "." ? "0." : numero);
      setNovoNumero(false);
    } else if (numero !== "." || !valor.includes(".")) {
      setValor(valor === "0" && numero !== "." ? numero : valor + numero);
    }
  };

  const escolherOperacao = (sinal: string) => {
    setNumero1(Number(valor));
    setOperacao(sinal);
    setNovoNumero(true);
  };

  const calcular = () => {
    if (numero1 === null || operacao === "") return;

    const numero2 = Number(valor);
    let resultado = 0;

    if (operacao === "+") {
      resultado = numero1 + numero2;
    } else if (operacao === "-") {
      resultado = numero1 - numero2;
    } else if (operacao === "×") {
      resultado = numero1 * numero2;
    } else if (operacao === "÷") {
      if (numero2 === 0) {
        setValor("Erro");
        setNumero1(null);
        setOperacao("");
        setNovoNumero(true);
        return;
      }

      resultado = numero1 / numero2;
    }

    setValor(String(Number(resultado.toPrecision(10))));
    setNumero1(null);
    setOperacao("");
    setNovoNumero(true);
  };

  const limpar = () => {
    setValor("0");
    setNumero1(null);
    setOperacao("");
    setNovoNumero(false);
  };

  const apagar = () => {
    if (novoNumero || valor === "Erro") {
      setValor("0");
      setNovoNumero(false);
    } else if (valor.length > 1) {
      setValor(valor.slice(0, -1));
    } else {
      setValor("0");
    }
  };

  const porcentagem = () => {
    setValor(String(Number(valor) / 100));
    setNovoNumero(true);
  };

  const trocarSinal = () => {
    if (valor !== "0" && valor !== "Erro") {
      setValor(String(Number(valor) * -1));
    }
  };

  const botao = (texto: string, acao: () => void, tipo = "normal") => (
    <Pressable
      onPress={acao}
      style={[
        styles.botao,
        tipo === "especial" && styles.botaoEspecial,
        tipo === "operacao" && styles.botaoOperacao,
        tipo === "igual" && styles.botaoIgual,
      ]}
    >
      <Text style={[styles.textoBotao, tipo === "igual" && styles.textoIgual]}>
        {texto}
      </Text>
    </Pressable>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.calculadora}>
          <Text style={styles.titulo}>Calculadora</Text>

          <Text style={styles.subtitulo}>GRIMOIRE · ARCANE ARITHMETIC</Text>

          <Text style={styles.fraseTopo}>
            "Toda resposta começa com um cálculo."
          </Text>

          <View style={styles.visor}>
            <Text
              style={styles.resultado}
            >
       
       
            </Text>
          </View>

          <View style={styles.linha}>
            {botao("AC", limpar, "especial")}
            {botao("⌫", apagar, "especial")}
            {botao("%", porcentagem, "especial")}
            {botao("÷", () => escolherOperacao("÷"), "operacao")}
          </View>

          <View style={styles.linha}>
            {botao("7", () => digitar("7"))}
            {botao("8", () => digitar("8"))}
            {botao("9", () => digitar("9"))}
            {botao("×", () => escolherOperacao("×"), "operacao")}
          </View>

          <View style={styles.linha}>
            {botao("4", () => digitar("4"))}
            {botao("5", () => digitar("5"))}
            {botao("6", () => digitar("6"))}
            {botao("−", () => escolherOperacao("-"), "operacao")}
          </View>

          <View style={styles.linha}>
            {botao("1", () => digitar("1"))}
            {botao("2", () => digitar("2"))}
            {botao("3", () => digitar("3"))}
            {botao("+", () => escolherOperacao("+"), "operacao")}
          </View>

          <View style={styles.linha}>
            {botao("±", trocarSinal, "especial")}
            {botao("0", () => digitar("0"))}
            {botao(",", () => digitar("."))}
            {botao("=", calcular, "igual")}
          </View>

          <Text style={styles.fraseRodape}>✦ A lógica revela o caminho ✦</Text>

          <Text style={styles.assinatura}>PRECISION · REASON · WISDOM</Text>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0C141E",
  },

  safeArea: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: BottomTabInset + Spacing.three,
  },

  calculadora: {
    flex: 1,
    width: "100%",
    maxWidth: 560,
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 6,
  },

  titulo: {
    color: "#E7F1F7",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
  },

  subtitulo: {
    color: "#C6B17D",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 2.5,
    marginTop: -5,
  },

  fraseTopo: {
    color: "#C6B17D",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 4,
  },

  visor: {
    height: 105,
    backgroundColor: "#111E2B",
    borderWidth: 1,
    borderColor: "#8E7B4F",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 5,

    shadowColor: "#C6B17D",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },

  resultado: {
    color: "#F0E8D2",
    fontSize: 54,
    fontWeight: "300",
    textAlign: "right",
    width: "100%",
  },

  linha: {
    flexDirection: "row",
    gap: 10,
  },

  botao: {
    flex: 1,
    height: 61,
    borderRadius: 18,
    backgroundColor: "#172737",
    borderWidth: 1,
    borderColor: "#34495C",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  botaoEspecial: {
    backgroundColor: "#202C3A",
    borderColor: "#66788A",
  },

  botaoOperacao: {
    backgroundColor: "#26394C",
    borderColor: "#8E7B4F",
  },

  botaoIgual: {
    backgroundColor: "#C6B17D",
    borderColor: "#E6D4A4",

    shadowColor: "#C6B17D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  textoBotao: {
    color: "#E7F1F7",
    fontSize: 23,
    fontWeight: "500",
  },

  textoIgual: {
    color: "#101A24",
    fontSize: 28,
    fontWeight: "700",
  },

  fraseRodape: {
    color: "#C6B17D",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 5,
  },

  assinatura: {
    color: "#8E7B4F",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 2.5,
    marginTop: -5,
  },
});
