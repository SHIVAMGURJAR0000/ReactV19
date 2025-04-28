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

  //when we are using timeInterval then state is channging every 1 sec means this component will re-render after every one second.
  // so clear time interval every time and we should clear it to avoid memory leak.
  // (This is why we use useEffect with a cleanup function.)
  // this hey will run on every render
  console.log("Hey");

  //todo Date and Time
  const getDateTime = () => {
    // Without useState we get error we can't access fromattedDate and formatted time
    //because they are not constant
    // because otherwise the values would reset on every render.
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  };

  //Run after every one second

  // const interval = setInterval(() => {
  //   getDateTime();
  // }, 1000);

  //using useEffect React function to avoid memory leak.
  useEffect(() => {
    const interval = setInterval(() => {
      getDateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
