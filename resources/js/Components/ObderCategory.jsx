import React, {useState} from 'react';
import Catalog from "@/Components/assets/Сatalog.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Cardproduct from "@/Components/assets/Cardproduct.jsx";

const ObderCategory = ({arrayProduct, categories}) => {
    const [filter, setFilter] = useState(null);

    const handleCategoryChange = (e) => {
        setFilter(e.target.value)
    }
    const sortProduct = filter ? arrayProduct.filter(product => product.category_id === parseInt(filter)) : arrayProduct
    return (
        <div className={'w-full flex flex-col'}>
            <select value={filter} onChange={handleCategoryChange} className="flex justify-around">
                <option value={""}>все заведения</option>
                {categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.categoryName}</option>
                }
                )}
            </select>

            {sortProduct.map((product) => (
                <Cardproduct product={product}/>
            ))}
        </div>
    );
};

export default ObderCategory;
