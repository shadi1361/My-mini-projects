import React from "react";

/* type User = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

===
*/

interface IUser{
  value:string;
  onChange:React.Dispatch<React.SetStateAction<string>>;
}

function IUser({value, onChange}: IUser){
  return <div>{value}</div>;
}

export default IUser;
