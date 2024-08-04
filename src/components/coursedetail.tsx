import Image from "next/image";
import Link from "next/link";

interface CourseDetailProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export default function CourseDetail({ title, description, image, link ="/schedules" }: CourseDetailProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start my-8 space-y-4 md:space-y-0 md:space-x-8 w-full max-w-4xl mx-auto">
      <div className="w-full md:w-1/3 h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <h2 className="absolute bottom-0 left-0 text-white text-xl bg-black bg-opacity-50 w-full text-center py-2">{title}</h2>
      </div>
      <div className="text-left max-w-md">
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={link}> 
          <button className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Enroll Now</button>
        </Link>
      </div>
    </div>
  )
}
