import React from "react";
import { Props } from "./secondaryButton.types";

function SecondaryButton({ onClickFunction, text, disabled }: Props) {
  return (
    <button
      onClick={onClickFunction}
      disabled={disabled}
      className="
    w-full h-[44px] 
    border-solid border-2 border-secondary-button-border-default
    rounded-buttons-primary-secondary
    text-buttons-secondary-primary
    focus-visible:border-secondary-button-border-focus focus-visible:text-secondary-button-font-focus
    active:border-secondary-button-border-pressed active:text-secondary-button-font-pressed
    disabled:border-secondary-button-border-disable disabled:text-secondary-button-font-disable
    "
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
