// by using map method

import { useState } from "react";

// const Users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

// export const DerivedState = () => {
//   return (
//     <div className="main-div">
//       <h1>Users List</h1>
//       <ul>
//         {Users.map((currelem, index) => {
//           return (
//             <>
//               <li key={index}>
//                 {currelem.name}-{currelem.age} years old
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// by using hook
// const Users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
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
    </div>
  );
};
