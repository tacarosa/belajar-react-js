import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import Button from "../components/button/Button";

const Dashboard = () => {
    const navigate = useNavigate();
    const initialized = useRef(false);
    const { users, setAllUsers } = useUserStore();

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            setAllUsers();
        }
    }, []);

    return (
        <div className="px-10 pt-10 max-md:px-40">
            <h1>Dashboard Daftar Pengguna </h1>
            <Button
                className="!w-40 bg-sky-400 rounded-xl text-white font-semibold !text-lg"
                text="Kembali"
                onClick={() => navigate("/")}
            />

            <table className="min-w-full mt-4 text-center">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border-y-2 px-4 py-2">ID</th>
                        <th className="border-y-2 px-4 py-2">Nama</th>
                        <th className="border-y-2 px-4 py-2">Avatar</th>
                        <th className="border-y-2 px-4 py-2">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.userData.map((user) => (
                        <tr key={user.id}>
                            <td className="border-b-1 px-4 py-2">{user.id}</td>
                            <td className="border-b-1 px-4 py-2">
                                {user.name}
                            </td>
                            <td className="border-b-1 px-4 py-2">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full m-auto"
                                />
                            </td>
                            <td className="border-b-1 px-4 py-2">
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
