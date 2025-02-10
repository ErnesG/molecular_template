

interface UserProfileProps {
    name: string;
    email: string;
}


export function UserProfile({name, email}: UserProfileProps) {
    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    )
}