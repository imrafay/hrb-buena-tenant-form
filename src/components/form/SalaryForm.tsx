import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import RadioButton from '../common/RadioButton';
import Button from '../common/Button';

const SALARY_OPTIONS = [
  { value: '0 - 1.000', label: '0 - 1.000' },
  { value: '1.000 - 2.000', label: '1.000 - 2.000' },
  { value: '2.000 - 3.000', label: '2.000 - 3.000' },
  { value: '3.000 - 4.000', label: '3.000 - 4.000' },
  { value: 'Mehr als 4.000', label: 'Mehr als 4.000' },
];

interface SalaryFormProps {
  onNext: (data: any) => void;
  onPrev: () => void;
}

const SalaryForm: React.FC<SalaryFormProps> = ({ onNext, onPrev }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const formData = useSelector((state: RootState) => state.form);

  React.useEffect(() => {
    if (formData.salary) setValue('salary', formData.salary);
  }, [formData.salary, setValue]);

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-extrabold mb-6 text-gray-800">Select Salary Range</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          {SALARY_OPTIONS.map(option => (
            <RadioButton
              key={option.value}
              value={option.value}
              label={option.label}
              register={register}
            />
          ))}
          {errors.salary && <p className="text-red-500 text-sm mt-1">{(errors.salary as any).message}</p>}
        </div>

        <div className="flex justify-between">
          <Button onClick={onPrev} variant="secondary">
            Back
          </Button>
          <Button type="submit" variant="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SalaryForm;
