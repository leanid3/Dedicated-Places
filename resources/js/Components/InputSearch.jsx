import { useForm } from "@inertiajs/react";
import { HiOutlineSearch } from "react-icons/hi";
import React from "react";
export default function InputSearch({className}) {
    const { data, setData, post, errors } = useForm({
        search: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("search"));
    };

    return (
        <form
            onSubmit={submit}
            className={className}
        >
            <input
                placeholder="Поиск"
                type="text"
                name="search"
                value={data.search}
                onChange={(e) => setData("search", e.target.value)}
                className="text-md w-full text-black outline-none focus:border-transparent border-0 outline-0 placeholder:text-gray-700 placeholder:italic placeholder:opacity-50"
            />
            <button
                type="submit"
                className=" text-2xl rounded-e-full text-center text-gray-700 hover:text-darkblue"
            >
                <HiOutlineSearch/>
            </button>
            {errors.search && (
                <div className="text-red-500">{errors.search}</div>
            )}
        </form>
    );
}
