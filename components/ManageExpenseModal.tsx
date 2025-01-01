import useExpenseStore from "@/store/expenseStore";
import { useModal } from "@/store/modalStore";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import IconButton from "./IconButton";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function ManageExpenseModal() {
  const { isOpen, onClose } = useModal();
  const { clearCurrentExpense, currentExpense, removeExpense, addExpense } =
    useExpenseStore();
  const [date, setDate] = useState(dayjs(currentExpense?.date) || dayjs());
  const [amount, setAmount] = useState(currentExpense?.amount || 0);
  const [title, setTitle] = useState(currentExpense?.title || "");

  useEffect(() => {
    console.log("date: ", date);
  }, [date]);

  const closeModal = () => {
    clearCurrentExpense();
    onClose();
  };

  const deleteExpense = () => {
    if (currentExpense) {
      removeExpense(currentExpense.id);
      closeModal();
    }
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text>ManageExpenseModal</Text>
          <View style={styles.inputContainer}>
            <Text>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              inputMode="text"
              defaultValue={currentExpense?.title || ""}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              inputMode="decimal"
              defaultValue={currentExpense?.amount?.toString() || "0.00"}
              onChangeText={(value) => {
                const amount = parseFloat(value);
                if (isNaN(amount)) {
                  // TODO: handle invalid input
                  return;
                }
                setAmount(amount);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <DateTimePicker
              mode="single"
              date={date}
              onChange={(params) => setDate(dayjs(params.date))}
            />
          </View>
          <IconButton
            onPress={deleteExpense}
            styles={{
              borderColor: "red",
              borderRadious: 8,
              borderStyle: "solid",
              borderWidth: 1,
            }}
            disabled={!currentExpense}
          >
            <Ionicons name="trash-outline" color="red" size={24} />
          </IconButton>
          <Button
            title="Save"
            onPress={() =>
              addExpense({
                title,
                amount,
                date: dayjs(date).toString(),
                id: currentExpense?.id || Date.now().toString(),
              })
            }
            disabled={!title || !amount}
          />
          <Button title="Cancel" onPress={closeModal} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    marginTop: 40,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 16,
    alignItems: "stretch",
    width: 200,
    marginBottom: 16,
  },
  input: {
    marginTop: 8,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
