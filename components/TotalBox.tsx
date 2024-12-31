import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function TotalBox({ total }: { total: number }) {
  return (
    <View style={styles.total}>
      <Text style={styles.totalText}>Total: </Text>
      <Text style={styles.totalMoney}>${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
    backgroundColor: Colors.boxLight,
    borderRadius: 8,
  },
  totalMoney: {
    fontWeight: "bold",
    color: Colors.background,
    fontSize: 16,
  },
  totalText: {
    color: Colors.background,
    fontSize: 16,
  },
});
