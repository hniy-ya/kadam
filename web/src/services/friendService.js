import api from "../lib/axios";

export const searchUsers = async (username) => {
  const res = await api.get(
    `/friends/search?username=${username}`
  );

  return res.data;
};

export const sendFriendRequest = async (receiver) => {
  const res = await api.post(
    "/friends/send-request",
    {
      receiver,
    }
  );

  return res.data;
};

export const getFriends = async () => {
  const res = await api.get("/friends");

  return res.data;
};

export const getPendingRequests = async () => {
  const res = await api.get("/friends/pending");

  return res.data;
};

export const getReceivedRequests = async () => {
  const res = await api.get("/friends/received");

  return res.data;
};

export const acceptRequest = async (id) => {
  const res = await api.put(
    `/friends/accept/${id}`
  );

  return res.data;
};

export const rejectRequest = async (id) => {
  const res = await api.put(
    `/friends/reject/${id}`
  );

  return res.data;
};

export const cancelRequest = async (id) => {
  const res = await api.delete(
    `/friends/cancel/${id}`
  );

  return res.data;
};

export const removeFriend = async (id) => {
  const res = await api.delete(
    `/friends/${id}`
  );

  return res.data;
};

export const getFriend = async (id) => {
  const res = await api.get(
    `/friends/${id}`
  );

  return res.data;
};