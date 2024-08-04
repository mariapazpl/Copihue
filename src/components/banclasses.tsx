import Image from "next/image"

export default function BanClasses() {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400] lg:h-[500px] ">
        <Image 
            src="/classesbanner.jpeg"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-50 space-y-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
              Our Classes
          </h1>
          
        </div>
    </div>
  )
}
