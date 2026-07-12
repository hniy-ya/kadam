import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/group",
  withCredentials: true,
});

export const createGroup = async (data) => {
  const res = await API.post("/creategroup", data);
  return res.data;
};

export const joinGroup = async (inviteCode) => {
  const res = await API.post("/join", {
    inviteCode,
  });

  return res.data;
};

export const getGroups = async () => {
  const res = await API.get("/");
  return res.data;
};

export const getGroup = async (groupId) => {
  const res = await API.get(`/${groupId}`);
  return res.data;
};

export const leaveGroup = async (groupId) => {
  const res = await API.delete(`/${groupId}/leave`);
  return res.data;
};

export const deleteGroup = async (groupId) => {
  const res = await API.delete(`/${groupId}`);
  return res.data;
};

export const getMembers = async (groupId) => {
  const res = await API.get(`/${groupId}/members`);
  return res.data;
};

export const removeMember = async (
  groupId,
  memberId
) => {
  const res = await API.delete(
    `/${groupId}/members/${memberId}`
  );

  return res.data;
};