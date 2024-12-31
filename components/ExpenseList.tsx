import { View, StyleSheet, FlatList } from "react-native";
import TotalBox from "./TotalBox";
import ExpenseBox from "./ExpenseBox";
import { Expense } from "@/types/Expense";

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <View style={styles.container}>
      <TotalBox total={total} />
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseBox {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 32,
    marginBottom: 64,
    paddingHorizontal: 32,
    width: "100%",
    gap: 16,
  },
});
