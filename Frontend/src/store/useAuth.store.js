import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuth = create((set) => ({
    authUser: null,
    isSignUp: false,
    isLoggingIn: false,
    isUpdating: false,
    
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');

            set({ authUser: res.data });
        } catch (error) {
            console.log('Error in checkAuth', error);
            set({ authUser: null });           
        } finally {
            set({ isCheckingAuth: false });
        }
    }
}));