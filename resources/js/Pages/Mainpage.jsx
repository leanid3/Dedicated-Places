import Layout from "@/Layouts/Layout.jsx";
import Catalog from "../Components/assets/Сatalog.jsx";
import { Head, usePage } from "@inertiajs/react";
import InputSearch from "@/Components/InputSearch.jsx";
import ObderCategory from "@/Components/ObderCategory.jsx";
import OrderPagenateCategory from "@/Components/OrderPagenateCategory.jsx";
export default function Mainpage({ arrayProduct, categories, showCategories, auth }) {

    return (
        <Layout auth={auth}>
            <Head title="Главная страница" />
            <section className="flex flex-col ">
                <div style={{backgroundImage: "url('/storage/assets/backgroundmagefirst.png')"}}
                     className="flex flex-col lg:justify-around justify-center items-center px-7 bg-center bg-cover min-h-screen w-full">
                    <div className='lg:w-1/3 flex flex-col justify-around'>
                        <div className="rounded-lg shadow-lg bg-white">
                            <h2 className="text-2xl w-full font-semibold text-center py-5 bg-gray-200 rounded-t-lg mb-4">Уважаемые
                                пользователи!</h2>

                            <div className='p-4'>
                                <p className="text-black">
                                    Этот сайт сделан специально для людей с ограниченными возможностями здоровья,
                                    которые часто сталкиваются с препятствиями при посещении общественных мест. Здесь
                                    собрана информация о заведениях, комфортных для посещения людьми с инвалидностью.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-4 flex items-center w-full lg:w-1/3">
                        <InputSearch
                            className="flex bg-white justify-between px-4 rounded-lg w-full border-2 shadow-lg"/>
                    </div>
                </div>
                <OrderPagenateCategory selectedCategory={categories} products={arrayProduct} showCategories={showCategories}/>
            </section>
        </Layout>
    );
}
