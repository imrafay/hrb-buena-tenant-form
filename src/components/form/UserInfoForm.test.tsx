import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import UserInfo from './UserInfoForm';
import store from '../../store'; // Ensure this points to your actual store

describe('UserInfo Component', () => {
    test('renders UserInfo component without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UserInfo onNext={jest.fn()} />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Next/i)).toBeInTheDocument();
    });

    test('displays validation errors if form is submitted without required fields', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UserInfo onNext={jest.fn()} />
                </MemoryRouter>
            </Provider>
        );

        // Simulate form submission without filling in required fields
        fireEvent.click(screen.getByText(/Next/i));

        // Check if validation errors are displayed for each field
        expect(await screen.findByText((content, element) => content.includes('Full name is required'))).toBeInTheDocument();
        expect(await screen.findByText((content, element) => content.includes('Email is required'))).toBeInTheDocument();
        expect(await screen.findByText((content, element) => content.includes('Phone number is required'))).toBeInTheDocument();
    });
});
