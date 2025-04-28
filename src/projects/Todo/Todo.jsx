import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  //Todo HandleDeleteTodo
  const handleDeleteToDo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  // Todo HandleClearTodo Data
  const handleClearToDoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                Key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteToDo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearToDoData}>
        Clear All
      </section>
    </section>
  );
};
