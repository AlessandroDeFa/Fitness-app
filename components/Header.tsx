import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 90 : 60,
  },
  spacingTitle: {
    marginTop: 20,
  },
  spacingText: {
    marginTop: 35,
  },
  spacingButton: {
    marginTop: 16,
  },
  fontTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  fontText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  buttonText: {
    color: "#3B82F7",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1C1C1E",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
});

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spacingTitle}>
        <Text style={styles.fontTitle}>Crea la tua scheda di allenamento</Text>
      </View>
      <View style={styles.spacingText}>
        <Text style={styles.fontText}>Avvio rapido</Text>
      </View>
      <View style={styles.spacingButton}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Crea scheda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
