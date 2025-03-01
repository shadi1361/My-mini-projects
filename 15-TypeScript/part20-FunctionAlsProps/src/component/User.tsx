import React from "react";

function User(props: {
  name: string;
  age: number;
  hasChild: boolean;
  sum: (a:number , b:number) => number;
}) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>hasChild:{`${props.hasChild}`} </h2>
      <h2>sum {props.sum(3,5)}</h2>
    </div>
  );
}

export default User;
