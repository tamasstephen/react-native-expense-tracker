import { SafeAreaView, StyleSheet } from "react-native";

export default function AppView({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
