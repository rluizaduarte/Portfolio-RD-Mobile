import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { cores } from "@/constants/theme";

export default function FundoAnimado() {
  const giro = useRef(new Animated.Value(0)).current;
  const pulso = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(giro, {
        toValue: 1,
        duration: 24000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulso, { toValue: 1, duration: 1600, useNativeDriver: true }),
        Animated.timing(pulso, { toValue: 0, duration: 1600, useNativeDriver: true }),
      ])
    ).start();
  }, [giro, pulso]);

  const rotacao = giro.interpolate({ inputRange: [0, 1], outputRange: ["45deg", "405deg"] });
  const rotacaoInversa = giro.interpolate({ inputRange: [0, 1], outputRange: ["405deg", "45deg"] });
  const escala = pulso.interpolate({ inputRange: [0, 1], outputRange: [1, 1.8] });
  const opacidade = pulso.interpolate({ inputRange: [0, 1], outputRange: [0.9, 0.25] });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.quadrado, styles.grande, { transform: [{ rotate: rotacao }] }]} />
      <Animated.View style={[styles.quadrado, styles.medio, { transform: [{ rotate: rotacaoInversa }] }]} />
      <Animated.View
        style={[styles.ponto, styles.ponto1, { opacity: opacidade, transform: [{ scale: escala }] }]}
      />
      <Animated.View
        style={[styles.ponto, styles.ponto2, { opacity: opacidade, transform: [{ scale: escala }] }]}
      />
      <Animated.View
        style={[styles.ponto, styles.ponto3, { opacity: opacidade, transform: [{ scale: escala }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    pointerEvents: "none",
  },
  quadrado: {
    position: "absolute",
    top: 40,
    borderWidth: 1.5,
    borderRadius: 70,
  },
  grande: {
    width: 420,
    height: 420,
    borderColor: "rgba(255,255,255,0.08)",
  },
  medio: {
    top: 110,
    width: 280,
    height: 280,
    borderColor: "rgba(244,103,55,0.22)",
  },
  ponto: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: cores.laranja,
  },
  ponto1: {
    top: 90,
    right: 50,
  },
  ponto2: {
    top: 330,
    left: 36,
    backgroundColor: "#945DD6",
  },
  ponto3: {
    top: 520,
    right: 80,
    backgroundColor: "#13ADC7",
  },
});
