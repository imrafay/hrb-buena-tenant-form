import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SalaryForm from './SalaryForm';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';

describe('SalaryForm Component', () => {
    test('renders SalaryForm component and submits form data', async () => {
        const mockOnNext = jest.fn();
        const mockOnPrev = jest.fn();

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SalaryForm onNext={mockOnNext} onPrev={mockOnPrev} />
                </MemoryRouter>
            </Provider>
        );
        // Simulate selecting a salary option
        fireEvent.click(screen.getByLabelText(/2.000 - 3.000/i));

        // Ensure the selection is applied by using waitFor
        await waitFor(() => expect(screen.getByLabelText(/2.000 - 3.000/i)).toBeChecked());

        // Simulate form submission
        fireEvent.click(screen.getByText(/Next/i));

        // Ensure onNext is called after form submission
        await waitFor(() => expect(mockOnNext).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(mockOnNext).toHaveBeenCalledWith({ salary: '2.000 - 3.000' }));
    });

    test('calls onPrev when Back button is clicked', () => {
        const mockOnNext = jest.fn();
        const mockOnPrev = jest.fn();

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SalaryForm onNext={mockOnNext} onPrev={mockOnPrev} />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.click(screen.getByText(/Back/i));
        expect(mockOnPrev).toHaveBeenCalledTimes(1);
    });
});
