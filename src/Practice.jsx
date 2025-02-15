import React from 'react'

export const Practice=()=> {
    const student = [];
    console.log(Boolean(student.length));
    console.log(student.length);
  return (
    <>
    {/* <h1>{student.length && "no student found"}</h1> */}
    {/* 1 st :  left true then go for right*/}
    {/* <h1>{student.length ===0&& "no student found"}</h1> */}
    {/* 2nd : use nor operator */}
    {/* <h1>{!student.length ===0&& "no student found"}</h1> */}
    
    {/* 3rd use boolean */}
    <h1>{Boolean(!student.length ===0)&& "no student found"}</h1>

    <h1>Number of Student:{student.length}</h1>
    {console.log(student.length && "no student found")}
    </>
    );
}


{/* Question 1:
     <>
<h1>{student.length && "no student found"}</h1>
<h1>Number of Student:{student.length}</h1>
</> */}

//go to source file of github
// and op check first left operand then right
// first right operand check gives 0 means false then do not go to right operand