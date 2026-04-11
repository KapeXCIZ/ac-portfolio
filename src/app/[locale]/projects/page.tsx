import { Section } from "@/components/CardGroup";
// import ProjectSection from "@/components/ProjectSection";
import ProjectsHero from "@/components/ProjectsHero";


export default function ProjectsPage() {
    // const projectData1 = {
    //     runnerUp: ["design that works", "code that lasts", "details matter"],
    //     runnerDown: ["fast", "responsive", "minimal", "reliable", "clean"],
    //     imageSrc: "/images/projects/project-mock-1.png",
    //     imageAlt: "Example of a project",
    //     projectUrl: "https://www.teachandtaste.it",
    //     itLabels: ["Sito vetrina", "Mobile friendly", "SEO ottimizzato", "Design su misura", "Consegna rapida"],
    //     enLabels: ["HTML", "CSS", "Javascript", "Next.js", "React", "Tailwind", "Next-intl"],
    //     translations: "projects.1"
    // };
    // const projectData2 = {
    //     runnerUp: ["design that works", "code that lasts", "details matter"],
    //     runnerDown: ["fast", "responsive", "minimal", "precise", "reliable"],
    //     imageSrc: "/images/projects/project-mock-2.png",
    //     imageAlt: "Example of a project",
    //     projectUrl: "https://www.adreanigiovanni.com",
    //     itLabels: ["Responsive Design", "Mobile Friendly", "Navigazione facile", "Caricamento veloce"],
    //     enLabels: ["Next.js", "HTML", "Typescript", "React", "CSS", "Tailwind", "Next-intl"],
    //     translations: "projects.2"
    // };
    return (
        <>
            <ProjectsHero />
            {/* <ProjectSection {...projectData2} reverse />
            <ProjectSection {...projectData1} /> */}
            <Section />
        </>
    )
};
