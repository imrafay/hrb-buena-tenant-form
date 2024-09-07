import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import UserInfo from '../form/UserInfoForm';
import SalaryForm from '../form/SalaryForm';
import Summary from '../form/Summary';
import { updateFormData } from '../../store/formSlice';
import { RootState } from '../../store';
import ProgressBar from './ProgressBar';
import '../../style/formWizard.css';

const FormWizard: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const formData = useSelector((state: RootState) => state.form); // Access form data

    const [showCurrentStep, setShowCurrentStep] = useState(true);
    const currentStep = location.pathname;
    const nodeRef = useRef(null);

    // Automatically redirect to /user-info if the path is '/'
    useEffect(() => {
        if (currentStep === '/') {
            navigate('/user-info');
        }
    }, [currentStep, navigate]);

    // Check if previous steps are completed
    useEffect(() => {
        if (currentStep === '/salary-selection' && (!formData.fullName || !formData.email)) {
            navigate('/user-info');
        } else if (currentStep === '/summary' && (!formData.fullName || !formData.email || !formData.salary)) {
            navigate('/user-info');
        }
    }, [currentStep, formData, navigate]);

    const handleNext = (nextStep: string, data: any) => {
        setShowCurrentStep(false);
        setTimeout(() => {
            dispatch(updateFormData(data));
            navigate(nextStep);
            setShowCurrentStep(true);
        }, 300);
    };

    const handlePrev = (prevStep: string) => {
        setShowCurrentStep(false);
        setTimeout(() => {
            navigate(prevStep);
            setShowCurrentStep(true);
        }, 300);
    };

    const handleSubmit = (data: any) => {
        dispatch(updateFormData(data));
        navigate('/submission');
    };

    const getStepNumber = () => {
        switch (currentStep) {
            case '/user-info':
                return 1;
            case '/salary-selection':
                return 2;
            case '/summary':
                return 3;
            default:
                return 1;
        }
    };

    const getCurrentStepComponent = () => {
        switch (currentStep) {
            case '/user-info':
                return (
                    <UserInfo onNext={(data) => handleNext('/salary-selection', data)} />
                );
            case '/salary-selection':
                return (
                    <SalaryForm onNext={(data) => handleNext('/summary', data)} onPrev={() => handlePrev('/user-info')} />
                );
            case '/summary':
                return (
                    <Summary onPrev={() => handlePrev('/salary-selection')} onSubmit={handleSubmit} />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                <ProgressBar currentStep={getStepNumber()} />
            </div>

            <CSSTransition
                in={showCurrentStep}
                timeout={300}
                classNames="fade"
                nodeRef={nodeRef}
                unmountOnExit
            >
                <div ref={nodeRef} className="form-step">
                    {getCurrentStepComponent()}
                </div>
            </CSSTransition>
        </>
    );
};

export default FormWizard;
