import Image from "next/image";

function SkillsGrid({ elements, title }: { elements: Array<[string, string]>, title: string }) {
    return (<>
        <div className="lg:grid flex-col grid-cols-3 gap-0 mb-10">
            <h1 className="text-4xl  font-sans font-light tracking-normal   text-secondary-foreground/80 col-span-1 pt-4">{title}</h1>
            <div className="flex flex-row justify-start items-center gap-8 flex-wrap my-4 col-span-2">
                {elements.map(([path, name], key) => (
                    <span key={key} className="flex flex-row justify-center items-center gap-2">
                        <Image key={key} src={path} height={256} width={256} alt={name + " icon"} className="size-10" />
                        <p className="text-xl font-light font-sans">{name}</p>
                    </span>
                ))}
            </div>
        </div>

    </>)
}


export default function Skills() {
    const prefix = "/images/svgs/";
    const suffix = ".svg"
    let languages: Array<[string, string]> = [["java", "Java"], ["javascript", "Javascript"], ["typescript", "Typescript"], ["php", "Php"], ["sql", "SQL"]];
    languages = languages.map(([path, name]) => [prefix + path + suffix, name])
    let frameworks: Array<[string, string]> = [["react", "React.js"], ["next", "Next.js"], ["node", "Node.js"]];
    frameworks = frameworks.map(([path, name]) => [prefix + path + suffix, name])

    return (
        <div className="container mx-auto max-w-[1000px]  px-10 md:px-16 lg:px-20">
            <SkillsGrid elements={languages} title="LANGUAGES" />
            <SkillsGrid elements={frameworks} title="FRAMEWORKS" />

        </div>
    )
};
