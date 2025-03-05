import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SwapSoAcademy from '../public/swapso-academy.svg';
import BTCIndiaLogo from '../public/btc-india.svg';

const EcosystemPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col relative">
      {/* Ecosystem Heading */}
      <div className="flex justify-center absolute top-8 left-0 right-0 z-10">
        <div className="text-white rounded-full px-8 py-3 border border-white bg-black/30 text-lg font-semibold">
          ECOSYSTEM
        </div>
      </div>
      <div>
        <>
        </>
      </div>

      {/* Content Container */}
      <div className="h-screen flex flex-row">
        {/* SwapSo Academy Section */}
        <Link href="https://academy.swapso.io" className="w-1/2 relative">
          <Image 
            src={SwapSoAcademy} 
            alt="SwapSo Logo" 
            fill
            sizes="50vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* BTC India Section */}
        <Link href="https://btc-india.org" className="w-1/2 relative">
          <Image 
            src={BTCIndiaLogo} 
            alt="BTC India Illustration" 
            fill
            sizes="50vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default EcosystemPage;