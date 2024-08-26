import CourseCard from "@/components/coursecard"
import Banner from "@/components/banner";

const courses = [
  {
    title: "Salsa",
    description: "Salsa is a lively and exhilarating dance that not only boosts your confidence and relieves stress but also brings people together on the dance floor. With our thoughtfully crafted syllabus, each student builds a solid foundation, ensuring smooth and enjoyable progress as you master the vibrant world of Salsa.",
    image: "/sal.png",
    link: "/salsa",
  },
  {
    title: "Bachata",
    description: "Bachata, known as the 'romantic rhythm' of Latin dances, is a sensual and expressive style that originates from the Dominican Republic. Easy to learn and delightful to dance, Bachata invites you to connect with the music and your partner in a truly captivating way.",
    image: "/bachata.png",
    link: "/bachata",
  },
]

export default function Page() {
  return (
    <main className="text-center">
        <Banner imageSrc="/dancing.jpg" title="Our Classes" />
        <div className="mt-12 flex flex-col items-center w-full">
          {courses.map ((course) => (
            <CourseCard key={course.title} course={course}/>
          ))}  
        </div>
        

    </main>
  );
}
