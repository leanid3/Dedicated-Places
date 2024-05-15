import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function CreatePost({ auth }) {
    const [message, setMessage] = useState("");
    const { categories, status } = usePage().props;
    const { data, setData, post, errors, processing, progress } = useForm({
        postCategory: "",
        postTitle: "",
        postPhone: "",
        postSite: "",
        postAddress:"",
        postDescription: "",
        postRating: 0,
        postResRadio: "",
        postImage: null,
    });

    const hundleTarget = (e) => {
        const { name, type } = e.target;
        let res = 0;

        switch (type) {
            case "file":
                res = e.target.files[0];
                break;

            case "radio":
            case "select-one":
                res = Number.parseInt(e.target.value, 10);
                break;

            default:
                res = e.target.value;
        }
        setData(name, res);
    };
    const Sumbit = (e) => {
        e.preventDefault();
        post(route("product.store"), {
            onSuccess: () => {
                setMessage("Продукт добавлен");
            },

            onError: () => {
                setMessage("Не удалось добавить продукт");
            },
        });
    };
    return (
        <AdminLayout user={auth}>
            <Head title="Cоздания товара" />
            <main className="mx-auto my-14 container flex flex-col items-center">
                <form
                    onSubmit={Sumbit}
                    className="flex flex-col w-1/3 space-y-10 rounded-lg bg-lightgrey/45 shadow-md p-5"
                >
                    <h2 className="text-xl text-center">
                        Форма создания товара
                    </h2>

                    <div>
                        <InputLabel value="Категории:"/>
                        <select
                            name="postCategory"
                            value={data.postCategory}
                            onChange={hundleTarget}
                        >
                            <option value="">Выберете опцию</option>

                            {categories.map(({categoryName, id}) => {
                                return (
                                    <option key={id} value={id}>
                                        {categoryName}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError message={errors.postCategory}/>
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="postTitle"
                            value="Название заведения:"
                            className='max-w-full'
                        />

                        <TextInput
                            id="postTitle"
                            name="postTitle"
                            value={data.postTitle}
                            onChange={hundleTarget}
                        />

                        {errors.postTitle && (
                            <InputError message={errors.postTitle}/>
                        )}
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="postDescription"
                            value="Описание заведения:"
                        />

                        <textarea
                            cols={30}
                            rows={5}
                            id="postDescription"
                            name="postDescription"
                            value={data.postDescription}
                            onChange={hundleTarget}
                        />

                        {errors.postDescription && (
                            <InputError message={errors.postDescription}/>
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="postRating" value="Рейтинг:"/>

                        <TextInput
                            type="number"
                            id="postRating"
                            name="postRating"
                            min={0}
                            max={5}
                            value={data.postRating}
                            onChange={hundleTarget}
                        />

                        {errors.postRating && (
                            <InputError message={errors.postRating}/>
                        )}
                    </div>


                    <div>
                        <InputLabel htmlFor="Картинка" value="image"/>

                        <input
                            type="file"
                            name="postImage"
                            onChange={hundleTarget}
                        />

                        {errors.postImage && (
                            <InputError message={errors.postImage}/>
                        )}

                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="postPhone"
                            value="Телефон:"
                            className='max-w-full'
                        />

                        <TextInput
                            id="postPhone"
                            name="postPhone"
                            value={data.postPhone}
                            onChange={hundleTarget}
                        />

                        {errors.postPhone && (
                            <InputError message={errors.postPhone}/>
                        )}
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="postSite"
                            value="Сайт:"
                            className='max-w-full'
                        />

                        <TextInput
                            id="postSite"
                            name="postSite"
                            value={data.postSite}
                            onChange={hundleTarget}
                        />

                        {errors.postSite && (
                            <InputError message={errors.postSite}/>
                        )}
                    </div>   <div>
                        <InputLabel
                            htmlFor="postAddress"
                            value="Адрес:"
                            className='max-w-full'
                        />

                        <TextInput
                            id="postAddress"
                            name="postAddress"
                            value={data.postAddress}
                            onChange={hundleTarget}
                        />

                        {errors.postAddress && (
                            <InputError message={errors.postAddress}/>
                        )}
                    </div>

                    <PrimaryButton
                        className=" w-44 text-center"
                        type="submit"
                        disabled={processing}
                    >
                        Создать продукт
                    </PrimaryButton>

                    {message && <div className="text-red-500">{message}</div>}
                </form>
            </main>
        </AdminLayout>
    );
}
