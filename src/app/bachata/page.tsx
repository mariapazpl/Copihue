import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";
import Link from "next/link";

export default function Page() {
    const courseDetails = [
        {
          title: "Beginner",
          description: "Dive into the basics and get comfortable with the essential Bachata moves. ",
          image: "/bacha.jpg",
          isAvailable: true,
          pricing: " $20 CAD per session",
          duration: " Every Monday from 7-8pm",
          location: " 25 Capreol Court, Toronto ON"
        },
        {
          title: "Intermediate",
          description: "Ready to step it up? Learn more dynamic moves and start adding your personal flair to your Bachata.",
          image: "/bacha.jpg",
          isAvailable: false,
          pricing: "",
          duration: "",
          location: ""

        },
        {
          title: "Advanced",
          description: "For seasoned dancers looking to fine-tune their style and tackle challenging Bachata techniques.",
          image: "/bacha.jpg",
          isAvailable: false,
          pricing: "",
          duration: "",
          location: ""
        }
    ];

    return (
    <main className="text-center">
      <Banner imageSrc="/hero.png" title="Bachata" />
      <div className="my-20">
        {courseDetails.map((course, index) => (
          <CourseDetail key={index} {...course} />
        ))}
      </div>
      <div className="my-20">
        <h2 className="text-2xl font-semibold mb-4">Interested in Other Dance Styles?</h2>
        <p className="text-lg mb-4">If you enjoyed Bachata, you might also love our Salsa classes! Explore a new rhythm and dance style with us.</p>
        <Link href="/salsa" legacyBehavior>
          <a className="text-blue-500 underline">Check out our Salsa classes!</a>
        </Link>
      </div>
    </main>
  )
}