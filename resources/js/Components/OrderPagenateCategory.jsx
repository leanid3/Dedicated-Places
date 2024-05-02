import React, {useState} from 'react';
import Cardproduct from "@/Components/assets/Cardproduct.jsx";
import {router} from "@inertiajs/react";
import Catalog from "@/Components/assets/Сatalog.jsx";
import {options} from "axios";

const OrderPagenateCategory = ({products, selectedCategory, showCategories }) => {
    console.log(products);
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (category === "") {
            router.visit(route('home'));
        } else {
            router.visit(route('home', { category })
        )}
    }
    const handlePageChange = (page) => {
        router.visit(route('home', {
            category: selectedCategory,
            page: page
        }));
    };
    return (
        <div>
            <div className={'w-full flex justify-center mt-3'}>
                <select
                    value={selectedCategory}
                    className="rounded-lg py-2 px-4 bg-darkblue *:text-lg text-white font-medium border-none focus:outline-none appearance-none"
                    onChange={handleCategoryChange}
                >
                    <option className="font-medium" value="">All Categories</option>
                    {showCategories.map(category => (
                        <option key={category.id} value={category.id} className="font-medium">
                            {category.categoryName}
                        </option>
                    ))}
                </select>
            </div>
            <Catalog arrayProduct={products} handlePageChange={handlePageChange}/>
        </div>
    );
};

export default OrderPagenateCategory;
