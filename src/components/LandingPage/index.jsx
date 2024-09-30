import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../NavBar";
import Heading from "../Heading";
import ScrollDown from "../ScrollDown";
import Feature from "../Feature";

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen  flex flex-col justify-between">
      <NavBar />
      <Heading />
      <ScrollDown />
    </div>
  );
}
