"use client"
import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
function WhyChooseUs() {
    const content = [
        {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        ),
      },
        {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        ),
      },
        {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        ),
      },
        {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        ),
      },
    
    ]
  return (
    <div className=''>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs