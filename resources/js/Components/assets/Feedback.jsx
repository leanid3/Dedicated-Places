import React, {useState} from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {useForm} from "@inertiajs/react";
function Feedback({auth, params} ) {

const [selectValue, setSelectValue] = useState("")

    const [data, setData, post, errors ] = useForm({
        message: "",
        param: "",
        auth: auth ? auth.email : "",
    })

    const handleTarget = (e) => {
      const {value, name} = e.target
        setData(name, value)
    };

    const handleSubmit = () => {
        e.preventDefault();
        post(route("comments.product"))
    }
    return (
        <div className="container rounded-lg">
            <form className="p-3 w-full flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="">
                    <select name="nosology" id="" value={data.param} onChange={handleTarget}>
                        <option value="" selected="selected">не выбранно</option>
                        {params.map((param, index)  =>
                        <option key={index} name={} value={param.id}>{param.name}</option>
                        )}
                    </select>
                </div>
                <div className="">
                    <h4 className="text-md">Ваш отзыв</h4>
                    <textarea name="message" id="" cols="20" rows="5"></textarea>
                    <button className="py-2 px-3 bg-darkblue text-white rounded-lg"
                            type='submit'>Оставить отзыв
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Feedback;
