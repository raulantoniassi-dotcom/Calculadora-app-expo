import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Button, Platform, StyleSheet, TextInput, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function BhaskaraScreen() {
  const [valorAInput, setValorA] = useState("");
  const [valorBInput, setValorB] = useState("");
  const [valorCInput, setValorC] = useState("");
  const [resultado, setResultado] = useState("");
  let delta: number;
  let primeiroX: Number;
  let segundoX: Number;

  const calcularBhaskara = (valorA: number, valorB: number, valorC: number) => {
    const calcularDelta = (valorA: number, valorB: number, valorC: number) => {
      return (delta = (valorB * valorB) - (4 * valorA * valorC))
    };

calcularDelta(valorA, valorB, valorC);

    const raizDelta = Math.sqrt(delta);
    primeiroX = (-(valorB) + raizDelta)/ (2 * valorA);
    segundoX = (-(valorB) - raizDelta)/ (2 * valorA);

    return  `X1 = ${primeiroX}, X2 = ${segundoX}`;;
  };
  const calcular = () => {
    const valorA = valorAInput === "" ? NaN : Number(valorAInput);
    const valorB = valorBInput === "" ? NaN : Number(valorBInput);
    const valorC = valorCInput === "" ? NaN : Number(valorCInput);
    let resposta: string;
    let respostaConta;

    switch (true) {
      case isNaN(valorA || valorB || valorC):
        resposta = "Insira um número nos espaços safadu";
        setValorA(String(resposta));
        setValorB(String(resposta));
        setValorC(String(resposta));
        break;
      default:
        respostaConta = calcularBhaskara(valorA, valorB, valorC);
        setResultado(respostaConta);
        break;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            id="catetoA"
            placeholder="A"
            style={styles.TextInput}
            value={valorAInput}
            onChangeText={setValorA}
          />
          <TextInput
            id="catetoB"
            placeholder="B"
            style={styles.TextInput}
            value={valorBInput}
            onChangeText={setValorB}
          />
          <TextInput
            id="hipotenusa"
            placeholder="C"
            style={styles.TextInput}
            value={valorCInput}
            onChangeText={setValorC}
          />
          <ThemedText>Resultado:</ThemedText>
          <TextInput
            id="hipotenusa"
            placeholder=""
            style={styles.TextInput}
            value={resultado}
            onChangeText={setResultado}
          />
          <Button onPress={calcular} title="Calcular" />
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
    backgroundColor: "#0B0914",
    justifyContent: "center",
    alignItems: "stretch",
  },

  safeArea: {
    flex: 1,
    width: "100%",
    maxWidth: undefined,
    alignSelf: "stretch",
    paddingHorizontal: 40,
    paddingVertical: 30,
    alignItems: "stretch",
    justifyContent: "center",
    gap: 24,
    paddingBottom: BottomTabInset + Spacing.three,
  },

  heroSection: {
    flex: 1,
    width: "100%",
    maxWidth: undefined,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
    gap: 22,
    backgroundColor: "#0B0914",
  },

  title: {
    textAlign: "center",
    color: "#F5F0FF",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 1,
  },

  code: {
    textTransform: "uppercase",
    color: "#B69AFF",
  },

  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 20,
    backgroundColor: "#171422",
    borderWidth: 1,
    borderColor: "#302741",
  },

  TextInput: {
    backgroundColor: "#171422",
    borderWidth: 1,
    borderColor: "#403454",
    borderRadius: 14,
    marginBottom: 10,
    paddingVertical: 16,
    paddingHorizontal: 18,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    width: "100%",
    maxWidth: 500,
  },
});
