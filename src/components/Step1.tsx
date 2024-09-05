import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Step1Props {
    onNext: (data: any) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    const { register, handleSubmit, setValue } = useForm();
    const formData = useSelector((state: RootState) => state.form);

    React.useEffect(() => {
        if (formData.fullName) setValue('fullName', formData.fullName);
        if (formData.email) setValue('email', formData.email);
    }, [formData, setValue]);

    const onSubmit = (data: any) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input {...register('fullName')} className="mt-1 p-2 border rounded w-full" required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input {...register('email')} type="email" className="mt-1 p-2 border rounded w-full" required />
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Next
                </button>
            </div>
        </form>
    );
};

export default Step1;
