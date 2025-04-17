import React from "react";

type Props = {
  onClick?: () => void;
};

const HeartButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
      outline-none
      group
      transition-colors
    "
    >
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <circle
          cx="24"
          cy="24"
          r="23.25"
          strokeWidth="1.5"
          className="
          stroke-[#EAECF4]
          group-hover:stroke-[#8B8AFF]
          group-focus:stroke-[#3D1EFE]
          group-active:stroke-[#8B8AFF]
            transition-colors
          fill-[#FFFFFF]
          group-hover:fill-[#FFF]
          group-focus:fill-[#8B8AFF]
          group-active:fill-[#6851FF]
        "
        />
        <path
          d="M16.318 18.318C15.9002 18.7359 15.5687 19.232 15.3425 19.778C15.1164 20.3239 15 20.9091 15 21.5C15 22.091 15.1164 22.6762 15.3425 23.2221C15.5687 23.7681 15.9002 24.2642 16.318 24.682L24 32.364L31.682 24.682C32.526 23.8381 33.0001 22.6935 33.0001 21.5C33.0001 20.3066 32.526 19.162 31.682 18.318C30.8381 17.4741 29.6935 17 28.5 17C27.3066 17 26.162 17.4741 25.318 18.318L24 19.636L22.682 18.318C22.2642 17.9002 21.7681 17.5687 21.2221 17.3425C20.6762 17.1164 20.091 17 19.5 17C18.9091 17 18.3239 17.1164 17.778 17.3425C17.232 17.5687 16.7359 17.9002 16.318 18.318V18.318Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
          stroke-[#6851FF]
          group-hover:stroke-[#3D1EFE]
          group-focus:stroke-[#3D1EFE]
          group-active:stroke-[#FFFFFF]
          fill-[#FFF]
          group-hover:fill-[#FFF]
          group-focus:fill-[#8B8AFF]
          group-active:fill-[#6851FF]
          transition-colors
        "
        />
      </svg>
    </button>
  );
};

export default HeartButton;
