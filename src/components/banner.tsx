"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps {
    imageSrc: string;
    title: string;
}

export default function Banner({ imageSrc, title }: BannerProps) {
  const [bannerHeight, setBannerHeight] = useState("100vh");

  useEffect(() => {
    // Get the header height
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    // Calculate the banner height
    setBannerHeight(`calc(100vh - ${headerHeight}px)`);
  }, []);

  return (
    <div className="relative w-full" style={{ height: bannerHeight }}>
      <Image 
        src={imageSrc}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
        <h1 className="text-red-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  )
}
