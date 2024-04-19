import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function UpdateDataUser({ user }) {
    const [message, setMessage] = useState();
    const { data, setData, errors, post, processing, progress } = useForm({
        name: user.name,
        email: user.email,
        avatar: null,
    });

    const hundleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
            setData(name, e.target.files[0]);
        } else {
            setData(name, value);
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        post(route("profile.update"), {
            onSuccess: () => {
                setMessage("данные обновлены");
            },
            onError: () => {
                setMessage("данные не обновленны, проверте поля");
            },
        });
    };

    return (
        <form onSubmit={handleSumbit}>
            <div className="mb-4">
                <InputLabel htmlfor="name" value="Имя:" />

                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={hundleChange}
                />

                <InputError message={errors.name} />
            </div>

            <div className="mb-4">
                <InputLabel htmlfor="email" value="Почта:" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    onChange={hundleChange}
                />

                <InputError message={errors.email} />
            </div>

            <div className="mb-4">
                <InputLabel htmlfor="avatar" value="Аватар:" />

                <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    className="mt-1 block w-full"
                    onChange={hundleChange}
                />

                <img
                    className=" w-20 h-20 rounded-lg"
                    src={user.avatar}
                    alt={user.avatar}
                />

                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}

                <InputError message={errors.avatar} />
            </div>

            <PrimaryButton disabled={processing}>сохранить</PrimaryButton>
            {message && <InputError nessage={message} />}
        </form>
    );
}
