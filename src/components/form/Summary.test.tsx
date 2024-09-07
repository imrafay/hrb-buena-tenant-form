import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Summary from './Summary';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Summary Component', () => {
    let store: any;
    let mockOnPrev: jest.Mock;
    let mockOnSubmit: jest.Mock;

    beforeEach(() => {
        store = mockStore({
            form: {
                fullName: 'Jon Snow',
                email: 'Jon@snow.com',
                phoneNumber: '+1234567890',
                salary: '2.000 - 3.000',
            },
        });
        mockOnPrev = jest.fn();
        mockOnSubmit = jest.fn();
        toast.success = jest.fn();
    });

    test('renders form data correctly', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Summary onPrev={mockOnPrev} onSubmit={mockOnSubmit} />
                </MemoryRouter>
            </Provider>
        );

        // Check Form data is rendered
        expect(screen.getByText('Jon Snow')).toBeInTheDocument();
        expect(screen.getByText('Jon@snow.com')).toBeInTheDocument();
        expect(screen.getByText('+1234567890')).toBeInTheDocument();
        expect(screen.getByText('2.000 - 3.000')).toBeInTheDocument();
    });

    test('calls onPrev when Back button is clicked', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Summary onPrev={mockOnPrev} onSubmit={mockOnSubmit} />
                </MemoryRouter>
            </Provider>
        );

        // Clicking the Back button
        fireEvent.click(screen.getByText(/Back/i));

        // onPrev was called
        expect(mockOnPrev).toHaveBeenCalledTimes(1);
    });

    test('calls onSubmit when Submit button is clicked', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Summary onPrev={mockOnPrev} onSubmit={mockOnSubmit} />
                </MemoryRouter>
            </Provider>
        );

        // Clicking the Submit button
        fireEvent.click(screen.getByText(/Submit/i));

        // Check if onSubmit was called with the correct data
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            fullName: 'Jon Snow',
            email: 'Jon@snow.com',
            phoneNumber: '+1234567890',
            salary: '2.000 - 3.000',
        });

        // Check Toast was shown
        expect(toast.success).toHaveBeenCalledWith('Form submitted successfully!', {
            position: "top-right",
            autoClose: 2000,
        });
    });
});
