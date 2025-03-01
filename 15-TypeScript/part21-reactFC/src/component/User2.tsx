//User2 === User in use

import React from "react";
type User = {
  name: string;
  age: number;
  hasChild: boolean;
  sum: (a: number, b: number) => number;
};

const User2: React.FC<User> = ({ name, age, hasChild, sum }) => {
  // <== Props in ARROW FUNCTION
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>hasChild:{`${hasChild}`} </h2>
      <h2>sum: {sum(5, 9)}</h2>
    </div>
  );
};

export default User2;
