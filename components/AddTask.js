import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Keyboard } from "react-native";

export const AddTask = ({ addTask, modalState }) => {
  const [newTask, setNewTask] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Add new task"
        onChangeText={(newTask) => {
          setNewTask(newTask);
        }}
        value={newTask}
      />
      <View style={styles.inputButton}>
        <Button
          title="Add"
          onPress={() => {
            if (newTask.length !== 0) {
              addTask(newTask);
              setNewTask("");
              modalState();
              Keyboard.dismiss();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "80%",
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  inputField: {
    width: "70%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 7,
  },
  inputButton: {
    width: "20%",
  },
});
