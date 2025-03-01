//User2 === User in use

import React from "react";
type User = {
  name: string;
  age: number;
  hasChild: boolean;
  multiplication: (a: number, b: number) => number;
};

const User3: React.FC<User> = ({ name, age, hasChild, multiplication }) => {
  // <== Props in ARROW FUNCTION
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>hasChild:{`${hasChild}`} </h2>
      <h2>Multiplication: {multiplication(10, 5)}</h2>
    </div>
  );
};

export default User3;
