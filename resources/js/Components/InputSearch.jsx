import { useForm } from "@inertiajs/react";
import { HiOutlineSearch } from "react-icons/hi";
import React from "react";
export default function InputSearch() {
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
            className="flex rounded-full border-2 shadow-lg *:bg-lightgrey"
        >
            <input
                placeholder="Поиск..."
                type="text"
                name="search"
                value={data.search}
                onChange={(e) => setData("search", e.target.value)}
                className="text-md lg:w-96 ps-10 rounded-s-full  placeholder:italic placeholder:text-darkblue placeholder:opacity-50 text-darkblue p-3"
            />
            <button
                type="submit"
                className=" w-8 rounded-e-full text-center hover:bg-darkblue hover:text-lightgrey ps-1"
            >
                <HiOutlineSearch />
            </button>
            {errors.search && (
                <div className="text-red-500">{errors.search}</div>
            )}
        </form>
    );
}
