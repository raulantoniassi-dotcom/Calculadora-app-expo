import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, Spacing } from "@/constants/theme";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BhaskaraScreen() {
  const [valorAInput, setValorA] = useState("");
  const [valorBInput, setValorB] = useState("");
  const [valorCInput, setValorC] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularBhaskara = (valorA: number, valorB: number, valorC: number) => {
    const delta = valorB * valorB - 4 * valorA * valorC;

    if (delta < 0) {
      return "Não existem raízes reais.";
    }

    const raizDelta = Math.sqrt(delta);
    const primeiroX = (-valorB + raizDelta) / (2 * valorA);
    const segundoX = (-valorB - raizDelta) / (2 * valorA);

    return `X1 = ${primeiroX.toFixed(2)}, X2 = ${segundoX.toFixed(2)}`;
  };

  const calcular = () => {
    const valorA = valorAInput.trim() === "" ? NaN : Number(valorAInput);
    const valorB = valorBInput.trim() === "" ? NaN : Number(valorBInput);
    const valorC = valorCInput.trim() === "" ? NaN : Number(valorCInput);

    if (
      !Number.isFinite(valorA) ||
      !Number.isFinite(valorB) ||
      !Number.isFinite(valorC)
    ) {
      setResultado("Preencha os três campos com números.");
      return;
    }

    if (valorA === 0) {
      setResultado("O coeficiente A precisa ser diferente de zero.");
      return;
    }

    setResultado(calcularBhaskara(valorA, valorB, valorC));
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <Text style={styles.subtitulo}>GRIMOIRE · MATHEMATICAL ARTS</Text>

          <Text style={styles.titulo}>Fórmula de Bhaskara</Text>

          <Text style={styles.descricao}>
            Descubra as raízes da equação do segundo grau.
          </Text>

          <Text style={styles.etiqueta}>COEFICIENTE A</Text>
          <TextInput
            nativeID="valorA"
            placeholder="Insira o valor de A"
            placeholderTextColor="#8299AA"
            keyboardType="numbers-and-punctuation"
            style={styles.TextInput}
            value={valorAInput}
            onChangeText={setValorA}
          />

          <Text style={styles.etiqueta}>COEFICIENTE B</Text>
          <TextInput
            nativeID="valorB"
            placeholder="Insira o valor de B"
            placeholderTextColor="#8299AA"
            keyboardType="numbers-and-punctuation"
            style={styles.TextInput}
            value={valorBInput}
            onChangeText={setValorB}
          />

          <Text style={styles.etiqueta}>COEFICIENTE C</Text>
          <TextInput
            nativeID="valorC"
            placeholder="Insira o valor de C"
            placeholderTextColor="#8299AA"
            keyboardType="numbers-and-punctuation"
            style={styles.TextInput}
            value={valorCInput}
            onChangeText={setValorC}
          />

          <ThemedView style={styles.resultadoContainer}>
            <Text style={styles.resultadoLabel}>✧ RESULTADO DO CÁLCULO</Text>

            <Text style={styles.resultadoTexto}>
              {resultado || "Aguardando cálculo..."}
            </Text>
          </ThemedView>

          <Pressable onPress={calcular} style={styles.botao}>
            <Text style={styles.textoBotao}>✧ CALCULAR ✧</Text>
          </Pressable>

          <Text style={styles.rodape}>MAGIA ANTIGA · PRECISÃO MATEMÁTICA</Text>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: "100%",
    alignSelf: "stretch",
    backgroundColor: "#0C141E",
  },

  safeArea: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: BottomTabInset + Spacing.three,
    justifyContent: "center",
  },

  heroSection: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 30,
    gap: 16,
    backgroundColor: "#0C141E",
  },

  titulo: {
    color: "#E7F1F7",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  subtitulo: {
    color: "#C6B17D",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 2,
  },

  descricao: {
    color: "#8299AA",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
  },

  etiqueta: {
    width: "100%",
    maxWidth: 560,
    color: "#C6B17D",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.8,
    marginBottom: -10,
  },

  TextInput: {
    width: "100%",
    maxWidth: 560,
    minHeight: 58,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#152333",
    color: "#E7F1F7",
    borderWidth: 1,
    borderColor: "#40586B",
    borderRadius: 14,
    fontSize: 16,
  },

  resultadoContainer: {
    width: "100%",
    maxWidth: 560,
    padding: 20,
    marginTop: 6,
    backgroundColor: "#152333",
    borderWidth: 1,
    borderColor: "#B6A16D",
    borderRadius: 14,
    gap: 10,
  },

  resultadoLabel: {
    color: "#C6B17D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  resultadoTexto: {
    color: "#E7F1F7",
    fontSize: 20,
    fontWeight: "600",
  },

  botao: {
    width: "100%",
    maxWidth: 560,
    minHeight: 56,
    marginTop: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8D7E8",
    borderWidth: 1,
    borderColor: "#E7F1F7",
    borderRadius: 14,
  },

  textoBotao: {
    color: "#10202D",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  rodape: {
    color: "#60798B",
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 8,
  },
});
