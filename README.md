# React + TypeScript + Vite Project with Atomic Design

## Project Overview
This project is built using React, TypeScript, and Vite, following the Atomic Design pattern. It includes a complete testing setup with Jest and React Testing Library.

## Architecture

### Atomic Design Pattern
The components are organized following the Atomic Design methodology:

1. **Atoms**: Basic building blocks
   - Button
   - Input
   - Basic UI elements

2. **Molecules**: Simple combinations of atoms
   - Form
   - Simple composite components

3. **Organisms**: Complex UI components
   - LoginForm
   - UserProfile

4. **Pages**: Full page layouts
   - Home

## Testing Setup

### Configuration
The project uses Jest with React Testing Library for testing. Key configurations:

1. **Jest Configuration**
```typescript
export default {
    preset: "ts-jest",
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: 'tsconfig.test.json'
        }]
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node']
}
```

2. **TypeScript Test Configuration**
```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": ["src", "tests"]
}
```

### Writing Tests
Example test structure:

```typescript
import { render, screen } from '@testing-library/react';

describe('Component', () => {
    test('should render correctly', () => {
        render(<Component />);
        expect(screen.getByText('text')).toBeInTheDocument();
    });
});
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- Jest
- React Testing Library
- ESLint

## Project Structure
```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── pages/
├── tests/
├── App.tsx
└── main.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm run test
   ```

## Testing Guidelines

1. Each component should have its own test file
2. Follow the AAA pattern (Arrange, Act, Assert)
3. Use React Testing Library's queries in this order:
   - getByRole
   - getByLabelText
   - getByPlaceholderText
   - getByText
   - getByDisplayValue

## Contributing

1. Follow the atomic design pattern
2. Write tests for new components
3. Ensure all tests pass before submitting PR
4. Follow ESLint rules