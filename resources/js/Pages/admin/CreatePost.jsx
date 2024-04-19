import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function CreatePost({ auth }) {
    const [message, setMessage] = useState("");
    const { brends, categories, status } = usePage().props;
    const { data, setData, post, errors, processing, progress } = useForm({
        postBrend: 0,
        postCategory: "",
        postTitle: "",
        postDescription: "",
        postRating: 0,
        postPrice: 0,
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
                    <ul>
                        <InputLabel value="Бренды:" htmlFor="postBrend" />

                        {brends.map(({ brend, id }) => (
                            <li className="flex space-x-3" key={id}>
                                <input
                                    id={`postBrend-${id}`}
                                    name="postBrend"
                                    type="radio"
                                    value={id}
                                    checked={data.postBrend === id}
                                    onChange={hundleTarget}
                                />
                                <label htmlFor={`postBrend-${id}`}>
                                    {brend}
                                </label>
                            </li>
                        ))}

                        <InputError message={errors.postBrend} />
                    </ul>

                    <div>
                        <InputLabel value="Категории:" />
                        <select
                            name="postCategory"
                            value={data.postCategory}
                            onChange={hundleTarget}
                        >
                            <option value="">Выберете опцию</option>

                            {categories.map(({ categoryName, id }) => {
                                return (
                                    <option key={id} value={id}>
                                        {categoryName}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError message={errors.postCategory} />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="postTitle"
                            value="Название товара:"
                            className='max-w-full'
                        />

                        <TextInput
                            id="postTitle"
                            name="postTitle"
                            value={data.postTitle}
                            onChange={hundleTarget}
                        />

                        {errors.postTitle && (
                            <InputError message={errors.postTitle} />
                        )}
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="postDescription"
                            value="Описание товара:"
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
                            <InputError message={errors.postDescription} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="postRating" value="Рейтинг:" />

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
                            <InputError message={errors.postRating} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="postPrice" value="Цена:" />

                        <TextInput
                            type="number"
                            id="postPrice"
                            name="postPrice"
                            min={0}
                            value={data.postPrice}
                            onChange={hundleTarget}
                        />

                        {errors.postPrice && (
                            <InputError message={errors.postPrice} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="postResRadio" value="Статус:" />

                        <div className="flex flex-col space-y-2">
                            <label>
                                <input
                                    type="radio"
                                    name="postResRadio"
                                    value="в наличии"
                                    checked={data.postResRadio === "в наличии"}
                                    onChange={(e) =>
                                        setData("postResRadio", e.target.value)
                                    }
                                />

                                <span>в наличии</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="postResRadio"
                                    value="нет в наличии"
                                    checked={
                                        data.postResRadio === "нет в наличии"
                                    }
                                    onChange={(e) =>
                                        setData("postResRadio", e.target.value)
                                    }
                                />

                                <span>нет в наличии</span>
                            </label>
                        </div>

                        {errors.postResRadio && (
                            <InputError message={errors.postResRadio} />
                        )}
                    </div>

                    <div>
                        <InputLabel htmlFor="Картинка" value="image" />

                        <input
                            type="file"
                            name="postImage"
                            onChange={hundleTarget}
                        />

                        {errors.postImage && (
                            <InputError message={errors.postImage} />
                        )}

                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
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
