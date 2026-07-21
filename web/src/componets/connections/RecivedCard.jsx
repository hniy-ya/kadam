"use client";

import { UserRoundCheck } from "lucide-react";

export default function ReceivedCard({
  user,
  onAccept,
  onReject,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">

      <div className="flex gap-3">

        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
          <UserRoundCheck />
        </div>

        <div>

          <h2 className="font-semibold">
            {user.username}
          </h2>

          <p className="text-gray-500 text-sm">
            Wants to connect
          </p>

        </div>

      </div>

      <div className="flex gap-3 mt-4">

        <button
          onClick={onReject}
          className="flex-1 border rounded-xl py-2"
        >
          Reject
        </button>

        <button
          onClick={onAccept}
          className="flex-1 bg-[#255736] rounded-xl text-white py-2"
        >
          Accept
        </button>

      </div>

    </div>
  );
}