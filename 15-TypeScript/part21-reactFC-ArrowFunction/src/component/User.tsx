//User === User2 in use

import React from "react";
type User = {
  name: string;
  age: number;
  hasChild: boolean;
  sum: (a: number, b: number) => number;
};

//These two codes below sind exactly the same :
//1- const User: React.FC<User> = ({ name, age, hasChild, sum }) =>

//2-
function User({ name, age, hasChild, sum }: User) { // <== Props in NORMAL FUNCTION
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>hasChild:{`${hasChild}`} </h2>
      <h2>sum: {sum(3, 5)}</h2>
    </div>
  );
}

export default User;
