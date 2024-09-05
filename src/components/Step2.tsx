import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Step2Props {
  onNext: (data: any) => void;
  onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  const { register, handleSubmit, setValue } = useForm();

  // Retrieve form data from Redux store
  const formData = useSelector((state: RootState) => state.form);

  // Pre-fill the form fields with data from the store
  React.useEffect(() => {
    if (formData.phoneNumber) setValue('phoneNumber', formData.phoneNumber);
    if (formData.salary) setValue('salary', formData.salary);
  }, [formData, setValue]);

  const onSubmit = (data: any) => {
    onNext(data);  // Pass data to next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input {...register('phoneNumber')} className="mt-1 p-2 border rounded w-full" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Salary Indication</label>
        <div className="mt-1">
          <label className="block">
            <input {...register('salary')} type="radio" value="0 - 1.000" required /> 0 - 1.000
          </label>
          <label className="block">
            <input {...register('salary')} type="radio" value="1.000 - 2.000" required /> 1.000 - 2.000
          </label>
          <label className="block">
            <input {...register('salary')} type="radio" value="2.000 - 3.000" required /> 2.000 - 3.000
          </label>
          <label className="block">
            <input {...register('salary')} type="radio" value="3.000 - 4.000" required /> 3.000 - 4.000
          </label>
          <label className="block">
            <input {...register('salary')} type="radio" value="Mehr als 4.000" required /> Mehr als 4.000
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
