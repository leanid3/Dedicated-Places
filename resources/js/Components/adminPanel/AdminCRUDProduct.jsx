import { Link, useForm } from '@inertiajs/react';
import React from 'react'

export default function AdminCRUDProduct({product}) {

    const { post, processing } = useForm({
        product_id: product.id,
    });
    const productDelete = () => {
        post(route("product.destroy"));
    };

    return (
            <tr className='text-center'>
                <td>{product.id}</td>
                <td className='text-xl font-semibold hover:underline'>{product.title}</td>
                <td className="text-gray-500">{product.description}</td>
                <td className="text-yellow-600">{product.rating}</td>
                <td className="text-blue-600">{product.price}</td>
                <td>{product.status}</td>
                <td>
                    <img
                        className="w-20 h-20 rounded-md mr-4"
                        src={product.image}
                        alt={product.title}
                    />
                </td>
                <td>{product.category.categoryName}</td>
                <td>{product.brend.brend}</td>
                <td className='flex flex-col'>
                    <button
                        className="bg-red-700 text-white text-lg px-3 py-2 rounded-md hover:bg-red-800 focus:outline-none"
                        onClick={productDelete}
                        disabled={processing}
                    >
                        Удалить из корзины
                    </button>
                    <Link
                        className="bg-blue-700 text-white text-lg px-3 py-2 rounded-md hover:bg-blue-800 focus:outline-none"
                        href={route('product.edit', { id: product.id })}
                    >
                        Редактировать
                    </Link>
                </td>
            </tr>

    )
}
