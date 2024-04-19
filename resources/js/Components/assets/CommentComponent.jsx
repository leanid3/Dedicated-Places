import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CommentComponent({ auth, productId }) {
    const [message, setMessage] = useState();
    const { data, setData, post, errors, processing } = useForm({
        comment: "",
        product_id: productId,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("comments.product"), {
            onSuccess: () => {
                setMessage("Отзыв добавлен");
            },
            onError: (userNotAuth) => {
                setMessage(userNotAuth);
            },
        });
    };
    return (
        <div className="flex justify-center mb-8">
            <div className="max-w-lg w-full border border-gray-200 rounded-md p-4">
                <div className="flex items-center mb-4">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={auth.user.avatar}
                        alt={auth.user.title}
                    />
                    <span className="ml-2 text-lg font-semibold">
                        {auth.user.name}
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="comment" className="text-gray-700">
                            Ваш отзыв:
                        </label>
                        <textarea
                            name="comment"
                            cols="30"
                            rows="3"
                            placeholder="Ваш отзыв..."
                            value={data.comment}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2"
                        ></textarea>
                        {errors.comment && (
                            <div className="text-red-500">{errors.comment}</div>
                        )}
                    </div>
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4"
                        disabled={processing}
                        type="submit"
                    >
                        Отправить
                    </button>
                    {message && (
                        <div className="mt-2 text-green-500">{message}</div>
                    )}
                </form>
            </div>
        </div>
    );
}
