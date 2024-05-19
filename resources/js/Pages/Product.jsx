import ShowCommentsComponent from "@/Components/assets/ShowCommentsComponent";
import Layout from "../Layouts/Layout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import CommentComponent from "@/Components/assets/CommentComponent";
import AddCartButton from "@/Components/AddCartButton";

export default function Product({ product, auth, comments, params }){
    return (
        <Layout auth={auth}>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            {product.title}
                        </h1>
                        <p className="text-gray-700 mb-6">
                            {product.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="font-semibold">Категория:</p>
                                <p>{product.category.categoryName}</p>
                            </div>
                        </div>
                        <div className="gap-4 mb-6">
                            <div>
                                <p className="font-semibold">Рейтинг:</p>
                                <p>{product.rating}</p>
                            </div>
                            {product.address && <div>
                                <p className="font-semibold">Адрес:</p>
                                <p>{product.address}</p>
                            </div>}

                            {product.phone && <div>
                                <p className="font-semibold">Телефон:</p>
                                <p>{product.phone}</p>
                            </div>}
                            {product.site &&
                            <div>
                                <p className="font-semibold">Сайт:</p>
                                <a href={product.site} className={'text-blue-700 hover:underline'}>{product.site}</a>
                            </div>}
                        </div>
                        <AddCartButton productId={product.id} />
                    </div>
                </div>
                {!auth.user ? (
                    <div className="text-center my-8">
                        Чтобы оставить комментарий, пожалуйста, войдите в свою
                        учетную запись.
                    </div>
                ) : (
                    <CommentComponent auth={auth} params={params} productId={product.id} />
                )}
                <ShowCommentsComponent comments={comments} />
            </div>
        </Layout>
    );
}
