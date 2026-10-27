import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PitagorasScreen from "./pitagoras";

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

  title: {
    textAlign: "center",
    color: "#E7F1F7",
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  code: {
    textTransform: "uppercase",
    color: "#C6B17D",
    letterSpacing: 1.5,
  },

  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: 20,
    backgroundColor: "#152333",
    borderWidth: 1,
    borderColor: "#354D60",
  },

  TextInput: {
    width: "100%",
    maxWidth: 560,
    minHeight: 58,
    backgroundColor: "#152333",
    borderWidth: 1,
    borderColor: "#40586B",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 15,
    color: "#E7F1F7",
    fontSize: 16,
  },

  iframe: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderWidth: 0,
  },
});

export default function CalculadoraPitagoras() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <PitagorasScreen />
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
