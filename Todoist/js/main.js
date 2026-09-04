"use strict";

const todoKeys = {
  id: "id",
  text: "TEXT",
  is_completed: "isCOMPLETED",
};

const todos = [];

const newTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: newTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(`Мы не нашли ${todoId} ID`);
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoItem = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todoItem === undefined) {
    console.error(`Мы не нашли ${todoId} ID`);
    return null;
  }
  todos.splice(todoItem, 1);
  return todos;
};
