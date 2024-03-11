"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import coursesData from "@/data/music_course.json";
import Link from "next/link";

interface MusicCourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function CoursesSection() {
  const courses = coursesData.courses.filter(
    (course: MusicCourse) => course.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-black/40">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {courses.map((course: MusicCourse) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white h-full dark:bg-zinc-900">
                <div >
                  <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}
                  className=" "
                  >Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href={"/course"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default CoursesSection;
