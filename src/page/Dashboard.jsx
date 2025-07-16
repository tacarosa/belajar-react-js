import { useEffect, useRef } from "react";
import useUserStore from "../store/useUserStore";

const Dashboard = () => {
    const initialized = useRef(false);
    const { users, setAllUsers } = useUserStore();

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            setAllUsers();
        }
    }, []);

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <table className="min-w-full mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nama</th>
                        <th className="px-4 py-2">Avatar</th>
                        <th className="px-4 py-2">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.avatar}</td>
                            <td className="border px-4 py-2">
                                {user.createdAt}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
