import CoursesSection from "@/components/Courses-Section";
import HeroSection from "@/components/Hero-Section";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import InstructorPanel from "@/components/InstructorPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full antialiased bg-black/[0.96] bg-grid-white[0.02] overflow-hidden">
      <HeroSection/>
      <CoursesSection/>
      <WhyChooseUs/>
      <Testimonial/>
      <UpcomingWebinar/>
      <InstructorPanel/>
      <Footer/>
    </main>
  )
  ;
}
