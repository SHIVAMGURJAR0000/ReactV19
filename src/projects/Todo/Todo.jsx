import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //To check the input field empty or not
    if (!content) return;
    //To check if the data is already existing or not
    //here previous logic is work for arr.
    //now we have array of object.
    //so we cant ust this include method now
    // if (task.includes(inputValue.content)) return;

    //new way to check if the data is already existing or not

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;
    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);
  };

  //Todo HandleDeleteTodo
  const handleDeleteToDo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // Todo HandleClearTodo Data
  const handleClearToDoData = () => {
    setTask([]);
  };

  // handleChekedTodo
  const handleChedkedTodo = (content) => {
    const updatedTask = task.map((curtask) => {
      if (curtask.content === content) {
        return {
          ...curtask,
          checked: !curtask.checked,
        };
      } else {
        return curtask;
      }
    });
    setTask(updatedTask);
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
          {task.map((curTask) => {
            return (
              <TodoList
                Key={curTask.id}
                data={curTask.content}
                onHandleDeleteTodo={handleDeleteToDo}
                checked={curTask.checked}
                onHandleChedkedTodo={handleChedkedTodo}
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
