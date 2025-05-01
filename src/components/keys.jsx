import { useState } from "react";
import "../projects/Todo/Todo.css";
import { MdDeleteForever } from "react-icons/md";

export const Keys = () => {
  const [task, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // return if todoInputValue is empty
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    // setTasks can take either a new state value or a function. When it takes a function, React passes the current state (the previous state) as an argument to this function.
    setTasks((prevTasks) => [inputValue, ...prevTasks]); // add text before the last one
    // setTasks((prevTasks) => [ ...prevTasks,inputValue]);
    setInputValue("");
  };

  console.log(task);

  //todo  Add Date features also
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List </h1>
      </header>
      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>
      <section className="myUnOderList">
        <ul className="todo-list">
          {
            //this will solve problem because of having id
            //   task.map((curTask, index) => {
            //     return <TodoLists key={index} data={curTask} />;

            //cause problem test it
            task.map((curTask, index) => {
              return <TodoLists key={index} data={curTask} />;
            })
          }
        </ul>
      </section>
    </section>
  );
};

const TodoLists = ({ data }) => {
  return (
    <li className="todo-item">
      <span> {data} </span>
      <input type="text" />
      {/* <button>
        <MdCheck className="check-btn" />
      </button> */}
      <button>
        <MdDeleteForever className="delete-btn" />
      </button>
    </li>
  );
};

//scenereo
// we have todo list
// if we enter something in todo list then it show on the page.
//lets say you enter mango after that apple then it will show on page.
//example : 1) mango
//  2) apple
//there will be text field with each chip .
// when we enter something in the chip it should stay with the chip.
// but problem is that when we again create new chip it come at the top.
//And also the top chip will get the last chip text field content.

//why this happen
//because of keys

// theory

// when we add element at the last then it work fine '
// lets say you have two li the 1st will get id=1, and 2nd will get id = 2.
// now adding third li it will get id = 3 . but we are adding it at the last. that/s why its working
// what if we are adding at the top?
/*  li id = 1 // newly add  
    li id = 2 // which was the 1st li now its second  before adding new li id was 1
    li id = 3// which was the second li now its third before adding new li at the top id was 2
*/

/// Here what is happening when add newli at the top
//key of index 1 and 2 is remain as it is react update the text
// and at the last it append the new element with id = 3, with the text (which was second number text)

// soo lets say you have data assoxiated with first li after adding new li it associated with it because recat think its just update d it text no nrew elem
// read slides
