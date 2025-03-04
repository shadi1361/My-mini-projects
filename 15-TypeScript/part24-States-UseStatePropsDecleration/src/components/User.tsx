import React from "react";

type User = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}


function User({value, onChange}: User){
  return <div>{value}</div>;
}

export default User;
