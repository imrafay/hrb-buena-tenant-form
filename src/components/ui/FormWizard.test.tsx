import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FormWizard from './FormWizard';
import store from '../../store/index';

describe('FormWizard Component', () => {
    test('renders FormWizard component without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <FormWizard />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Share Your Info')).toBeInTheDocument();
    });
});
