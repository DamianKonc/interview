import React from "react";
import { Props } from "./primaryButton.types";

function PrimaryButton({ onClickFunction, text, disabled }: Props) {
  return (
    <button
      onClick={onClickFunction}
      disabled={disabled}
      className="
    w-full h-[44px] 
    text-primary-button-text 
    border-solid border-2 border-transparent 
    rounded-buttons-primary-secondary  
    text-buttons-secondary-primary
    bg-primary-button-background-default  
    hover:bg-sky-700 
    focus-visible:bg-blue-600 focus-visible:border-primary-border-color 
    active:bg-primary-button-background-pressed 
    disabled:bg-primary-button-background-disable
    "
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
