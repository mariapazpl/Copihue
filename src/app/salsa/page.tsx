import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";
import Link from "next/link";

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
      <div className="my-20">
        <h2 className="text-2xl font-semibold mb-4">Interested in Other Dance Styles?</h2>
        <p className="text-lg mb-4">If you enjoyed Salsa, you might also love our Bachata classes! Explore a new rhythm and dance style with us.</p>
        <Link href="/bachata" legacyBehavior>
          <a className="text-blue-500 underline">Check out our Bachata classes!</a>
        </Link>
      </div>
    </main>
  )
}