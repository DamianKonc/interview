import React from "react";
import Link from "next/link";
import { Props } from "./SingleDesktopElemet.types";

function SingleMenuElement({ url, text }: Props) {
  return (
    <li className="flex justify-center align-middle">
      <Link className="flex justify-center items-center" href={url}>
        {text}
      </Link>
    </li>
  );
}

export default SingleMenuElement;
