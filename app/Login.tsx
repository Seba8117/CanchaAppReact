import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";


export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"Jugador" | "Dueño">("Jugador");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log({ role, email, password });
  };

  const goRegister = () => {
    console.log("Ir a registro");
  };

  return (
    <LinearGradient
      colors={["#0aa57f", "#026e6f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.gradient}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.card}>
              {/* Logo */}
              <View style={styles.logoWrap}>
                <Image
                  source={require("@/assets/images/LogoCanchaApp.png")} 
                  style={styles.logo}
                  resizeMode="cover"
                />
              </View>

              {/* Títulos */}
              <Text style={styles.title}>Bienvenido a CanchaApp</Text>
              <Text style={styles.subtitle}>
                Encuentra y organiza partidos cerca de ti
              </Text>

              
              <View style={styles.toggleContainer} accessibilityRole="tablist">
                <Pressable
                  style={[
                    styles.toggleItem,
                    role === "Jugador" && styles.toggleItemActive,
                  ]}
                  onPress={() => setRole("Jugador")}
                  accessibilityRole="tab"
                  accessibilityState={{ selected: role === "Jugador" }}
                >
                  <Ionicons
                    name="person-outline"
                    size={16}
                    color={role === "Jugador" ? "#0a7" : "#667085"}
                    style={{ marginRight: 6 }}
                  />
                  <Text
                    style={[
                      styles.toggleText,
                      role === "Jugador" && styles.toggleTextActive,
                    ]}
                  >
                    Jugador
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.toggleItem,
                    role === "Dueño" && styles.toggleItemActive,
                  ]}
                  onPress={() => setRole("Dueño")}
                  accessibilityRole="tab"
                  accessibilityState={{ selected: role === "Dueño" }}
                >
                  <MaterialIcons
                    name="sports-soccer"
                    size={16}
                    color={role === "Dueño" ? "#0a7" : "#667085"}
                    style={{ marginRight: 6 }}
                  />
                  <Text
                    style={[
                      styles.toggleText,
                      role === "Dueño" && styles.toggleTextActive,
                    ]}
                  >
                    Dueño
                  </Text>
                </Pressable>
              </View>

              {/* Inputs */}
              <View style={{ width: "100%", marginTop: 10 }}>
                <TextInput
                  placeholder="Correo electrónico"
                  placeholderTextColor="#98A2B3"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Contraseña"
                  placeholderTextColor="#98A2B3"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />
              </View>

              {/* Botón */}
              <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>
                  {`Iniciar Sesión como ${role}`}
                </Text>
              </Pressable>

              {/* Registro */}
              <Pressable onPress={() => router.push("/Registro")}>
                    <Text style={styles.registerText}>
                    ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
                    </Text>
                </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const CARD_RADIUS = 14;
 {/* Estilos */}
const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingVertical: 24,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: CARD_RADIUS,
    paddingHorizontal: 18,
    paddingVertical: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    elevation: 8,
  },
  logoWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 10,
  },
  logo: { width: "100%", height: "100%" },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "#475467",
    marginTop: 6,
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F4F7",
    borderRadius: 999,
    padding: 4,
    gap: 6,
    marginTop: 16,
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  toggleItemActive: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  toggleText: {
    fontSize: 13,
    color: "#667085",
    fontWeight: "600",
  },
  toggleTextActive: { color: "#0a7" },
  input: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E7EC",
    paddingHorizontal: 12,
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#0f172a",
  },
  button: {
    backgroundColor: "#F6B100",
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 14,
  },
  buttonText: {
    color: "#1F2A37",
    fontWeight: "700",
  },
  registerText: {
    marginTop: 14,
    color: "#475467",
  },
  registerLink: {
    color: "#0a7",
    fontWeight: "700",
  },
});
