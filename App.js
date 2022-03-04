import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  Modal,
} from "react-native";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import uuid from "react-native-uuid";

import { TaskItem } from "./components/TaskItem";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (newTask) => {
    setTaskList([...taskList, { id: uuid.v4(), title: newTask }]);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.appTitle}>Add Task Application</Text>
      <View style={styles.addTaskButton}>
        <Button title="Add New Task" onPress={() => setShowModal(true)} />
      </View>

      <Modal visible={showModal} animationType="slide">
        <AddTask addTask={addTask} modalState={handleModal} />
      </Modal>

      <View style={styles.listContainer}>
        <Text style={styles.taskListTitle}>
          {taskList.length !== 0 ? "Task List" : "There are no current tasks"}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} handleDeleteTask={deleteTask} />
        )}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    maxHeight: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  taskListTitle: {
    fontSize: 18,
    marginBottom: 18,
  },
  addTaskButton: {
    marginTop: 20,
  },
});
