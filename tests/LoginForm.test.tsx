import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../src/components/organisms/LoginForm';
import React from 'react';

test('renders login form and submits', ()=> {
    render(<LoginForm/>);
    fireEvent.submit(screen.getByRole('button'));
    expect(console.log).toHaveBeenCalledWith('Form submitted');
})