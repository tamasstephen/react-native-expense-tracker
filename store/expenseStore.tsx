import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Expense } from "@/types/Expense";

interface ExpenseStore {
  currentExpense: Expense | null;
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  updateExpense: (id: string, updatedExpense: Partial<Expense>) => void;
  clearExpenses: () => void;
  setCurrentExpense: (expense: Expense | null) => void;
  clearCurrentExpense: () => void;
}

const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      currentExpense: null,
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({ expenses: [...state.expenses, expense] })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
      updateExpense: (id, updatedExpense) =>
        set((state) => ({
          expenses: state.expenses.map((expense) =>
            expense.id === id ? { ...expense, ...updatedExpense } : expense,
          ),
        })),
      clearExpenses: () => set({ expenses: [] }),
      setCurrentExpense: (expense) => set({ currentExpense: expense }),
      clearCurrentExpense: () => set({ currentExpense: null }),
    }),
    {
      name: "expense-store",
    },
  ),
);

export default useExpenseStore;
