import Layout from "@/Layouts/Layout.jsx";
import Myslider from "../Components/assets/slider/Myslider.jsx";
import Catalog from "../Components/assets/Сatalog.jsx";
import { Head, usePage } from "@inertiajs/react";
import InputSearch from "@/Components/InputSearch.jsx";
export default function Mainpage({ arrayProduct, auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Главная страница" />
            <section className="flex flex-col ">
                <div style={{backgroundImage: "url('/storage/assets/backgroundmagefirst.png')"}} className=' container flex justify-end items-center px-7 bg-center bg-cover h-screen w-screen'>
                    <div className='w-1/3 h-full flex  flex-col justify-around'>
                        <div className="rounded-lg shadow-lg  bg-white">
                            <h2 className="text-2xl w-full font-semibold text-center py-5 bg-gray-200 rounded-t-lg mb-4">Уважаемые пользователи!</h2>

                            <div className='p-4'>
                                <p className="text-black">
                                Этот сайт сделан специально для людей
                                с ограниченными возможностями здоровья, которые
                                часто сталкиваются с препятствиями при посещении
                                общественных мест. Здесь собрана информация
                                о заведениях, комфортных для посещения людьми
                                с инвалидностью.
                                </p>
                            </div>
                        </div>
                        <InputSearch className="flex bg-white justify-between px-4 rounded-lg w-full border-2 shadow-lg *:bg-while"/>
                    </div>
                </div>
                <Catalog arrayProduct={arrayProduct} />

            </section>
        </Layout>
    );
}
