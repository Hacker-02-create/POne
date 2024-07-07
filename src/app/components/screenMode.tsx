"use client";
import { useState } from "react";
import Image from "next/image";
import lightMode from "@/lib/light-mode.png";
import darkMode from "@/lib/dark-mode.png";

export default function ScreenMode() {
  const [mode, setMode] = useState(false);

  return (
    <div className="flex justify-center items-center absolute right-0 top-2">
      <Image
        src={mode === false ? lightMode : darkMode}
        alt="hi"
        onClick={() => setMode(!mode)}
        className={`transition-all duration-1000 ease-in-out transform ${
          mode ? "rotate-180 scale-110" : "rotate-0 scale-100"
        } text-white p-4 rounded-full h-16 w-24`}
      />
    </div>
  );
}
