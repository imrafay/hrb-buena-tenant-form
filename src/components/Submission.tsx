import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFormData } from '../store/formSlice';

const Submission: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNewForm = () => {
        dispatch(resetFormData());
        navigate('/step1');
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Form Submitted Successfully!</h2>
            <p className="mb-6">Thank you for submitting your application. Your form has been received.</p>
            <button
                onClick={handleNewForm}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Start a New Form
            </button>
        </div>
    );
};

export default Submission;
