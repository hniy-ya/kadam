"use client";

import { create } from "zustand";

import {
  searchUsers,
  sendFriendRequest,
  getFriends,
  getPendingRequests,
  getReceivedRequests,
  acceptRequest,
  rejectRequest,
  cancelRequest,
  removeFriend,
} from "../services/friendService";

const useFriendStore = create((set) => ({

  friends: [],

  pending: [],

  received: [],

  searchResults: [],

  loading: false,

  search: async (username) => {

    set({ loading: true });

    try {

      const data = await searchUsers(username);

      set({
        searchResults: data,
      });

    } finally {

      set({
        loading: false,
      });

    }

  },

  loadFriends: async () => {

    const data = await getFriends();

    set({
      friends: data,
    });

  },

  loadPending: async () => {

    const data = await getPendingRequests();

    set({
      pending: data,
    });

  },

  loadReceived: async () => {

    const data = await getReceivedRequests();

    set({
      received: data,
    });

  },

  sendRequest: async (receiver) => {

    await sendFriendRequest(receiver);

  },

  accept: async (id) => {

    await acceptRequest(id);

  },

  reject: async (id) => {

    await rejectRequest(id);

  },

  cancel: async (id) => {

    await cancelRequest(id);

  },

  remove: async (id) => {

    await removeFriend(id);

  },

}));

export default useFriendStore;