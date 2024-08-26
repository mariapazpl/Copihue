import Banner from "@/components/banner";
import CourseDetail from "@/components/coursedetail";

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
    </main>
  )
}