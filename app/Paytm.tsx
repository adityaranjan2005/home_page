import Image from "next/image";

export default function Paytm() {
  return (
    <div className="flex flex-col justify-between align-middle">
      <div>
        <Image
          className="mx-auto w-50 h-[180px]"
          src="/Swapso_bitcoin.svg"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div>
        <div className="text-[70px] ml-[180px] pl-[150px] mt-[40px]">We are on a mission to make</div>
        <div className="text-[70px] text-[#01D2FC] ml-[220px] pl-[270px]">Paytm for Bitcoin</div>
      </div>
    </div>
  );
}
