import Image from "next/image";

function SkillsGrid({ elements, title }: { elements: Skill[], title: string }) {
    return (<>
        <div className="lg:grid flex-col grid-cols-3 gap-0 mb-10  ">
            <div className="text-5xl  font-deco flex justify-start lg:justify-center items-center     text-foreground/80 col-span-1 pt-4">{title}</div>
            <div className="flex flex-row justify-start lg:justify-center items-center gap-4 flex-wrap my-4 col-span-2">
                {elements.map(({ path, name }, key) => (
                    <span key={key} className="flex flex-row justify-center items-center rounded-full select-none hover:border-accent-foreground/80 duration-400 transition ease-in-out border-dashed  border-2 px-4 md:px-6 py-2 md:py-3 gap-2">
                        <Image key={key} src={path} height={256} width={256} alt={name + " icon"} className="size-6 md:size-8" />
                        <p className="text-base md:text-xl  text-foreground/70 font-mono">{name}</p>
                    </span>
                ))}
            </div>
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
        <div className="container mx-auto max-w-[1200px]  px-10 md:px-16 lg:px-20 mb-16">
            <SkillsGrid elements={languages} title="LANGUAGES" />
            <SkillsGrid elements={tools} title="TOOLS" />
        </div>
    )
};
