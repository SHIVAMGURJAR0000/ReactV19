// import { useState } from "react";

// export const UseEffectChanllenge = () => {
//   const [count, setCount] = useState(0);

//   const [increnum, setIncreNum] = useState(0);
//   return (
//     <div
//       className="container"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//       }}
//     >
//       <h1>useState Hook!</h1>
//       <br />
//       <p>count : {count}</p>
//       <br />
//       <div>
//         step:{" "}
//         <input
//           type="number"
//           style={{
//             border: "1px solid",
//           }}
//           value={increnum}
//           placeholder="Enter a number"
//           onChange={(event) => {
//             setIncreNum(Number(event.target.value));
//           }}
//         />
//       </div>
//       <br />
//       <section
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "3rem",
//         }}
//       >
//         <button
//           style={{
//             borderRadius: "0.2rem",
//             // padding: "0.6rem, 0",
//             cursor: "pointer",
//             backgroundColor: "rgb(4,4,4)",
//             color: "#fff",
//             padding: "2px",
//           }}
//           onClick={() => setCount(count + increnum)}
//         >
//           Increment
//         </button>
//         <button
//           style={{
//             borderRadius: "0.2rem",
//             // padding: "0.6rem, 0",
//             cursor: "pointer",
//             backgroundColor: "rgb(4,4,4)",
//             color: "#fff",
//             padding: "2px",
//           }}
//           onClick={() => setCount(count - increnum)}
//         >
//           decrement
//         </button>
//         <button
//           style={{
//             borderRadius: "0.2rem",
//             // padding: "0.6rem, 0",
//             cursor: "pointer",
//             backgroundColor: "rgb(4,4,4)",
//             color: "#fff",
//             padding: "2px",
//           }}
//           onClick={() => setCount(0)}
//         >
//           Reset
//         </button>
//       </section>
//     </div>
//   );
// };

import { useState } from "react";

export const UseEffectChanllenge = () => {
  const [count, setCount] = useState(0);
  const [increnum, setIncreNum] = useState("");

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>useState Hook!</h1>
      <br />
      <p>count : {count}</p>
      <br />
      <div>
        step:{" "}
        <input
          type="number"
          style={{
            border: "1px solid",
          }}
          value={increnum}
          placeholder="Enter a number"
          onChange={(event) => {
            setIncreNum(Number(event.target.value));
          }}
        />
      </div>
      <br />
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <button
          style={{
            borderRadius: "0.2rem",
            cursor: "pointer",
            backgroundColor: "rgb(4,4,4)",
            color: "#fff",
            padding: "2px",
          }}
          onClick={() => setCount(count + increnum)}
          disabled={count >= 100}
        >
          Increment
        </button>

        <button
          style={{
            borderRadius: "0.2rem",
            cursor: "pointer",
            backgroundColor: "rgb(4,4,4)",
            color: "#fff",
            padding: "2px",
          }}
          onClick={() => setCount(count - increnum)}
          disabled={count <= 0}
        >
          decrement
        </button>

        <button
          style={{
            borderRadius: "0.2rem",
            cursor: "pointer",
            backgroundColor: "rgb(4,4,4)",
            color: "#fff",
            padding: "2px",
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>
    </div>
  );
};
