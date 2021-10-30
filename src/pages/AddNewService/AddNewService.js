import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added New Tour successfully');
                    reset();
                }
            })
    };
    return (
        <div className='mt-5 pt-5'>
            <h2>ADD A NEW SERVICE</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <input {...register("title")} placeholder='Title' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image URL' />
                <input {...register("price")} placeholder='Price' />
                <input type="submit" className='btn-regular text-white fw-bold' />
            </form>
        </div>
    );
};

export default AddNewService;