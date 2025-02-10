import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../src/components/organisms/LoginForm';

describe('LoginForm', () => {
    beforeEach(() => {
        // Mock console.log before each test
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        // Restore console.log after each test
        jest.restoreAllMocks();
    });

    test('renders login form and submits', () => {
        render(<LoginForm/>);
        fireEvent.submit(screen.getByRole('button'));
        expect(console.log).toHaveBeenCalledWith('Form submitted');
    });
});