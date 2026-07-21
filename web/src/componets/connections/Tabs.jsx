"use client";

export default function Tabs({ tab, setTab }) {
  return (
    <div className="bg-white rounded-xl p-1 shadow flex">

      <button
        onClick={() => setTab("friends")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${
          tab === "friends"
            ? "bg-[#255736] text-white"
            : "text-gray-500"
        }`}
      >
        Friends
      </button>

      <button
        onClick={() => setTab("pending")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${
          tab === "pending"
            ? "bg-[#255736] text-white"
            : "text-gray-500"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setTab("received")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${
          tab === "received"
            ? "bg-[#255736] text-white"
            : "text-gray-500"
        }`}
      >
        Received
      </button>

    </div>
  );
}