"use client";

import { useState } from "react";
import { X, Users, Plus } from "lucide-react";
import useGroupStore from "../store/groupStore";

export default function GroupModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("create");

const { createGroup, joinGroup, loading, fetchGroups } =
  useGroupStore();

const [groupName, setGroupName] = useState("");
const [inviteCode, setInviteCode] = useState("");
const [features, setFeatures] = useState([]);

const handleCreateGroup = async (e) => {
  e.preventDefault();

  const success = await createGroup({
    groupName,
    features,
  });

  if (success) {
    await fetchGroups();

    setGroupName("");
    setFeatures([]);

    onClose();
  }
};

const handleJoinGroup = async (e) => {
  e.preventDefault();

  const success = await joinGroup(inviteCode);

  if (success) {
    await fetchGroups();

    setInviteCode("");

    onClose();
  }
};
  const handleFeatureChange = (feature) => {
  setFeatures((prev) =>
    prev.includes(feature)
      ? prev.filter((item) => item !== feature)
      : [...prev, feature]
  );
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-md rounded-3xl bg-white p-6 shadow-xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {activeTab === "create"
              ? "Create Group"
              : "Join Group"}
          </h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
          <button 
            onClick={() => setActiveTab("create")}
            className={`flex-1 rounded-lg py-2 ${
              activeTab === "create"
                ? "bg-primary-dark text-white"
                : ""
            }`}
             disabled={loading}
          >
             {loading ? "Creating..." : "Create Group"}
          </button>

          <button

          disabled={loading}
            onClick={() => setActiveTab("join")}
            className={`flex-1 rounded-lg py-2 ${
              activeTab === "join"
                ? "bg-primary-dark text-white"
                : ""
            }`}
          >
             {loading ? "Joining..." : "Join Group"}
          </button>
        </div>

        {activeTab === "create" ? (
       <form
  onSubmit={handleCreateGroup}
  className="space-y-4"
>
           <input
  type="text"
  value={groupName}
  onChange={(e) =>
    setGroupName(e.target.value)
  }
  placeholder="Group Name"
  className="w-full rounded-xl border p-3"
/>

            {/* <textarea
              placeholder="Description"
              rows={3}
              className="w-full rounded-xl border p-3"
            /> */}
            <div>
  <label className="mb-2 block font-medium">
    Features
  </label>

  <div className="space-y-3">

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={features.includes("event")}
        onChange={() =>
          handleFeatureChange("event")
        }
      />
      Event
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={features.includes("grocery")}
        onChange={() =>
          handleFeatureChange("grocery")
        }
      />
      Grocery
    </label>

    
  </div>
</div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-dark py-3 text-white"
            >
              <Plus size={18} />
              Create Group
            </button>
          </form>
        ) : (
          <form
  onSubmit={handleJoinGroup}
  className="space-y-4"
>
          <input
  type="text"
  value={inviteCode}
  onChange={(e) =>
    setInviteCode(e.target.value.toUpperCase())
  }
  placeholder="Enter Invite Code"
  className="w-full rounded-xl border p-3"
/>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-dark py-3 text-white"
            >
              <Users size={18} />
              Join Group
            </button>
          </form>
        )}
      </div>
    </div>
  );
}