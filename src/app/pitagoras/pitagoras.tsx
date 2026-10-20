import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Button, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




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
    paddingBottom: BottomTabInset + Spacing.three,
    alignItems: "stretch",
    justifyContent: "center",
    gap: 24,
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
    const catetoA = catetoAInput === "" ? NaN : Number(catetoAInput);
    const catetoB = catetoBInput === "" ? NaN : Number(catetoBInput);
    const hipotenusa = hipotenusaInput === "" ? NaN : Number(hipotenusaInput);
    
    let resposta: number;

    switch (true) {
      case Number.isNaN(catetoA):
        resposta = calcularCatetoA(catetoB, hipotenusa);
        setResultado(String(resposta.toFixed(2)));
        break;
      case Number.isNaN(catetoB):
        resposta = calcularCatetoB(catetoA, hipotenusa);
        setResultado(String(resposta.toFixed(2)));
        break;
      case Number.isNaN(hipotenusa):
        resposta = calcularHipotenusa(catetoA, catetoB);
        setResultado(String(resposta.toFixed(2)));
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
