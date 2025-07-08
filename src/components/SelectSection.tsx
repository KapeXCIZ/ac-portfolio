import SelectCard from "./SelectCard";

export default function SelectSection() {
    return (
        <section className="flex justify-center flex-col md:flex-row items-center text-body h-[90vh] gap-8 container mx-auto   py-10 ">
            <SelectCard>
                <SelectCard.Title>WEB<br />DEVELOPMENT</SelectCard.Title>
                <SelectCard.Description>Clean code. Sharp pixels. User-first thinking.</SelectCard.Description>
            </SelectCard>
            <SelectCard>
                <SelectCard.Title>PHOTOGRAPY</SelectCard.Title>
                <SelectCard.Description>A visual journey through light, detail, and perspective.</SelectCard.Description>
            </SelectCard>
        </section>
    )
};
