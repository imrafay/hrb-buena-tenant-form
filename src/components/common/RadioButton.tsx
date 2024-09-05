const RadioButton: React.FC<{ value: string; label: string; register: any }> = ({ value, label, register }) => (
    <div className="mb-2">
        <label className="inline-flex items-center">
            <input
                type="radio"
                {...register('salary', { required: 'Salary indication is required' })}
                value={value}
                className="form-radio"
            />
            <span className="ml-2">{label}</span>
        </label>
    </div>
);

export default RadioButton;
