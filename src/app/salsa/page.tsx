import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";

export default function Page() {
    const courseDetails = [
        {
          title: "Beginner",
          description: "Start your Salsa journey with the basics and get comfortable with the foundational moves.",
          image: "/salsa2.jpg",
          isAvailable: true
        },
        {
          title: "Intermediate",
          description: "Ready to elevate your Salsa? Master more complex moves and techniques with confidence.",
          image: "/salsa2.jpg",
          isAvailable: false 
        },
        {
          title: "Advanced",
          description: "For experienced dancers looking to refine their skills and conquer advanced Salsa techniques.",
          image: "/salsa2.jpg",
          isAvailable: false
        }
    ];

    return (
    <main className="text-center">
      <Banner imageSrc="/salsa.png" title="Salsa" />
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">Salsa Dance Course</h1>
        <p className="text-lg max-w-[60rem] mx-auto text-gray-700 mb-8">Feel the vibrant energy 
          of Salsa! Whether you're stepping onto the dance floor for the first 
          time or aiming to perfect your technique, our dynamic and immersive 
          courses are tailored to dancers of all levels. Embrace the rhythm of 
          Salsa and let the music lead your moves!</p>
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        {courseDetails.map((course, index) => (
          <CourseDetail key={index} {...course} />
        ))}
      </div>
    </main>
  )
}