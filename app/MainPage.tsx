"use client";
import Image from "next/image";
import { useState } from "react";
import { Michroma } from "next/font/google";
import { Kdam_Thmor_Pro } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const kdam_Thmor_Pro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function MainPage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/stars_boy_moon.svg"
        fill
        className="object-cover"
        alt="background"
      />

      {/* Rocket */}
      <div
        className="
          absolute 
          sm:top-[150px] sm:left-[250px]
          md:top-[22%] md:left-[40%]
          lg:top-[24%] lg:left-[41%]
          xl:top-[18%] xl:left-[41%]
          z-10
          transform -translate-x-1/2 -translate-y-1/2
        "
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <Image src="/rocket.svg" width={368} height={334} alt="rocket" />
      </div>

      {/* Hover Message */}
      {showMessage && (
        <div className="absolute bottom-16 left-[55%] bg-[#00CBF7] text-black p-3 rounded-lg shadow-lg">
          Bitcoin to the moon
        </div>
      )}

      <div
        className={`
          absolute
          sm:top-[120px] sm:left-[80px]
          md:top-[135px] md:left-[150px]
          lg:top-[120px] lg:left-[148px]
          xl:top-[13%] xl:left-[190px]
          transform -translate-x-1/2
          text-white text-4xl sm:text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px]
          font-bold tracking-wide text-center
          z-20
          ${kdam_Thmor_Pro.className}
        `}
      >
        Making
      </div>
      <div
        className={`
          absolute
          sm:top-[113px] sm:left-[520px]
          md:top-[80px] md:left-[760px]
          lg:top-[50px] lg:left-[967px]
          xl:top-[80px] xl:left-[76%]
          transform -translate-x-1/2
          text-white text-4xl sm:text-[80px] md:text-[135px] lg:text-[165px] xl:text-[200px]
          font-bold tracking-wide text-center
          z-20
          ${michroma.className}
        `}
      >
        India
      </div>
      <div
        className={`
          absolute
          sm:top-[240px] sm:left-[205px]
          md:top-[250px] md:left-[360px]
          lg:top-[200px] lg:left-[490px]
          xl:top-[270px] xl:left-[600px]
          transform -translate-x-1/2
          text-white text-4xl sm:text-[80px] md:text-[135px] lg:text-[200px] xl:text-[240px]
          font-bold tracking-wide text-center
          z-20
          ${michroma.className}
        `}
      >
        Bitcoin
        <div
          className={`
          absolute
          sm:top-[49px] sm:left-[485px]
          md:top-[42%] md:left-[40%]
          lg:top-[183px] lg:left-[1040px]
          xl:top-[121.5px] xl:left-[1230px]
          transform -translate-x-1/2
          text-white text-4xl sm:text-5xl md:text-6xl lg:text-[240px]
          font-bold tracking-wide text-center
          z-20
        `}
        >
          <div className="h-[6px] sm:w-[260px] xl:w-[350px] lg:w-[290px] md:w-[290px] bg-white"></div>
        </div>
      </div>
      <div
        className={`
          absolute
          sm:top-[245px] sm:left-[572px]
          // md:top-[42%] md:left-[40%]
          lg:top-[330px] lg:left-[1140px]
          xl:top-[41%] xl:left-[1345px]
          transform -translate-x-1/2
          text-white text-4xl sm:text-[40px] md:text-6xl lg:text-[40px] xl:text-[70px]
          font-bold tracking-wide text-center
          z-20
          ${kdam_Thmor_Pro.className}
        `}
      >
        Ready
      </div>
    </div>
  );
}
