import React from "react";
import Footer from "@/Components/assets/Footer.jsx";
import Header from "@/Components/assets/Header.jsx";

export default function Layout({ children, auth }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header auth={auth} />
            <main className="flex-grow bg-gray-100">
                <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
