import CourseBanner from "@/components/coursebanner";
import CourseDetail from "@/components/coursedetail";

export default function Page() {
    const courseDetails = [
        {
          title: "Intro",
          description: "An introduction to Salsa dancing. Learn the basics and get started with confidence.",
          image: "/intro.jpg"
        },
        {
          title: "Beginner",
          description: "For those who have completed the intro course and want to learn more foundational moves.",
          image: "/beginner.jpg"
        },
        {
          title: "Intermediate",
          description: "Take your Salsa skills to the next level with more complex moves and techniques.",
          image: "/intermediate.jpg"
        },
        {
          title: "Advanced",
          description: "For experienced dancers who want to master advanced Salsa techniques and routines.",
          image: "/advanced.jpg"
        }
    ];

    return (
    <main className="text-center px-5">
      <CourseBanner imageSrc="/salsabanner.jpg" title="Salsa" />
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">Salsa Dance Course</h1>
        <p className="text-lg text-gray-700 mb-8">Learn the art of Salsa dancing with our comprehensive courses designed for all skill levels.</p>
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        {courseDetails.map((course, index) => (
          <CourseDetail key={index} {...course} />
        ))}
      </div>
    </main>
  )
}