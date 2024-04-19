import Layout from "@/Layouts/Layout.jsx";
import Myslider from "../Components/assets/slider/Myslider.jsx";
import Catalog from "../Components/assets/Сatalog.jsx";
import { Head, usePage } from "@inertiajs/react";
export default function Mainpage({ arrayProduct, auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Главная страница" />
            <section className="flex flex-col items-center">
                <Catalog arrayProduct={arrayProduct} />
                <div  className="w-full md:w-[90%] lg:w-[80%] mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">О нас</h2>
                    <p className="text-gray-700">
                        Мы специализируемся на продаже качественных
                        квадрокоптеров по доступным ценам. Наш магазин
                        предлагает широкий ассортимент дронов различных моделей
                        и брендов для различных целей, включая любительское
                        использование, профессиональное фото- и видеосъемку, а
                        также коммерческие цели.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
