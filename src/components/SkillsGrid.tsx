import { useInView, motion, Variants } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function SkillsGrid({ elements, title }: { elements: Skill[], title: string }) {
    const textRef = useRef<HTMLDivElement>(null);
    const textInView = useInView(textRef, { once: true, margin: "0px -300px -300px 0px" });

    const textVariants: Variants = {
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
            },
        },
        offscreen: {
            opacity: 0,
            x: -40,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
            },
        }
    };

    const containerVariants: Variants = {
        onscreen: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Variante per la singola label (figlio)
    const itemVariants: Variants = {
        onscreen: {
            opacity: 1,
            transition: { type: "spring", bounce: 0.4 }
        },
        offscreen: {
            opacity: 0,
        }
    };



    return (<>
        <div className="lg:grid flex-col grid-cols-3 gap-0 mb-10  ">
            <motion.div initial="offscreen"
                ref={textRef}
                animate={textInView ? "onscreen" : "offscreen"}
                variants={textVariants}
                className="text-5xl  font-deco flex justify-start lg:justify-center items-center  text-foreground/80 col-span-1 pt-4"
            >{title}</motion.div>
            <motion.div

                animate={textInView ? "onscreen" : "offscreen"}
                variants={containerVariants}
                className="flex flex-row justify-start lg:justify-center items-center gap-4 flex-wrap my-4 col-span-2">
                {elements.map(({ path, name }, key) => (
                    <motion.span variants={itemVariants} key={key} className="flex group flex-row justify-center items-center rounded-full select-none hover:border-accent-foreground/80 duration-400 transition ease-in-out border-dashed hover:-translate-y-1 solid-shadow  border-2 px-4 md:px-6 py-2 md:py-3 gap-2">
                        <Image key={key} src={path} height={256} width={256} alt={name + " icon"} className="size-6 md:size-8 group-hover:rotate-360 duration-400 transition ease-in-out" />
                        <p className="text-base md:text-xl   text-foreground/70 font-mono">{name}</p>
                    </motion.span>
                ))}
            </motion.div>
        </div>

    </>)
}

interface Skill {
    path: string,
    name: string
}

export default function Skills() {
    const prefix = "/images/svgs/";
    const suffix = ".svg"
    function buildSkills(items: Array<[string, string]>): Skill[] {
        return items.map(([path, name]) => ({ path: prefix + path + suffix, name: name }));
    }
    const languages: Skill[] = buildSkills([["typescript", "Typescript"], ["javascript", "Javascript"], ["java", "Java"], ["html", "HTML"], ["css", "CSS"], ["sql", "SQL"], ["php", "Php"]]);

    const tools: Skill[] = buildSkills([["next", "Next.js"], ["react", "React.js"], ["node", "Node.js"], ["docker", "Docker"], ["git", "Git"], ["intellij", "IntelliJ IDEA"], ["mysql", "MySQL"], ["tailwind", "Tailwind.css"], ["vscode", "VS Code"]]);

    return (
        <div className="container mx-auto max-w-[1200px]   px-10 md:px-16 lg:px-20 mb-16">
            <SkillsGrid elements={languages} title="LANGUAGES" />
            <SkillsGrid elements={tools} title="TOOLS" />
        </div>
    )
};
