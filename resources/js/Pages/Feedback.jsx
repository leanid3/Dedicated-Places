import React, {useState} from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputError from "@/Components/InputError.jsx";

const Feedback = ({auth}) => {

    const [message, setMessage] = useState('');

    const {data, setData, errors, processing, progress, post} = useForm({
        email: auth ? auth.email : '',
        title: '',
        description: '',
    })
    const  handleChange = e => {
        const {name, value} = e.target;
        setData(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route("feedbackPost"), {
            onSuccess: () =>{
                setMessage('сообщение отправленно')
            },
            onError: () => {
                setMessage('не удалось отправить сообщение')
            }
        })
    }
    return (
        <Layout auth={auth}>
            <div className="w-full flex flex-col items-center ">
                <h2 className='text-center'>Форма обратной связь</h2>
                <form className='w-1/3 p-3 flex flex-col border-2 rounded-lg border-darkblue' onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <InputLabel className='ml-2 text-lg' htmlFor="email">Почта:</InputLabel>
                        <TextInput name='email' type="email" className='w-full' onChange={handleChange} value={data.email} />
                        <InputError message={errors.email}/>
                    </div>
                    <div className="mb-2">
                        <InputLabel className='ml-2 text-lg' htmlFor="title">Тема сообщения:</InputLabel>
                        <TextInput name='title' type="text" className='w-full' onChange={handleChange} value={data.title} />
                        <InputError message={errors.title}/>
                    </div>
                    <div className="mb-2">
                        <InputLabel className='ml-2 text-lg' htmlFor="descriptiom">Сообщение:</InputLabel>
                        <textarea cols='50' rows='5' name='description'  onChange={handleChange} value={data.description} />
                        <InputError message={errors.description}/>
                    </div>
                        <PrimaryButton className={'float-right'} type='submit' disabled={processing}>Отправить</PrimaryButton>
                        <InputError  className={'float-right'}  message={message}/>
                </form>
            </div>
        </Layout>
    );
};

export default Feedback;
