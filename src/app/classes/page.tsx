import BanClasses from "@/components/banclasses"
import CourseCard from "@/components/coursecard"

const courses = [
  {
    title: "Salsa",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque suscipit officiis nesciunt magni ipsum consequuntur tenetur explicabo natus? Harum.",
    image: "/salsacopi.jpeg",
    link: "/salsa",
  },
  {
    title: "Bachata",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque suscipit officiis nesciunt magni ipsum consequuntur tenetur explicabo natus? Harum.",
    image: "/bachcopi.jpeg",
    link: "/bachata",
  },
  {
    title: "Merengue",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque suscipit officiis nesciunt magni ipsum consequuntur tenetur explicabo natus? Harum.",
    image: "/mercopi.jpeg",
    link: "/merengue",
  },
]

export default function Page() {
  return (
    <main className="text-center px-5">
        <BanClasses />
        <p className="mt-6 max-w-2xl mx-auto text-lg font-semibold">
          Dance in an environment that fosters joy and cultural connection. Our Latin dance classes offer a lively and welcoming space where you can explore Salsa, Bachata, and Merengue. These dances are not just about steps but about creating a harmonious and expressive experience with your partner. Join us and let your creativity shine on the dance floor while learning how to move in sync and enhance your dance connection.
        </p>
        <div className="mt-12 flex flex-col items-center w-full">
          {courses.map ((course) => (
            <CourseCard key={course.title} course={course}/>
          ))}  
        </div>
        

    </main>
  );
}
