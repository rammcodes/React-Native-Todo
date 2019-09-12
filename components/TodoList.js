import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
const { width } = Dimensions.get("window");

class TodoList extends Component {
  state = {};
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.todos.map((todo, i) => (
            <View style={styles.full} key={i}>
              {todo.completed ? (
                <Text
                  onPress={() => this.props.onCompleteTodo(i)}
                  style={[styles.todoItem, styles.completed]}
                >
                  {todo.data}
                </Text>
              ) : (
                <Text
                  onPress={() => this.props.onCompleteTodo(i)}
                  style={styles.todoItem}
                >
                  {todo.data}
                </Text>
              )}
              <TouchableOpacity
                onPress={() => this.props.onDeleteTodo(i)}
                style={styles.button}
              >
                <Text style={{ color: "silver", fontSize: 40 }}>-</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default TodoList;

const styles = StyleSheet.create({
  full: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10
  },
  todoItem: {
    borderColor: "#bec2cb",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: width * 0.7,
    backgroundColor: "silver",
    color: "#fff",
    marginRight: 10
  },
  completed: {
    backgroundColor: "green"
  },
  button: {
    width: width * 0.2,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "silver",
    borderWidth: 1
  }
});
