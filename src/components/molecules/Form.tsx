import { FormEvent } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface FormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function Form({onSubmit}: FormProps) {   
    return (
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <Input type="text" placeholder="Enter text"/>
            <Button label="Submit" type="submit" />
        </form>
    )

}