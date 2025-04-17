"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { headerData } from "./fakeData";
import SingleMenuElement from "./SingleMenuElement";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="flex items-center justify-between border-b border-gray-400 py-[8px] px-[32px] lg:px-[64px]">
      <Link href="/">
        <Image src="/images/Logotype.png" alt="logo" width={160} height={32} />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {headerData.map((el, index) => (
                <SingleMenuElement key={index} url={el.url} text={el.text} />
              ))}
              <li className="w-[311px]">
                <SecondaryButton
                  onClickFunction={() => console.log("secondary button")}
                  text="Login"
                />
              </li>
              <li className="w-[311px]">
                <PrimaryButton
                  onClickFunction={() => console.log("primary button")}
                  text="Sign up"
                />
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex justify-center">
          {headerData.map((el, index) => (
            <SingleMenuElement key={index} url={el.url} text={el.text} />
          ))}
          <li className="w-[119px] self-center">
            <SecondaryButton
              onClickFunction={() => console.log("secondary button")}
              text="Login"
            />
          </li>
          <li className="w-[119px] self-center">
            <PrimaryButton
              onClickFunction={() => console.log("primary button")}
              text="Sign up"
            />
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </header>
  );
}

export default Header;
