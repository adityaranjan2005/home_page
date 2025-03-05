import Image from "next/image";
import Link from "next/link";

export default function Phone() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full border-b mt-6">
        <div className="text-[58px]">Bitcoin Investment</div>
        <div className="text-[58px]">Made Easy and Secure</div>
        <div>
          <Link href="/Home">
            <Image
              className="mb-5"
              src="/Arrow.svg"
              width={30}
              height={200}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-fit"
          src="/Phone.svg"
          width={700}
          height={200}
          alt="phone"
        />
      </div>
    </div>
  );
}
