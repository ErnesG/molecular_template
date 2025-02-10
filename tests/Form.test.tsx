// Form.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../src/components/molecules/Form';


describe('Form', () => {
    test('calls onSubmit when form is submitted', () => {
        const mockOnSubmit = jest.fn();
        render(<Form onSubmit={mockOnSubmit} />);
        
        fireEvent.submit(screen.getByRole('button'));
        expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('renders input and submit button', () => {
        render(<Form onSubmit={() => {}} />);
        
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Submit');
    });
});