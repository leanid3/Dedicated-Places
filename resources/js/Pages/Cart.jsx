import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import ProductsiCart from "@/Components/assets/ProductsiCart";
export default function Cart({ auth, cart }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Корзина ${auth.user.name}`} />
            <div className="flex flex-col items-center space-y-4">
                {cart.length === 0 ? (
                    <p className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 font-medium">
                        Корзина пуста
                    </p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="w-full max-w-4xl">
                            <ProductsiCart item={item} />
                        </div>
                    ))
                )}
            </div>
        </AuthenticatedLayout>
    );
}
