const ProgressBar: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${currentStep >= 1 ? 'text-white bg-teal-500' : 'text-teal-500 bg-teal-200'}`}>
                        Step 1
                    </span>
                </div>
                <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${currentStep >= 2 ? 'text-white bg-teal-500' : 'text-teal-500 bg-teal-200'}`}>
                        Step 2
                    </span>
                </div>
                <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${currentStep === 3 ? 'text-white bg-teal-500' : 'text-teal-500 bg-teal-200'}`}>
                        Summary
                    </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
                <div
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;