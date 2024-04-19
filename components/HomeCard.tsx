"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  description,
  handleClick,
  img,
  title,
}: Props) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] cursor-pointer rounded-[14px]",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="Add Meeting" width={26} height={26} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
