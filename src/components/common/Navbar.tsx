import Link from "next/link";
import Logo from "../Logo";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
    return (
        <div className="h-[10vh] md:h-20  position-sticky top-0 flex  justify-between items-center w-full container mx-auto py-4 px-4 ">
            <Link href={"/"} className="h-3/4 shine">
                <Logo className="h-full " />
            </Link>
            <ModeToggle />
        </div>
    )
};
