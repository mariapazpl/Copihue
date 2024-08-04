import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400] lg:h-[500px]">
      <Image
        src="/banner.jpg"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-50 space-y-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          Copihue Dance Studio
        </h1>
        <Link href="/account">
          <button className="bg-white bg-opacity-30 backdrop-blur-md text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-red-400">
            Register
          </button>
        </Link>
        <p className="text-white text-sm">
          Already have an account?{" "}
          <Link href="/account">
            <span className="text-blue-500 underline cursor-pointer">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}