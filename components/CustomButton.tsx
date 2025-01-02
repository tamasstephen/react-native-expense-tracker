import { View, Pressable, StyleSheet } from "react-native";

export default function CustomButton({
  children,
  onClick,
  styles: propStyles,
  isDisabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  styles?: Record<string, string | number>;
  isDisabled?: boolean;
}) {
  return (
    <Pressable
      android_ripple={{ color: "#f2f2f2" }}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1, borderRadius: 8 },
        propStyles,
      ]}
      onPress={onClick}
      disabled={isDisabled}
    >
      <View style={[styles.container]}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
