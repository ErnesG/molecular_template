import { LoginForm } from "../organisms/LoginForm";
import { UserProfile } from "../organisms/UserProfile";

export function Home() {
    return (
        <div className="max-w-lg mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold"> Demo page </h1>
            <LoginForm/>
            <UserProfile name="James Bons" email="james.bond@mantaraydev.com"/>

        </div>
    )
}