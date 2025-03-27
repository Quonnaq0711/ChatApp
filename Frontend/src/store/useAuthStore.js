import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdating: false,
    
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log('Error in checkAuth', error);
            set({ authUser: null });           
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            set({ authUser: res.data });
            toast.success('Account created successfully');
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
          set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
          const res = await axiosInstance.post("/auth/login", data);
          set({ authUser: res.data });
          toast.success("Successfully Logged In ");
        } catch (error) {
            toast.error(error.response.data.message);            
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ authUser: null });
            toast.success('Logout Successful');
        } catch (error) {
            toast.error(error.response.data.message);            
        }
    },

    update: async (data) => {
        set({ isUpdating: true });
        try {
            const res = await axiosInstance.put('/auth/update-profile', data);
            set({ authUser: res.data });
            toast.success('Update Successful');
        } catch (error) {
            console.log('Error in update profile', error);
            toast.error(error.response.data.message);            
        } finally {
            set({ isUpdating: false });
        }
    }
}));