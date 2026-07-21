"use client";

import { Clock3, X } from "lucide-react";

export default function PendingCard({
  user,
  onCancel,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="font-semibold">
            {user.username}
          </h2>

          <div className="flex items-center gap-2 text-yellow-600 text-sm">

            <Clock3 size={15} />

            Pending

          </div>

        </div>

        <button
          onClick={onCancel}
          className="text-red-500"
        >
          <X />
        </button>

      </div>

    </div>
  );
}