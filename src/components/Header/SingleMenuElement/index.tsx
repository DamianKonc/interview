import React from "react";
import Link from "next/link";
import { Props } from "./SingleDesktopElemet.types";

function SingleMenuElement({ url, text }: Props) {
  return (
    <li className="border-b border-gray-400 my-8 uppercase">
      <Link href={url}>{text}</Link>
    </li>
  );
}

export default SingleMenuElement;
