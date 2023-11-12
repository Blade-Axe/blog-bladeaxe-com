import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar(){
    return(
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justofy-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-3xl font-medium">
                            Blade <span className="text-teal-500">Blog</span>
                        </h1>
                    </Link>
                </div>
                <ThemeButton/>
            </div>
        </div>
    )
}