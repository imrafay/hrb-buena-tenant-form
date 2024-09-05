import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface SummaryProps {
    onPrev: () => void;
    onSubmit: (data: any) => void;
}

const Summary: React.FC<SummaryProps> = ({ onPrev, onSubmit }) => {
    const formData = useSelector((state: RootState) => state.form);

    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="mb-4">
                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                <p><strong>Salary Indication:</strong> {formData.salary}</p>
            </div>

            <div className="flex justify-between">
                <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded-md">
                    Back
                </button>
                <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Summary;
