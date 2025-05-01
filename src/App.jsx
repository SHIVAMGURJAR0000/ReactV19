import React from "react";
import { Keys } from "./components/keys";

export const App = () => {
  return (
    //Short circuit evalutaion in react js
    //code writing is remaining
    <section>
      <Keys />
    </section>
  );
};

// short circuit is a technique used in js where expression are evaluated from left to right
//logical or
//expr1 ||expr 2
// ex: result = false || "hello" // hello
//  result = true||"world"  //true

//and
// ex : exp1 = true&&"hello"//hello
// exp2= fasle&&"world" //false

// NUllish Coalescing(??)

// synatx  expr1??exp2

// result = null??"hello" // hello

// result = undefined??"world" // world

// result = ''??"Fallback" //''
