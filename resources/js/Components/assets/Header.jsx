import { IoLogInSharp } from "react-icons/io5";
import { BsBookmarkStar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { HiOutlineUser, HiOutlineShoppingCart, HiChat, HiBookOpen   } from "react-icons/hi";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputSearch from "../InputSearch";
export default function Header({ auth }) {
    return (
        <header style={{backgroundImage: "url('/storage/assets/backgroundmagefirst.png')"}} className="bg-center bg-cover w-screen h-screen  p-4 z-10">
            <div className='flex items-start justify-between container space-x-3 mx-auto mt-5'>
                <Link
                    href={route("home")}
                    className="text-lightgrey text-center md:text-left text-3xl md:text-3xl font-bold"
                >
                    DronShop
                </Link>
                <InputSearch />
                <div className="flex items-center gap-6 text-lightgrey *:hidden *:lg:block *:text-5xl text-center md:text-left">
                    <Link href={route("cart")}>
                        Корзина
                    </Link>

                    <Link href={route("cart")}>
                        Обратная связь
                    </Link>

                    <Link href={route("cart")}>
                        О нас
                    </Link>

                    {auth && auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="flex items-center"
                        >
                            <img
                                className="w-8 h-8 rounded-full"
                                src={auth.user.avatar}
                                alt={auth.user.name}
                            />
                            <span className="hidden lg:block">
                            {auth.user.name}
                        </span>
                        </Link>
                    ) : (
                        <Link
                            href={route("register")}
                        >
                            Регистрация
                        </Link>
                    )}
                </div>
            </div>

        </header>
    );
}
