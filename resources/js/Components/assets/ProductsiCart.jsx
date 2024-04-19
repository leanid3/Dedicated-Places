import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function ProductsiCart({ item }) {
    const { delete: destroyCartItem } = useForm({
        item_id: item.id,
    });
    const cartDelete = () => {
        destroyCartItem(route("destroyCart"));
    };

    return (
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
            <div className="flex items-center w-1/2">
                <img
                    className="w-20 h-20 rounded-md mr-4"
                    src={item.product.image}
                    alt={item.product.title}
                />
                <div>
                    <Link
                        href={route("showProduct", { id: item.product.id })}
                        className="text-xl font-semibold hover:underline"
                    >
                        {item.product.title}
                    </Link>
                    <p className="text-gray-500">Количество: {item.quantity}</p>
                    <p className="text-gray-600">{item.product.description}</p>
                </div>
            </div>
            <button
                className="bg-red-700 text-white text-lg px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none"
                onClick={cartDelete}
            >
                Удалить из корзины
            </button>
        </div>
    );
}
