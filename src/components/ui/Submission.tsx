import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFormData } from '../../store/formSlice';
import Button from '../common/Button';

const Submission: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNewForm = () => {
        dispatch(resetFormData());
        navigate('/user-info');
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Form Submitted Successfully!</h2>
            <p className="mb-6">Thank you for submitting your application. Your form has been received.</p>

            <Button onClick={handleNewForm} variant="primary">
                Start a New Form
            </Button>

        </div>
    );
};

export default Submission;
