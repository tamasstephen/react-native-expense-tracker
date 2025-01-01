import { View, StyleSheet, Pressable } from "react-native";

export default function IconButton({
  children,
  onPress,
  styles: _styles,
  disabled,
}: {
  children: React.ReactNode;
  onPress: () => void;
  styles?: Record<string, string | number>;
  disabled?: boolean;
}) {
  return (
    <Pressable
      android_ripple={{ color: "#f2f2f2" }}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        style={[styles.iconButton, _styles, { opacity: disabled ? 0.5 : 1 }]}
      >
        {children}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
});
