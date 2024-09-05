import { createSlice } from '@reduxjs/toolkit';

interface FormState {
    fullName: string;
    email: string;
    phoneNumber: string;
    salary: string;
}

const initialState: FormState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetFormData: () => {
            return initialState;
        },
    },
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
