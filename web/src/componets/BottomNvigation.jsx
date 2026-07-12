"use client";

import Link from "next/link";
import {
  House,
  Users,
  User,
  Plus,
  Wallet,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white px-6 py-3 shadow-lg">
      <div className="flex items-center justify-around">

        <Link
          href="/"
          className="flex flex-col items-center text-primary-dark"
        >
          <House size={22} />
          <span className="text-xs">
            Home
          </span>
        </Link>

        <button className="w-14 h-14 rounded-xl bg-[#255736] text-white flex items-center justify-center -mt-8 shadow-lg">

          <Plus size={28} />

        </button>

        <Link
          href="/profile"
          className="flex flex-col items-center text-gray-500"
        >
          <Wallet size={22} />
          <span className="text-xs">
            Expenses
          </span>
        </Link>

      </div>
    </div>
  );
}