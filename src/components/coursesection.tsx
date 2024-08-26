import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    name: "Salsa",
    image: "/salsa2.jpg",
    link: "/salsa",
  },
  {
    name: "Bachata",
    image: "/bacha.jpg",
    link: "/bachata",
  },
];

export default function CoursesSection() {
  return (
    <section className="relative z-20 pt-24 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
        <p className="text-lg text-zinc-700 mt-4 max-w-xl mx-auto mb-8">
          Dive into the rhythm with our expertly crafted Salsa and Bachata courses, designed to take you from beginner to pro. Whether you're just starting or looking to refine your skills, our levels cater to every dancer's journey.        
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {courses.map((course) => (
          <Link key={course.name} href={course.link}>
            <div className="group relative w-80 h-80 flex flex-col items-center cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src={course.image}
                  alt={course.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transition-transform duration-300 transform group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">
                {course.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}