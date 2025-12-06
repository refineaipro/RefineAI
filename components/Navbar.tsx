"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-black flex justify-center">
      <Image 
        src="/refineailogo.jpg" 
        alt="Refine AI Logo"
        width={230}
        height={45}
        className="object-contain"
      />
    </nav>
  );
}
