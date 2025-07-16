import { create } from "zustand";
import axios from "axios";

async function fetchAllUser() {
    try {
        const response = await axios.get("https://686b7983e559eba90872b037.mockapi.io/api/v1/dummy");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

const useUserStore = create((set) => ({
    users: [],
    setAllUsers: async () => {
        const allUser = await fetchAllUser();        
        set({ users: allUser });
    },
}));

export default useUserStore;
