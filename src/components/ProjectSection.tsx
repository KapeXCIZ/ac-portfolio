import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Badge } from "./ui/badge";

export default function ProjectSection() {
    return (
        <section className="container mx-auto my-20 grid grid-cols-2   ">
            <Image src={"/images/project-image.png"} height={2000} width={2000} alt="Example of a project" className="dark:brightness-90 brightness-100" />
            <div className="flex flex-col gap-3 items-center justify-center">

                <p className="font-thin">Featured project</p>

                <h1 className="text-center font-deco text-5xl ">A digital home for a <span className="underline decoration-accent-400 decoration-[3px] underline-offset-8 hover:decoration-wavy">professional chef</span></h1>
                <h2 className="text-center font-serif text-3xl ">Designed to reflect the chef&#39;s style and personality</h2>
                <p className="text-2xl text-secondary-foreground font-thin">Thanks to a clean and responsive design, the site works on desktop and mobile, allowing customers to easily discover the services and contact it.</p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">Javascript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                    <Badge variant="outline">Next-intl</Badge>
                </div>
                <div className="mx-auto mt-2">
                    <Link href={"https://www.teachandtaste.it"}  >
                        <CustomButton variant="outline">Visit website</CustomButton>
                    </Link>
                </div>
            </div>
        </section>
    )
};
