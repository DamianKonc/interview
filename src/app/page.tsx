"use client";
import HeartButton from "@/components/HeartIconButton";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Home() {
  return (
    <div>
      <div className="w-[220px] px-1 py-1 border border-red-500">
        <PrimaryButton
          onClickFunction={() => console.log("primary button")}
          text="Primary button"
        />
        <SecondaryButton
          onClickFunction={() => console.log("secondary button")}
          text="Secondary button"
        />
      </div>
      <HeartButton />
    </div>
  );
}
