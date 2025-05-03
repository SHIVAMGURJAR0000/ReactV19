//* Registration Form Using Multiple State Variables

//todo  Tasks:

//? Set up a functional component in React.
//? Create five separate state variables (firstName, lastName, email, password, phoneNumber).
//? Create input fields for each piece of information.
//? Implement onChange handlers to update state variables.
//? Discuss the benefits and drawbacks of this approach.

import "./index.css";
import { useState } from "react";

export const Registrationbestmethod = () => {
  //State Variable

  //   using only one state variable
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  //To get the data
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target;
    // value = e.target.value //already destructure

    // setUser((Kuchbhi) => console.log(Kuchbhi)); // see wht  its printing => give prev balue of state

    // setUser((prev) => ({ ...prev, name: value })); // ...prev store the  previous state name:value is the new data which will be added.
    //but we do not want new property so use dynamic variable => [name]
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={user.firstName} //controlled
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={user.lastName} //controlled
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={user.email} //controlled
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={user.password} //controlled
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phoneNumber" // it should be the same name we are using in state object
            placeholder="9876543211"
            required
            value={user.phoneNumber} //controlled
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            {user.firstName} {user.lastName}
          </span>
          . My email address is <span>{user.email}</span> and my phone number is
          <span>{user.phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};

// If we are using setState for inputfield value then we have to use onChnage function because of controlled state of form
