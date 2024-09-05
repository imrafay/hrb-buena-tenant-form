import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Summary from './Summary';
import { updateFormData } from '../store/formSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormWizard: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const currentStep = location.pathname;

    const handleNext = (nextStep: string, data: any) => {
        dispatch(updateFormData(data));
        navigate(nextStep);
    };

    const handlePrev = (prevStep: string) => {
        navigate(prevStep);
    };

    const handleSubmit = (data: any) => {
        dispatch(updateFormData(data));
        toast.success('Form submitted successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            navigate('/submission');
        }, 3000);
    };

    return (
        <>
            <ToastContainer />
            <div className="mb-4 text-sm text-gray-600">
                {currentStep === '/step1' && 'Step 1 of 3'}
                {currentStep === '/step2' && 'Step 2 of 3'}
                {currentStep === '/summary' && 'Step 3 of 3'}
            </div>

            {currentStep === '/' || currentStep === '/step1' ? (
                <Step1 onNext={(data) => handleNext('/step2', data)} />
            ) : currentStep === '/step2' ? (
                <Step2 onNext={(data) => handleNext('/summary', data)} onPrev={() => handlePrev('/step1')} />
            ) : currentStep === '/summary' ? (
                <Summary onPrev={() => handlePrev('/step2')} onSubmit={handleSubmit} />
            ) : null}
        </>
    );
};

export default FormWizard;
