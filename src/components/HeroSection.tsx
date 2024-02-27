'use client'
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

export default function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Sourabh Dubey</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">"Hey, I'm the AI Machine Learning maestro, orchestrating data symphonies and fine-tuning algorithms with precision. When I'm not decoding datasets, I'm crafting digital solutions faster than you can say 'binary brilliance.' Let's embark on an epic journey through the realms of AI together!"</p>
        <div className='mt-4'>
          <a href="https://drive.google.com/file/d/1bk6XAxhC1SvE6pVoCzjqAfghIu6pYX60/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Download resume
                    </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
