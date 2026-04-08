import AboutTeaser from "@/components/AboutTeaser";
import HomeHero from "@/components/HomeHero";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
    const projectData = {
        runnerUp: ["case study", "case study"],
        runnerDown: ["next.js", "tailwind", "vercel"],
        imageSrc: "/images/projects/project-mock-1.png",
        imageAlt: "Example of a project",
        projectUrl: "https://www.teachandtaste.it",
        itLabels: ["Sito vetrina", "Mobile friendly", "SEO ottimizzato", "Design su misura", "Consegna rapida"],
        enLabels: ["HTML", "CSS", "Javascript", "Next.js", "React", "Tailwind", "Next-intl"],
        translations: "home.project"
    };

    return (
        <>
            <HomeHero />
            <ProjectSection {...projectData} />
            <AboutTeaser />
        </>
    );
}
