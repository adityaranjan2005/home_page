import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Social Media Icons (you can replace these with actual SVG imports)
import XIcon from '../public/x-icon.svg';
import LinkedInIcon from '../public/linkedin-icon.svg';

// Team Member Photos (you'll need to import actual photos)
import KaranGillPhoto from '../public/karan-gill.jpg';
import TeddyPahagbiaPhoto from '../public/teddy-pahagbia.jpg';
import AranyakSenguptaPhoto from '../public/aranyak-sengupta.jpg';
import RohanSinghPhoto from '../public/rohan-singh.jpg';
import KartavyaGuptaPhoto from '../public/kartavya-gupta.jpg';

import { StaticImageData } from 'next/image';

interface TeamMember {
  name: string;
  photo: StaticImageData;
  xProfile: string;
  linkedInProfile: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Karan Gill',
    photo: KaranGillPhoto,
    xProfile: 'https://x.com/karengill',
    linkedInProfile: 'https://linkedin.com/in/karengill'
  },
  {
    name: 'Teddy Pahagbia',
    photo: TeddyPahagbiaPhoto,
    xProfile: 'https://x.com/teddypahagbia',
    linkedInProfile: 'https://linkedin.com/in/teddypahagbia'
  },
  {
    name: 'Aranyak Sengupta',
    photo: AranyakSenguptaPhoto,
    xProfile: 'https://x.com/aranyaksengupta',
    linkedInProfile: 'https://linkedin.com/in/aranyaksengupta'
  },
  {
    name: 'Rohan Singh',
    photo: RohanSinghPhoto,
    xProfile: 'https://x.com/rohansingh',
    linkedInProfile: 'https://linkedin.com/in/rohansingh'
  },
  {
    name: 'Kartavya Gupta',
    photo: KartavyaGuptaPhoto,
    xProfile: 'https://x.com/kartavyagupta',
    linkedInProfile: 'https://linkedin.com/in/kartavyagupta'
  }
];

const SwapSoTeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            At <span className="text-cyan-400">SwapSo</span>, our strength is simple:
          </h1>
          <h2 className="text-3xl mt-4">
            we sustain cuz we are a <span className="text-cyan-400">strong team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <Image 
                  src={member.photo} 
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-gray-700 group-hover:border-cyan-500 transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="flex space-x-4">
                <Link href={member.xProfile} target="_blank">
                  <a className="hover:text-cyan-400 transition-colors">
                    <Image src={XIcon} alt="X Profile" width={24} height={24} />
                  </a>
                </Link>
                <Link href={member.linkedInProfile} target="_blank">
                  <a className="hover:text-cyan-400 transition-colors">
                    <Image src={LinkedInIcon} alt="LinkedIn Profile" width={24} height={24} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapSoTeamPage;