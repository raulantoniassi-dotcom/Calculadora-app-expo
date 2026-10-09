import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Platform, StyleSheet, TextInput } from "react-native";
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
export default function pitagorasScreen() {
  const [catetoAInput, setCatetoA] = useState("");
  const [catetoBInput, setCatetoB] = useState("");
  const [hipotenusaInput, setHipotenusa] = useState("");

  const calcularCatetoA = (catetoB: number, hipotenusa: number) => {
    return (hipotenusa * hipotenusa - catetoB * catetoB) ** 0.5;
  };

  const calcularCatetoB = (catetoA: number, hipotenusa: number) => {
    return (hipotenusa * hipotenusa - catetoA * catetoA) ** 0.5;
  };

  const calcularHipotenusa = (catetoA: number, catetoB: number) => {
    return (catetoA * catetoA + catetoB * catetoB) ** 0.5;
  };

  function calcular() {
    const catetoA = catetoAInput === "" ? NaN : Number(catetoAInput);
    const catetoB = catetoBInput === "" ? NaN : Number(catetoBInput);
    const hipotenusa = hipotenusaInput === "" ? NaN : Number(hipotenusaInput);

    let resposta: number;

    switch (true) {
      case Number.isNaN(catetoA):
        resposta = calcularCatetoA(catetoB, hipotenusa);
        setCatetoA(String(resposta));
        break;
      case Number.isNaN(catetoB):
        resposta = calcularCatetoB(catetoA, hipotenusa);
        setCatetoB(String(resposta));
        break;
      case Number.isNaN(hipotenusa):
        resposta = calcularHipotenusa(catetoA, catetoB);
        setHipotenusa(String(resposta));
        break;
      default:
        resposta = NaN;
        break;
    }
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            id="catetoA"
            placeholder="cateto A"
            style={styles.TextInput}
            value={catetoAInput}
            onChangeText={setCatetoA}
          />
          <TextInput
            id="catetoB"
            placeholder="cateto B"
            style={styles.TextInput}
            value={catetoBInput}
            onChangeText={setCatetoB}
          />
          <TextInput
            id="hipotenusa"
            placeholder="hipotenusa"
            style={styles.TextInput}
            value={hipotenusaInput}
            onChangeText={setHipotenusa}
          />
          <p id="resultado" />
          <button onClick={calcular}>Calcular</button>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
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
});
