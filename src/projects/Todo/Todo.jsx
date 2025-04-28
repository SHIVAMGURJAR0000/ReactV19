import { useState, useEffect } from "react";
import "./Todo.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    //spread operator [...]
    setTask((prevTask) => [...prevTask, inputValue]);
    console.log(task);
    setInputValue("");
  };

  // console.log("Hey");

  //todo Date and Time
  const getDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // This code is written by me.
  //In this we are deleting the element of the array.
  // lets say we have arr = ["mango", "apple"].
  // delete arr[0] // mango element will be deleted
  // arr = [undefined, "apple"];
  // so this didnt work here.
  // const handleDelete = (index) => {
  //   console.log(task);

  //   console.log(task[index]);
  //   delete task[index];
  //   task;
  // };

  // working done by me manual method
  // const handleDelete = (index) => {
  //   let givenword = task[index];
  //   for (let i = 0; i < task.length - 1; i++) {
  //     if (task[i] == givenword) {
  //       task[i] = task[i + 1];
  //     }
  //   }
  //   task.pop();
  //   setTask([...task]);
  // };

  //todo handleDeleteToDO

  const handleDeleteToDo = (value) => {
    console.log(task);
    console.log(value);
    //filter return the value which satisfy the defined condition
    // example arr = ["apple", "mango", "pine"];
    // value = "mango"
    // filter((curTask) => curTask === value;
    // return new array arrnew = ["mango"];  // new array formed
    // so use curTask !== value;
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  // todo handleClearToDoData

  const handleClearToDoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input text-black"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <FaCheckCircle />
                </button>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    handleDeleteToDo(curTask);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </li>
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
