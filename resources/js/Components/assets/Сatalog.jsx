import { Link, router } from "@inertiajs/react";
import Cardproduct from "./Cardproduct";

function Catalog({ arrayProduct, handlePageChange }) {
    return (
        // отображение карточек товара
        <div className="max-w-full">
            <div className="mt-4 mx-4 md:mx-0 gap-5 flex flex-col">
                {arrayProduct.data.map((product) => (
                    <Cardproduct key={product.id} product={product} />
                ))}
            </div>
            {/*пашинация страниц*/}
            <div className="flex items-center justify-center mt-6">
                {arrayProduct.links.map((link) => (
                    <button
                        onClick={() => handlePageChange(link.label)}
                        className={`border-2 border-darkblue p-2 rounded-lg text-center mx-2 ${link.active ? "bg-lightgrey text-darkblue" : "text-lightgrey bg-darkblue hover:bg-darkblue/70"}`}
                        disabled={link.active === true}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
