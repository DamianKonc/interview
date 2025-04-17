import React from "react";
import { estatesData } from "../EstateCard/estatesData";
import EstateCard from "../EstateCard";
import Switcher from "../Switcher";

function HomePageEstateView() {
  return (
    <section className="flex flex-col items-center mt-[64px]">
      <Switcher />

      <h2>We make it easy for houses and apartments.</h2>
      <p>
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </p>
      <div className="overflow-x-auto w-full no-scrollbar">
        <div className="flex gap-1.5 w-max">
          {estatesData.map((el, index) => {
            const { address, period, name, imgUrl, cost } = el;
            return (
              <EstateCard
                key={index}
                type={"rent"}
                address={address}
                cost={cost}
                period={period}
                name={name}
                imgUrl={imgUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePageEstateView;
