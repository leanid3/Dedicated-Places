// import AddCartButton from "@/Components/AddCartButton";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function AnswerSearch({ auth, products, searchQuery }) {
    const [savedSearchQuery, setSavedSearchQuery] = useState("");

    useEffect(() => {
        const savedQuery = localStorage.getItem("searchQuery");
        if (savedQuery) {
            setSavedSearchQuery(savedQuery);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("searchQuery", searchQuery);
        setSavedSearchQuery(searchQuery);
    }, [searchQuery]);

    return (
        <Layout auth={auth}>
            <Head title="Результат поиска" />
            <div className="flex flex-col items-center space-y-3">
                <h1>
                    Найдено по запросу: <strong>{savedSearchQuery}</strong>
                </h1>
                {products.length === 0 ? (
                    <p className="px-3 py-2 bg-gray-200 rounded-md text-gray-800 font-medium">
                        Ничего не найдено
                    </p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="w-full max-w-4xl">
                            <div className="flex items-center justify-between p-3 border-b border-gray-200">
                                <div className="flex items-center">
                                    <img
                                        className="w-20 h-20 rounded-md mr-4"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <div>
                                        <Link
                                            href={route("showProduct", {
                                                id: product.id,
                                            })}
                                            className="text-xl font-semibold hover:underline"
                                        >
                                            {product.title}
                                        </Link>
                                        <p className="text-gray-600">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                {/* <AddCartButton productId={product.id} /> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Layout>
    );
}
