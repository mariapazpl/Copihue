import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";

export default function Page() {
    const courseDetails = [
        {
          title: "Beginner",
          description: "Dive into the basics and get comfortable with the essential Bachata moves.",
          image: "/bacha.jpg",
          isAvailable: true
        },
        {
          title: "Intermediate",
          description: "Ready to step it up? Learn more dynamic moves and start adding your personal flair to your Bachata.",
          image: "/bacha.jpg",
          isAvailable: false

        },
        {
          title: "Advanced",
          description: "For seasoned dancers looking to fine-tune their style and tackle challenging Bachata techniques.",
          image: "/bacha.jpg",
          isAvailable: false
        }
    ];

    return (
    <main className="text-center">
      <Banner imageSrc="/hero.png" title="Bachata" />
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">Bachata Dance Course</h1>
        <p className="text-lg max-w-[60rem] mx-auto text-gray-700 mb-8">
          Get ready to groove to the rhythm of Bachata! Whether you're just starting 
          out or looking to refine your moves, our fun and engaging courses are crafted 
          to suit dancers of all levels. Dive into the vibrant world of Bachata and let 
          the music guide your steps!        
        </p>
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        {courseDetails.map((course, index) => (
          <CourseDetail key={index} {...course} />
        ))}
      </div>
    </main>
  )
}