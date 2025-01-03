import AppView from "@/components/AppView";
import ExpenseList from "@/components/ExpenseList";
import useExpenseStore from "@/store/expenseStore";

export default function HomeScreen() {
  const { expenses } = useExpenseStore();
  return (
    <AppView>
      <ExpenseList expenses={expenses} />
    </AppView>
  );
}
