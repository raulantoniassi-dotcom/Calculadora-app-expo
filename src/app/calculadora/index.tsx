import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalculadoraScreen from "./calc";

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
    backgroundColor: "#0C141E",
  },

  heroSection: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: "#0C141E",
  },
});

export default function CalculadoraPitagoras() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <CalculadoraScreen />
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
