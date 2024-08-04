import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    name: "Salsa",
    image: "/salsacopi.jpeg",
    link: "/salsa",
  },
  {
    name: "Bachata",
    image: "/bachcopi.jpeg",
    link: "/bachata",
  },
  {
    name: "Merengue",
    image: "/mercopi.jpeg",
    link: "/merengue",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Courses</h2>
        <p className="text-lg text-zinc-700 mt-4">Explore the variety of dance styles we offer at our studio.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course) => (
          <Link key={course.name} href={course.link}>
            <div className="group relative w-60 h-60 flex flex-col items-center cursor-pointer">
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
              <h3 className="mt-4 text-lg font-semibold text-black">
                {course.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}