import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Button, Platform, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


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


export default function PitagorasScreen() {
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

  const calcular = () => {
    const catetoA = catetoAInput === "" ? NaN : Number(catetoAInput);
    const catetoB = catetoBInput === "" ? NaN : Number(catetoBInput);
    const hipotenusa = hipotenusaInput === "" ? NaN : Number(hipotenusaInput);

    let resposta: number;

    switch (true) {
      case Number.isNaN(catetoA):
        resposta = calcularCatetoA(catetoB, hipotenusa);
        setCatetoA(String(resposta.toFixed(2)));
        break;
      case Number.isNaN(catetoB):
        resposta = calcularCatetoB(catetoA, hipotenusa);
        setCatetoB(String(resposta.toFixed(2)));
        break;
      case Number.isNaN(hipotenusa):
        resposta = calcularHipotenusa(catetoA, catetoB);
        setHipotenusa(String(resposta.toFixed(2)));
        break;
      default:
        resposta = NaN;
        break;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            className="pitagorasIndex"
            id="catetoA"
            placeholder="cateto A"
            style={styles.TextInput}
            value={catetoAInput}
            onChangeText={setCatetoA}
          />
          <TextInput
            className="pitagorasIndex"
            id="catetoB"
            placeholder="cateto B"
            style={styles.TextInput}
            value={catetoBInput}
            onChangeText={setCatetoB}
          />
          <TextInput
            className="pitagorasIndex"
            id="hipotenusa"
            placeholder="hipotenusa"
            style={styles.TextInput}
            value={hipotenusaInput}
            onChangeText={setHipotenusa}
          />

          <Button onPress={calcular} title="Calcular" />
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
