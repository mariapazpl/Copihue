import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
    course: {
        title: string;
        description: string;
        image: string;
        link?: string;
    };
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start my-8 space-y-4 md:space-y-0 md:space-x-8 w-full max-w-4xl">
        <div className="w-full md:w-1/3 h-96 md:h-64 relative">
          <Image
            src={course.image}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="text-left max-w-md">
          <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          {course.link ? (
            <Link href={course.link}>
              <button className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Learn More
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="inline-block bg-red-400 text-white px-4 py-2 rounded cursor-not-allowed"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    );
}