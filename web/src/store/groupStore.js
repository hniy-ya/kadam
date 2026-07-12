import { create } from "zustand";
import { toast } from 'sonner'

import {
  createGroup,
  joinGroup,
  getGroups,
  getGroup,
  leaveGroup,
  deleteGroup,
  getMembers,
  removeMember,
} from "../services/groupServices.js";

const useGroupStore = create((set) => ({
  groups: [],
  currentGroup: null,
  members: [],

  loading: false,
  error: null,

  createGroup: async (data) => {
    try {
      set({ loading: true });

      const group = await createGroup(data);

      set((state) => ({
        groups: [...state.groups, group],
        loading: false,
      }));

      toast.success("Group created");

      return true;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error,
      });

      toast.error(
        error.response?.data?.error ||
          "Failed to create group"
      );

      return false;
    }
  },

  joinGroup: async (inviteCode) => {
    try {
      set({ loading: true });

      await joinGroup(inviteCode);

      set({ loading: false });

      toast.success("Joined successfully");

      return true;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error,
      });

      toast.error(
        error.response?.data?.error
      );

      return false;
    }
  },

  fetchGroups: async () => {
    try {
      const groups = await getGroups();

      set({
        groups,
      });
    } catch (error) {
      console.log(error);
    }
  },

  fetchGroup: async (groupId) => {
    try {
      const group = await getGroup(groupId);

      set({
        currentGroup: group,
      });
    } catch (error) {
      console.log(error);
    }
  },

  leaveGroup: async (groupId) => {
    try {
      await leaveGroup(groupId);

      set((state) => ({
        groups: state.groups.filter(
          (g) => g._id !== groupId
        ),
        currentGroup: null,
      }));

      toast.success("Left group");
    } catch (error) {
      toast.error(
        error.response?.data?.error
      );
    }
  },

  deleteGroup: async (groupId) => {
    try {
      await deleteGroup(groupId);

      set((state) => ({
        groups: state.groups.filter(
          (g) => g._id !== groupId
        ),
      }));

      toast.success("Group deleted");
    } catch (error) {
      toast.error(
        error.response?.data?.error
      );
    }
  },

  fetchMembers: async (groupId) => {
    try {
      const members =
        await getMembers(groupId);

      set({
        members,
      });
    } catch (error) {
      console.log(error);
    }
  },

  removeMember: async (
    groupId,
    memberId
  ) => {
    try {
      await removeMember(
        groupId,
        memberId
      );

      set((state) => ({
        members: state.members.filter(
          (m) =>
            m.userId._id !== memberId
        ),
      }));

      toast.success("Member removed");
    } catch (error) {
      toast.error(
        error.response?.data?.error
      );
    }
  },
}));

export default useGroupStore;