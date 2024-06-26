import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-lightgrey">
            <div>
                <Link
                    href={route("home")}
                    className="text-darkblue w-20 h-20 fill-current text-center md:text-left text-xl md:text-3xl font-bold"
                >
                    Гид по заведениям
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
