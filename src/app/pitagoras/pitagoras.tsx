import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, Spacing } from "@/constants/theme";
import { useState } from "react";
import { Pressable, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: "100%",
    alignSelf: "stretch",
    backgroundColor: "#0C141E",
    justifyContent: "center",
    alignItems: "stretch",
  },

  safeArea: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: BottomTabInset + Spacing.three,
    justifyContent: "center",
    alignItems: "stretch",
  },

  heroSection: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 30,
    gap: 18,
    backgroundColor: "#0C141E",
  },

  TextInput: {
    width: "100%",
    maxWidth: 560,
    minHeight: 58,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 4,
    backgroundColor: "#152333",
    color: "#E7F1F7",
    borderWidth: 1,
    borderColor: "#40586B",
    borderRadius: 14,
    fontSize: 16,
    fontWeight: "500",
    outlineStyle: "none",
  } as any,

  titulo: {
    color: "#E7F1F7",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  subtitulo: {
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
    letterSpacing: 2,
    marginBottom: -12,
  },

  resultadoContainer: {
    width: "100%",
    maxWidth: 560,
    padding: 20,
    marginTop: 4,
    backgroundColor: "#152333",
    borderWidth: 1,
    borderColor: "#B6A16D",
    borderRadius: 14,
    gap: 8,
  },

  resultadoLabel: {
    color: "#C6B17D",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  resultadoTexto: {
    color: "#E7F1F7",
    fontSize: 24,
    fontWeight: "600",
  },

  botao: {
    width: "100%",
    maxWidth: 560,
    minHeight: 56,
    marginTop: 8,
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
    fontSize: 11,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 8,
  },
});

export default function PitagorasScreen() {
  const [catetoAInput, setCatetoA] = useState("");
  const [catetoBInput, setCatetoB] = useState("");
  const [hipotenusaInput, setHipotenusa] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularCatetoA = (catetoB: number, hipotenusa: number) => {
    return (hipotenusa * hipotenusa - catetoB * catetoB) ** 0.5;
  };

  const calcularCatetoB = (catetoA: number, hipotenusa: number) => {
    return (hipotenusa * hipotenusa - catetoA * catetoA) ** 0.5;
  };

  const calcularHipotenusa = (catetoA: number, catetoB: number) => {
    return (catetoA * catetoA + catetoB * catetoB) ** 0.5;
  };

  const calcular = () => {
    const catetoA = catetoAInput.trim() === "" ? NaN : Number(catetoAInput);
    const catetoB = catetoBInput.trim() === "" ? NaN : Number(catetoBInput);
    const hipotenusa =
      hipotenusaInput.trim() === "" ? NaN : Number(hipotenusaInput);

    const quantidadeVazios = [catetoA, catetoB, hipotenusa].filter((valor) =>
      Number.isNaN(valor),
    ).length;

    if (quantidadeVazios !== 1) {
      setResultado("Preencha exatamente dois campos.");
      return;
    }

    let resposta: number;

    if (Number.isNaN(catetoA)) {
      resposta = calcularCatetoA(catetoB, hipotenusa);
    } else if (Number.isNaN(catetoB)) {
      resposta = calcularCatetoB(catetoA, hipotenusa);
    } else {
      resposta = calcularHipotenusa(catetoA, catetoB);
    }

    if (!Number.isFinite(resposta) || resposta < 0) {
      setResultado("Valores inválidos para um triângulo retângulo.");
      return;
    }

    setResultado(resposta.toFixed(2));
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <Text style={styles.subtitulo}>GRIMOIRE · MATHEMATICAL ARTS</Text>

          <Text style={styles.titulo}>Teorema de Pitágoras</Text>

          <Text style={styles.subtitulo}>
            Toda distância esconde uma resposta.
          </Text>

          <Text style={styles.etiqueta}>CATETO A</Text>

          <TextInput
            nativeID="catetoA"
            placeholder="Insira o valor do cateto A"
            placeholderTextColor="#8299AA"
            keyboardType="decimal-pad"
            style={styles.TextInput}
            value={catetoAInput}
            onChangeText={setCatetoA}
          />

          <Text style={styles.etiqueta}>CATETO B</Text>

          <TextInput
            nativeID="catetoB"
            placeholder="Insira o valor do cateto B"
            placeholderTextColor="#8299AA"
            keyboardType="decimal-pad"
            style={styles.TextInput}
            value={catetoBInput}
            onChangeText={setCatetoB}
          />

          <Text style={styles.etiqueta}>HIPOTENUSA</Text>

          <TextInput
            nativeID="hipotenusa"
            placeholder="Insira o valor da hipotenusa"
            placeholderTextColor="#8299AA"
            keyboardType="decimal-pad"
            style={styles.TextInput}
            value={hipotenusaInput}
            onChangeText={setHipotenusa}
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
