'use client'

import SingleProjectCard from "./SingleProjectCard"

export default function ProjectCards() {
    return (
        <div className="relative w-full h-800px">
            <SingleProjectCard url="/images/projects/t&t-1.png" alt="Project showcase image" rotation={0} opacity={100} translate={0} />
            <SingleProjectCard url="/images/projects/t&t-2.png" alt="Project showcase image" rotation={0} opacity={100} translate={0} />
            <SingleProjectCard url="/images/projects/t&t-3.png" alt="Project showcase image" rotation={0} opacity={100} translate={0} />
        </div>
    )
};
