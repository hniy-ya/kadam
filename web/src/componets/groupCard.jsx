"use client";

import Link from "next/link";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ChevronRight,
  Users,
} from "lucide-react";

export default function GroupCard({
  id,
  name,
  members,
  profileGroup
}) {
  return (
    <Link href={`/groups/${id}`}>
    <div className="mt-3 rounded-3xl border border-border bg-white p-5 shadow-sm">
      {/* Top */}
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-primary/10">
            <img
              src={profileGroup}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text">
              {name}
            </h3>

            <p className="flex items-center gap-1 text-sm text-text-muted">
              <Users size={14} />
              {members.length} Members
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-2">
          <div className="flex items-center justify-end gap-2">
            <ArrowDownCircle
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-green-600">
              ₹0
            </span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <ArrowUpCircle
              size={18}
              className="text-red-500"
            />

            <span className="font-semibold text-red-500">
              ₹0
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
    

      {/* Footer */}
     
    </div>
    </Link>
  );
}