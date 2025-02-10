import { render, screen } from "@testing-library/react"
import {Button} from '../src/components/atoms/Button'
import React from "react";
test('renders button with label', ()=> {
    render(<Button label="click me"/>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
})