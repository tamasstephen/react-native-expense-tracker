import AppView from "@/components/AppView";
import ExpenseList from "@/components/ExpenseList";
import { dummyData } from "@/data/dummyData";

export default function TabTwoScreen() {
  return (
    <AppView>
      <ExpenseList expenses={dummyData} />
    </AppView>
  );
}
