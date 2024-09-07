import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Button from '../common/Button';
import { toast } from 'react-toastify';

interface SummaryProps {
    onPrev: () => void;
    onSubmit: (data: any) => void;
}

const Summary: React.FC<SummaryProps> = ({ onPrev, onSubmit }) => {
    const formData = useSelector((state: RootState) => state.form);
    const handleSubmit = () => {
        onSubmit(formData);
        toast.success('Form submitted successfully!', {
            position: "top-right",
            autoClose: 2000
        });
        console.log("Form submitted successfully");
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-xl font-extrabold mb-6 text-gray-800">Form Summary</h2>
                <div className="mb-4">
                    <p className="block text-gray-700 mb-1"><strong>Full Name:</strong></p>
                    <p className=" text-gray-600">{formData.fullName}</p>
                </div>
                <div className="mb-4">
                    <p className="text-md font-medium text-gray-700"><strong>Email:</strong></p>
                    <p className=" text-gray-600">{formData.email}</p>
                </div>
                <div className="mb-4">
                    <p className="text-md font-medium text-gray-700"><strong>Phone Number:</strong></p>
                    <p className=" text-gray-600">{formData.phoneNumber}</p>
                </div>
                <div className="mb-4">
                    <p className="text-md font-medium text-gray-700"><strong>Salary Indication:</strong></p>
                    <p className=" text-gray-600">{formData.salary}</p>
                </div>
            </div>
            <div className="flex justify-between mt-10">
                <Button onClick={onPrev} variant="secondary">
                    Back
                </Button>
                <Button type="button" onClick={handleSubmit} variant="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Summary;
