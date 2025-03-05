import React from 'react';
import Image from 'next/image';
import { Sigmar } from 'next/font/google';

const sigmar = Sigmar({ weight: '400', subsets: ['latin'] });

import GroupPhoto from '../public/bitcoiners-1.svg';
import PresentationSVG from '../public/bitcoiners-5.svg';
import BusinessCardsSVG from '../public/bitcoiners-2.svg';
import PlantCeremony from '../public/bitcoiners-3.svg';
import TeamPhotoOne from '../public/bitcoiners-4.svg';
import TeamPhotoTwo from '../public/bitcoiners-6.svg';

const BitcoinersPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10 opacity-20">
        <Image 
          src={TeamPhotoTwo} 
          alt="Background Team Photo" 
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay text - increased z-index to 30 */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className={`text-center ${sigmar.className} font-light leading-tight`}>
          <h1 className="text-5xl md:text-7xl tracking-normal">
            <span className="text-gray-300">BY</span>
            <a href="/by-bitcoiners" className="text-yellow-500 pointer-events-auto hover:text-yellow-400 block mt-1">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">THE</span>&nbsp;<span className="font-light">BITCOINERS</span>
            </a>
          </h1>
          <h2 className="text-3xl md:text-5xl tracking-normal mt-2">
            <span className="text-gray-300">FOR</span>
            <a href="/for-bitcoiners" className="text-yellow-500 pointer-events-auto hover:text-yellow-400 block mt-1">
              <span className="font-bold">THE</span>&nbsp;<span className="font-light">BITCOINERS</span>
            </a>
          </h2>
        </div>
      </div>

      {/* Image Grid - decreased z-index to 20 */}
      <div className="absolute inset-0 z-20 grid grid-cols-[1fr_0.3fr_1fr] grid-rows-3 gap-2">
        {/* Top Left Large Group Photo */}
        <div className="col-span-2 row-span-2 relative w-[491px] h-[242px]">
          <Image 
            src={GroupPhoto} 
            alt="Group Photo" 
            width={491}
            height={242}
            priority
          />
        </div>

        {/* Presentation - now in top right */}
        <div className="absolute top-0 right-0 z-10">
          <Image 
            src={PresentationSVG} 
            alt="presentation" 
            width={350}
            height={288}
            priority
            className="object-contain"
          />
        </div>

        {/* Business Card */}
        <div className="col-span-2 row-span-2 relative w-[491px] h-[242px]">
          <Image 
            src={BusinessCardsSVG} 
            alt="Business Card" 
            width={318}
            height={179}
            priority
            // className="transform hover:scale-105 transition-transform object-cover"
          />
        </div>

        {/* Plant */}
        <div className="col-span-2 row-span-2 relative w-full h-[242px] pl-80">
          <Image 
            src={PlantCeremony} 
            alt="Plant Ceremony" 
            width={330}
            height={272}
            priority
            className="object-contain"
          />
        </div>

        {/* Team Photos */}
        <div className="col-span-1 relative h-[242px] flex justify-end pt-0">
          <Image 
            src={TeamPhotoOne} 
            alt="Team Photo 1" 
            width={330}
            height={242}
            priority
            className="object-contain"
          />
        </div>
        {/* <div className="col-span-1 relative">
          <Image 
            src={TeamPhotoTwo} 
            alt="Team Photo 2" 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="transform hover:scale-105 transition-transform object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BitcoinersPage;