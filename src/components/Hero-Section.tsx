import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="w-full h-auto md:h-[40rem] flex flex-col justify-center items-center  relative overflow-hidden mx-auto py-10 md:py-0 rounded-md dark:bg-black bg-white  dark:bg-dot-white/[0.05] bg-dot-black/[0.05] ">
       <Spotlight
        className="-top-20 left-10 lg:left-60 md:left-50 md:-top-20"
        fill="pink"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1  className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
            <Link href={"/courses"}>
            <Button
        borderRadius="2.75rem"
        className="bg-white dark:bg-black/20
         text-black dark:text-white border-neutral-200 dark:border-slate-800 tracking-wider font-semibold"
      >
       Explore Courses
      </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
