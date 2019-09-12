import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
const { width } = Dimensions.get("window");

class TodoInput extends Component {
  state = {};
  render() {
    return (
      <View style={styles.full}>
        <TextInput
          value={this.props.todoInput}
          onChangeText={this.props.onTodoInput}
          placeholder="enter new task"
          style={styles.input}
          maxLength={40}
        />
        <TouchableOpacity onPress={this.props.onAddTodo} style={styles.button}>
          <Text style={{ color: "#fff", fontSize: 40 }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TodoInput;

const styles = StyleSheet.create({
  full: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10
  },
  input: {
    borderColor: "#bec2cb",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width * 0.7,
    marginRight: 10
  },
  button: {
    width: width * 0.2,
    borderRadius: 50,
    backgroundColor: "silver",
    alignItems: "center"
  }
});
