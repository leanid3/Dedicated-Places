import { Link } from "@inertiajs/react";
import InputSearch from "../InputSearch";
import React, {useState} from 'react';

const Header = ({ auth }) => {
    // Состояние для отображения/скрытия мобильного меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-center bg-cover w-full p-4 z-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <Link href={route("home")} className="text-lightgrey text-3xl font-bold">
                        Гид по заведениям
                    </Link>

                    {/* Поиск (добавлен InputSearch вместо местоположения, просто для примера) */}
                    <div className="lg:ml-4 flex items-center w-full lg:w-1/3">
                        <InputSearch
                            className="flex bg-white justify-between px-4 rounded-lg w-full border-2 shadow-lg"/>
                    </div>

                    {/* Бургер-меню для мобильных экранов */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-lightgrey"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Навигация и профиль пользователя */}
                    <nav
                        className={`lg:flex lg:items-center  lg:gap-6 lg:text-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <Link className='hover:underline' href={route("cart")}>Избранное</Link>
                        <Link className='hover:underline' href={route("feedback")}>Обратная связь</Link>
                        <Link className='hover:underline' href={route("cart")}>О нас</Link>
                        {auth && auth.user ? (
                            <Link href={route("dashboard")} className="flex items-center">
                                <img className="w-8 h-8 rounded-full" src={auth.user.avatar} alt={auth.user.name}/>
                                <span>{auth.user.name}</span>
                            </Link>
                        ) : (
                            <Link className='hover:underline' href={route("register")}>Регистрация</Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
