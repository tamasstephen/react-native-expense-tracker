import useExpenseStore from "@/store/expenseStore";
import { useModal } from "@/store/modalStore";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

export default function ManageExpenseModal() {
  const { isOpen, onClose } = useModal();
  const { clearCurrentExpense } = useExpenseStore();

  const closeModal = () => {
    clearCurrentExpense();
    onClose();
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.container}>
        <Text>ManageExpenseModal</Text>
        <Button title="Close" onPress={closeModal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
