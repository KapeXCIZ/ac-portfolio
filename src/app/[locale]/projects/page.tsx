import ProjectSection from "@/components/ProjectSection";
import ProjectsHero from "@/components/ProjectsHero";


export default function ProjectsPage() {
    const projectData1 = {
        runnerUp: ["case study", "case study"],
        runnerDown: ["next.js", "tailwind", "vercel"],
        imageSrc: "/images/projects/project-mock-1.png",
        imageAlt: "Example of a project",
        projectUrl: "https://www.teachandtaste.it",
        itLabels: ["Sito vetrina", "Mobile friendly", "SEO ottimizzato", "Design su misura", "Consegna rapida"],
        enLabels: ["HTML", "CSS", "Javascript", "Next.js", "React", "Tailwind", "Next-intl"],
        translations: "home.project"
    };
    const projectData2 = {
        runnerUp: ["case study", "case study"],
        runnerDown: ["next.js", "tailwind", "vercel"],
        imageSrc: "/images/projects/project-mock-2.png",
        imageAlt: "Example of a project",
        projectUrl: "https://www.teachandtaste.it",
        itLabels: ["Sito vetrina", "Mobile friendly", "SEO ottimizzato", "Design su misura", "Consegna rapida"],
        enLabels: ["HTML", "CSS", "Javascript", "Next.js", "React", "Tailwind", "Next-intl"],
        translations: "home.project"
    };
    return (
        <>
            <ProjectsHero />
            <ProjectSection {...projectData1} />
            <ProjectSection {...projectData2} reverse />
        </>
    )
};
