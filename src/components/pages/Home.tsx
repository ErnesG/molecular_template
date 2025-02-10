import { LoginForm } from "../organisms/LoginForm";
import { UserProfile } from "../organisms/UserProfile";

export function Home() {
    const profiles = [
        {name: "Andrea Sierra", email: "andreit@gmail.com"},
        {name: "Dumar G", email: "dumarfit@gmail.com"},
        {name: "Frank Suz", email: "frank.suz@hotmail.com"},
        {name: "Delba San Juan", email: "delba.sanjuan@outlook.com"},
        {name: "Erik Garcia", email: "erik.garcia@me.com"},
        {name: "Karla Souza", email: "karla@cine.com"},
        {name: "James Stutgart", email: "sturgart@f1.com"},
    ]
    return (
        <div className="max-w-lg mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold"> Demo page </h1>
            <LoginForm/>
            {
                profiles.map((p, index)=> (
                    <UserProfile key={index} name={p.name} email={p.email}/>
                ))
            }
            

        </div>
    )
}