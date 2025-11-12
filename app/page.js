'use client';
import Navbar from "./components/Navbar.jsx";
import { Hero } from "./components/Hero";
import OppoScroll from "./components/OppoScroll";
import { Leva } from "leva";
import { cardContent } from "./lib/resources";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leva hidden />

      {/* What We Do Section */}
      <OppoScroll items={cardContent} />
    </>
  );
}
