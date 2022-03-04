import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const TaskItem = ({ item, handleDeleteTask }) => {
  return (
    <TouchableOpacity
      key={item.id}
      onLongPress={() => handleDeleteTask(item.id)}
    >
      <View style={styles.singleTaskBorder}>
        <Text style={styles.singleTaskText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singleTaskBorder: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 7,
    minWidth: "80%",
    maxWidth: "80%",
    alignSelf: "center",
  },
  singleTaskText: {
    fontSize: 18,
    padding: 8,
    textAlign: "center",
  },
});
