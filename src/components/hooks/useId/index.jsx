import { useId } from "react";

export const UseId = () => {
  //   const usernameaId = useId(); // useId retuerns a unique id
  //   const emailId = useId();
  //   return (
  //     <form>
  //       <div>
  //         {/* <label htmlFor="username">UserName: </label>
  //         <input type="text" id="username" name="name" /> */}
  //         {/* // here we are using manual id
  //         // but here we can use useId hook to generate id */}
  //         <label htmlFor={usernameaId}>UserName: </label>
  //         <input type="text" id={usernameaId} name="name" />
  //       </div>
  //       <div>
  //         <label htmlFor={emailId}>Email:</label>
  //         <input type="email" id={emailId} name="email" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  //   what if we have many fields
  // This lets you avoid calling useId for every single element that needs a unique ID.
  // use when multiple forms are there

  const id = useId();
  return (
    <form>
      <div>
        <label htmlFor={id + "usernameaId"}>UserName: </label>
        <input type="text" id={id + "usernameaId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email:</label>
        <input type="email" id={id + "emailId"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
