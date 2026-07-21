"use client";

import { UserRound, Eye, Trash2 } from "lucide-react";
import Search from "../Search";

export default function FriendCard({
  friend,
  onView,
  onRemove,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">

      <Search/>

      <div className="flex justify-between">

        <div className="flex gap-3">

          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
            <UserRound />
          </div>

          <div>

            <h2 className="font-semibold">
              {friend.username}
            </h2>

            <p className="text-sm text-gray-500">
              Connected
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button
            onClick={onView}
            className="text-[#255736]"
          >
            <Eye />
          </button>

          <button
            onClick={onRemove}
            className="text-red-500"
          >
            <Trash2 />
          </button>

        </div>

      </div>

    </div>
  );
}