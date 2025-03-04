import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

type Button = ComponentPropsWithRef<"button"> & {
  buttonTitle?: string;
};

function Button({ type, onChange, onClick, buttonTitle,ref }: Button) {
  return <button type={type}></button>;
}

export default Button;
