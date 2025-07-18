import { create } from "zustand";
import axios from "axios";

async function fetchAllUser() {
    try {
        const response = await axios.get(
            "https://686b7983e559eba90872b037.mockapi.io/api/v1/dummy"
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

const useUserStore = create((set) => ({
    users: {
        userData: [],
        isLoading: false,
    },
    setAllUsers: async () => {
        set((state) => ({
            users: {
                ...state.users,
                isLoading: true,
            },
        }));

        try {
            const allUser = await fetchAllUser();
            set((state) => ({
                users: {
                    ...state.users,
                    userData: allUser,
                    isLoading: false,
                },
            }));
        } catch (error) {
            console.error("Error fetching users:", error);
            set((state) => ({
                users: {
                    ...state.users,
                    isLoading: false,
                },
            }));
        }
    },
}));

export default useUserStore;
