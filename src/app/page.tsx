import CoursesSection from "@/components/coursesection";
import Banner from "@/components/banner";
import Students from "@/components/students";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className="text-center">
      <Banner imageSrc="/banner.jpg" title="Copihue Dance Studio" />
      <Students />
      <Socials />
      <CoursesSection />

    </main>
  );
}
