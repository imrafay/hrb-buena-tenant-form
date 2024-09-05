import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import UserInfo from '../form/UserInfoForm';
import SalaryForm from '../form/SalaryForm';
import Summary from '../form/Summary';
import { updateFormData } from '../../store/formSlice';
import ProgressBar from './ProgressBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../style/formWizard.css';

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

    const steps = [
        { path: '/user-info', component: <UserInfo onNext={(data) => handleNext('/salary-selection', data)} /> },
        { path: '/salary-selection', component: <SalaryForm onNext={(data) => handleNext('/summary', data)} onPrev={() => handlePrev('/user-info')} /> },
        { path: '/summary', component: <Summary onPrev={() => handlePrev('/salary-selection')} onSubmit={handleSubmit} /> }
    ];

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                <ProgressBar currentStep={getStepNumber()} />
            </div>
            <TransitionGroup>
                {steps.map(({ path, component }) => (
                    <CSSTransition
                        key={path}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="form-step">
                            {currentStep === path && component}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
};

export default FormWizard;
