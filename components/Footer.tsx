import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ButtonTwo } from './ui/moving-border';
import { AnimatedTooltip } from './ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: "Sarim Khan",
    designation: "FrontEnd and Backend Developer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Adnan Nizami",
    designation: "FrontEnd and Backend Developer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Arpit Kandwal",
    designation: "FrontEnd and Backend Developer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Akshat Singh",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  }
];
const Footer = () => {
  return (
    <section className=" bottom-0 w-full bg-gray-800 text-white py-4 text-center">
       <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Connect Up"
          className="max-sm:size-10"
        />
        <p className="text-[16px] text-white font-extrabold max-sm:text-[10px]">
          TeamWave
        </p>
        
      </Link>      
      <div className='flex box-border h-1 w-80 text-black p-4 max-sm:w-24'>
      <p className='text-white font-semibold max-sm:text-[5px]'> Subscribe for the Newslater</p>
        </div>
     
 
      <div className='flex box-border h-14 w-48 text-black p-4 max-sm:w-24'>
          <Input/>
         <Button/>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full max-sm:hidden">
        
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full max-sm:hidden">
        
      <p className='text-white '>@2024-All rights reserved</p>
      </div>
      
    </section>
  );
};

export default Footer;


