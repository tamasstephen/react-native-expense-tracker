import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import { useModal } from "@/store/modalStore";
import { Expense } from "@/types/Expense";
import { useEffect } from "react";
import useExpenseStore from "@/store/expenseStore";
import dayjs from "dayjs";

export default function ExpenseBox({ title, date, amount, id }: Expense) {
  const { onOpen } = useModal();
  const { setCurrentExpense, clearCurrentExpense } = useExpenseStore();

  useEffect(() => {
    return () => {
      clearCurrentExpense();
    };
  }, [clearCurrentExpense]);

  return (
    <Pressable
      onPress={() => {
        setCurrentExpense({ title, date, amount, id });
        onOpen();
      }}
      style={({ pressed }) => [styles.wrapper, pressed && { opacity: 0.5 }]}
      android_ripple={{ color: "#f2f2f2" }}
    >
      <View style={styles.container}>
        <View style={styles.expenseData}>
          <Text style={styles.expenseText}>{title}</Text>
          <Text style={styles.dateText}>
            {dayjs(date).format("MMM DD, YYYY")}
          </Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary800,
    borderRadius: 8,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  expenseText: {
    fontWeight: "bold",
    color: "white",
  },
  dateText: {
    color: "#f2f2f2" + "90",
    fontSize: 12,
  },
  expenseData: {
    gap: 8,
  },
  amount: {
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  amountText: {
    fontWeight: "bold",
    color: Colors.background,
  },
});
