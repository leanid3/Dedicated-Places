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
    const [imageLoad, setImageLoad] = useState(true);

    const handleImageLoad = () => {
        setImageLoad(false);
    };

    return (
        <article className="flex flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Link className='w-1/4 h-full' href={route("showProduct", { id: product.id })}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-cove"
                    onLoad={handleImageLoad}
                />
            </Link>
            <div className=" flex flex-row px-5">
                <div className='flex flex-col py-5 ps-4 '>
                    <Link
                        href={route("showProduct", { id: product.id })}
                        className="text-2xl font-semibold text-black hover:underline"
                    >
                        {product.title}
                    </Link>
                    {product.address && <p className="text-sm text-gray-600"><LiaMapMarkerAltSolid/> {product.social.address}</p>}
                    {product.phone && <p className="text-sm flex text-gray-600"> <BsTelephone /> {product.phone}</p>}
                    {product.site && <a href={product.social.site} className="text-sm flex text-gray-600"> <CiGlobe /> {product.social.site}</a>}

                    <p className='text-md'>{product.description}</p>
                </div>
                <div className="flex flex-col items-center mt-2">
                    <div className='flex gap-2 flex-row'>
                        <p className='text-2xl my-auto'>{product.rating}  </p>
                        <StarOut title={'оценка экспертов'} rating={product.rating}/>
                    </div>
                    <div className='flex gap-2 flex-row'>
                        <p className='text-2xl gap-3 my-auto'>{product.rating}  </p>
                        <StarOut title={'оценка экспертов'} rating={product.rating}/>
                    </div>
                </div>
            </div>
        </article>
    );
}
