import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function HomeScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/Login");
  };

  return (
    <LinearGradient
      colors={["#0aa57f", "#026e6f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          ¡Bienvenido a CanchaApp!
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Encuentra y organiza partidos cerca de ti
        </ThemedText>

        <Pressable onPress={handleStart} style={styles.button}>
          <ThemedText style={styles.buttonText}>Comenzar</ThemedText>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "transparent", 
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    color: "#fff", 
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.9,
    marginBottom: 24,
    color: "#f0fdf4", 
  },
  button: {
    backgroundColor: "#F6B100",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: "#1F2A37",
    fontWeight: "700",
    fontSize: 16,
  },
});