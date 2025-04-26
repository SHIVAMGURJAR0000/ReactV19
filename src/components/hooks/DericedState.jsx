import { useState } from "react";
export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  console.log(users.length);
  const userCount = users.length; // derived state it depend on state

  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((currelem, index) => {
          return (
            <>
              <li key={index + 1}>
                {currelem.name}-{currelem.age} years old
              </li>
            </>
          );
        })}
      </ul>
      <p>Total Users : {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};

// how many users we have?
// find out average user?
