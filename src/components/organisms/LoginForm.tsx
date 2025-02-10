import { FormEvent } from "react";
import { Form } from "../molecules/Form";



export function LoginForm() {
    // add your additional validations, state managment logic, whatever you want.

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
    };
    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">Login</h2>
            <Form onSubmit={handleSubmit}/>
        </div>
    )
}