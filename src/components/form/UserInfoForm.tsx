import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Button from '../common/Button';

interface UserInfoProps {
    onNext: (data: any) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ onNext }) => {
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm();
    const formData = useSelector((state: RootState) => state.form);

    React.useEffect(() => {
        if (formData.fullName) setValue('fullName', formData.fullName);
        if (formData.email) setValue('email', formData.email);
        if (formData.phoneNumber) setValue('phoneNumber', formData.phoneNumber);

    }, [formData, setValue]);

    const onSubmit = (data: any) => {
        onNext(data);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-extrabold mb-6 text-gray-800">Share Your Info</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-1">
                        Full Name
                    </label>
                    <input
                        id="fullName" // Ensure this matches the label's htmlFor
                        {...register('fullName', { required: 'Full name is required' })}
                        className={`mt-1 p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded w-full focus:ring-2 focus:ring-teal-500 focus:outline-none`}
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{(errors.fullName as any).message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                        Email
                    </label>
                    <input
                        id="email" // Ensure this matches the label's htmlFor
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Please enter a valid email address'
                            }
                        })}
                        className={`mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full focus:ring-2 focus:ring-teal-500 focus:outline-none`}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{(errors.email as any).message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                    </label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: 'Phone number is required' }}
                        render={({ field }) => (
                            <PhoneInput
                                id="phoneNumber" // Ensure this matches the label's htmlFor
                                {...field}
                                defaultCountry="US"
                                className={`mt-1 p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full focus:ring-2 focus:ring-teal-500 focus:outline-none`}
                                placeholder="Enter your phone number"
                            />
                        )}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{(errors.phoneNumber as any).message}</p>}
                </div>

                <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UserInfo;
