import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    todos: [{ data: "Food at 9pm", completed: false }],
    todoInput: ""
  };

  onTodoInput = e => {
    this.setState({ todoInput: e });
  };

  onAddTodo = () => {
    const todoItem = {
      data: this.state.todoInput,
      completed: false
    };
    const todos = [...this.state.todos];
    todos.push(todoItem);
    this.setState({ todos, todoInput: "" });
  };

  onDeleteTodo = i => {
    const todos = [...this.state.todos];
    const newTodos = todos.filter((item, index) => index !== i);
    this.setState({ todos: newTodos });
  };

  onCompleteTodo = i => {
    const todos = [...this.state.todos];
    todos[i].completed = !todos[i].completed;
    this.setState({ todos });
  };

  render() {
    return (
      <View>
        <StatusBar hidden />
        <TodoInput
          todoInput={this.state.todoInput}
          onTodoInput={this.onTodoInput}
          onAddTodo={this.onAddTodo}
        />

        <TodoList
          todos={this.state.todos}
          onCompleteTodo={this.onCompleteTodo}
          onDeleteTodo={this.onDeleteTodo}
        />
      </View>
    );
  }
}

export default App;
