import React from "react";

interface Props {
  fill?: boolean;
  outlined?: boolean;
  negative?: boolean;
  disabled?: boolean;
  snug?: boolean;
  type?: "button" | "submit" | "reset";
  onclick: () => void;
  children: React.ReactNode;
}

const SkButton: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type}
      onClick={!props.disabled ? props.onclick : () => {}}
      className={`text-center ${
        props.snug ? "text-sm px-6 py-3" : "text-base px-8 py-3"
      } ${props.fill && "w-full"} cursor-pointer rounded-full font-sk ${
        props.outlined
          ? "border " +
            (props.negative
              ? "border-sk-bg text-sk-bg"
              : "border-sk-fg text-sk-fg")
          : "bg-sk text-sk-bg"
      }
        ${props.disabled && "opacity-30 pointer-events-none"}`}
    >
      {props.children}
    </button>
  );
};

export default SkButton;