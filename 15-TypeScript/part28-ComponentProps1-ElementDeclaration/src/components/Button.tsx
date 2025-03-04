import React, { ComponentProps } from "react";

type Button = ComponentProps<"button"> & {
  buttonTitle?: string;
};

function Button({ type, onChange, onClick, buttonTitle }: Button) {
  return <button type={type}></button>;
}

export default Button;
