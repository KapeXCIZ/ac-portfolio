import Form from "./Form";

export default function AboutCTA() {
    return (
        <section id="form" className="relative bg-background  pb-10">
            <div className="mx-auto container px-10 md:px-16 lg:px-20 max-w-[1000px]">
                <div className="bg-foreground/5 border p-10 rounded-4xl shadow-xl">
                    <Form />
                </div>
            </div>
        </section>
    )
};
