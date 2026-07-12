import { create } from "zustand";
import { toast } from "sonner";
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
} from "./../services/authService.js";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (data) => {
  try {
    set({ loading: true, error: null });

    const res = await loginUser(data);

    set({
      user: res.user,
      loading: false,
    });

    toast.success("Login successful");

    return true;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Login failed";

    set({
      loading: false,
      error: message,
    });

    toast.error(message);

    return false;
  }
},

  register: async (data) => {
  try {
    set({ loading: true, error: null });

    const res = await registerUser(data);

    set({
      user: res.user,
      loading: false,
    });

    toast.success("Registration successful");

    return true;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Registration failed";

    set({
      loading: false,
      error: message,
    });

    toast.error(message);

    return false;
  }
},

 logout: async () => {
  try {
    await logoutUser();

    set({
      user: null,
    });

    toast.success("Logged out successfully");
  } catch {
    toast.error("Logout failed");
  }
},

  checkAuth: async () => {
    try {
      const res = await getCurrentUser();

      set({
        user: res.user,
      });
    } catch {
      set({
        user: null,
      });
    }
  },
}));

export default useAuthStore;