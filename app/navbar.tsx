import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[rgb(10,14,18)] px-8 py-4 flex items-center justify-between text-white">
      <div className="flex items-center">
        <Image
          src="/swapso_logo.svg"
          alt="logo"
          width={120} 
          height={31.94}
          priority
        />
      </div>
      <div className="flex items-center space-x-8">
        <Link
          href="/Home"
          className="hover:underline hover:decoration-[#01D2FC]"
        >
          Home
        </Link>
        <Link
          href="/Product"
          className="hover:underline hover:decoration-[#01D2FC]"
        >
          Products
        </Link>
        <div className="flex items-center space-x-2">
          <Image
            src="/bi_stars.svg"
            alt="star"
            width={15}
            height={15}
            priority
          />
          <Link
            href="/Gifting"
            className="text-[#01D2FC] hover:underline hover:decoration-[#01D2FC]"
          >
            Gifting
          </Link>
        </div>
      </div>
      <button className="bg-[#01D2FC] h-[38px] w-[136px] text-white font-semibold px-5 py-2 rounded-[10px]">
        Launch App
      </button>
    </nav>
  );
}