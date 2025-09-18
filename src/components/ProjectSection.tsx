import Image from "next/image";

export default function ProjectSection() {
    return (
        <section className="container mx-auto min-h-screen grid grid-cols-2   ">
            <Image src={"/images/project-image.png"} height={2000} width={2000} alt="Example of a project" />
            <div className="flex flex-col gap-4">
                <h1 className="text-center font-deco text-5xl ">A digital home for a professional chef</h1>
                <h2 className="text-center font-serif text-2xl ">Designed to reflect the chef&#39;s style and personality</h2>
            </div>
        </section>
    )
};
