import { UserType } from '@/app/profile/page';
import { create } from 'zustand';

interface UserStoreI {
    user: UserType | null;
    getUser: () => void;
    addUser: (data: UserType) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

const useUser = create<UserStoreI>()((set, get) => ({
    user: null,
    getUser: async () => {
        const res = await fetch(`/api/user`);
        const data = await res.json();
        if (res.status == 401) {
            set({ user: null });
        }
        if (res.ok) {
            set({ user: data.userdata[0] })
        }
    },
    addUser: (data) => set({ user: data }),
    logout: () => set({ user: null }),
    isLoggedIn: () => !!get().user,
}));

export default useUser;