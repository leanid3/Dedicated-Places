import { useForm } from "@inertiajs/react";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbHeartPlus } from "react-icons/tb";

export default function AddCartButton({ productId }) {
    const { post } = useForm({ product_id: productId });
    const addToCart = (e) => {
        e.preventDefault();
        post(route("addCart"));
    };
    return (
        <button
            onClick={addToCart}
            className="flex text-nowrap items-center justify-center mt-4 px-4 py-2 text-white font-semibold bg-darkblue rounded-md hover:bg-darkblue/80 focus:outline-none"
        >
            <TbHeartPlus  className=" visible md:invisible text-2xl mr-2" />В избранное
        </button>
    );
}
