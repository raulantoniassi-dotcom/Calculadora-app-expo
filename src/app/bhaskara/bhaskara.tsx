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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 5,
  },
  iframe: {
    width: 500,
    height: 500,
  },
});

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
          <Text>Resultado:</Text>
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
