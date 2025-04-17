"use client";
import Header from "@/components/Header";
import HeartButton from "@/components/HeartIconButton";
import HomePageEstateView from "@/components/HomePageEstateView";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePageEstateView />
      <HeartButton />
    </div>
  );
}
