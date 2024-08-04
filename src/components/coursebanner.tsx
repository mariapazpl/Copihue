import Image from "next/image";

interface BannerProps {
    imageSrc: string;
    title: string;
}

export default function CourseBanner({ imageSrc, title }: BannerProps) {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <Image 
        src={imageSrc}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  )
}
