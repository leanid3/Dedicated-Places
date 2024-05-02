import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgCheckO, CgCloseO } from "react-icons/cg";
import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import AddCartButton from "../AddCartButton";
import StarOut from "@/Components/StarOut.jsx";
import {BsTelephone} from "react-icons/bs";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
export default function Cardproduct({ product }) {
    const [imageLoad, setImageLoad] = useState(false);

    const handleImageLoad = () => {
        setImageLoad(true);
    };

    return (
        <article
            className="flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            {/* Изображение продукта */}
            <Link className='w-full md:w-1/4 h-auto' href={route("showProduct", {id: product.id})}>
                {imageLoad ?
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover"
                    />
                    : <div className="w-full h-48 animate-pulse  bg-gray-200 flex items-center justify-center">
                        Загрузка...
                    </div>
                }
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover"
                    onLoad={handleImageLoad}
                    style={{display: "none"}}
                />
            </Link>

            {/* Информация о продукте */}
            <div className="flex flex-col justify-between px-5 py-3 w-full md:w-3/4">
                {/* Заголовок продукта */}
                <div>
                    <Link
                        href={route("showProduct", {id: product.id})}
                        className="text-2xl font-semibold text-black hover:underline"
                    >
                        {product.title}
                    </Link>
                    {product.address &&
                        <p className="text-sm items-center justify-start text-gray-600 flex gap-3"><LiaMapMarkerAltSolid/> {product.address}</p>}
                    {product.phone && <p className="text-sm items-center justify-start text-gray-600 flex gap-3"><BsTelephone/> {product.phone}</p>}
                    {product.site && <a href={product.site} className="text-sm items-center justify-start text-blue-500 hover:underline flex gap-3">
                        <CiGlobe/> {product.site}</a>}
                </div>

                {/* Описание продукта */}
                <p className='text-md mt-4 font-medium'>{product.description}</p>

                {/* Рейтинг продукта */}
                <div className='flex flex-col md:flex-row items-center md:items-end mt-4'>
                    <div className='flex gap-2'>
                        <p className='text-2xl'>{product.rating}  </p>
                        <StarOut title={'оценка экспертов'} rating={product.rating}/>
                    </div>
                    <div className='flex gap-2 mt-2 md:mt-0'>

                    </div>
                </div>
            </div>

            <AddCartButton productId={product.id} />
        </article>

    );
}
