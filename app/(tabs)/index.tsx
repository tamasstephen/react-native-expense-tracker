import AppView from "@/components/AppView";
import ExpenseList from "@/components/ExpenseList";
import { dummyData } from "@/data/dummyData";

export default function HomeScreen() {
  const recentExpenses = dummyData.slice(0, 5);
  return (
    <AppView>
      <ExpenseList expenses={recentExpenses} />
    </AppView>
  );
}
