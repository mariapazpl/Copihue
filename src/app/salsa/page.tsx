import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";

export default function Page() {
    const courseDetails = [
        {
          title: "Beginner",
          description: "Start your Salsa journey with the basics and get comfortable with the foundational moves.",
          image: "/salsa2.jpg",
          isAvailable: true,
          pricing: " $20 CAD per session",
          duration: " Every Wednesday from 7-8pm",
          location: " 25 Capreol Court, Toronto ON"
        },
        {
          title: "Intermediate",
          description: "Ready to elevate your Salsa? Master more complex moves and techniques with confidence.",
          image: "/salsa2.jpg",
          isAvailable: false,
          pricing: "",
          duration: "",
          location: "" 
        },
        {
          title: "Advanced",
          description: "For experienced dancers looking to refine their skills and conquer advanced Salsa techniques.",
          image: "/salsa2.jpg",
          isAvailable: false,
          pricing: "",
          duration: "",
          location: ""
        }
    ];

    return (
    <main className="text-center">
      <Banner imageSrc="/salsa.png" title="Salsa" />
      <div className="my-20">
        {courseDetails.map((course, index) => (
          <CourseDetail key={index} {...course} />
        ))}
      </div>
    </main>
  )
}