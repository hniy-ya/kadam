"use client";

import Link from "next/link";
import {


  
   Home,
  Users,
  Plus,
  Receipt,
  HandCoins,
  PlusSquare,
} from "lucide-react";


  
  export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border border-gray-200 shadow-lg h-20">

      <div className="grid grid-cols-5 items-center h-full">

        {/* Home */}
        <Link
          href="/dashboard"
          className="flex flex-col items-center text-primary-dark"
        >
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        {/* Groups */}
        <Link
          href="/groups"
          className="flex flex-col items-center text-gray-500"
        >
          <Users size={22} />
          <span className="text-xs mt-1">Conections</span>
        </Link>

        {/* Plus */}
        <div className="flex justify-center">
          <button className="w-13 h-13 rounded-xl bg-[#255736] text-white flex items-center justify-center  shadow-xl">
            <Plus size={30} />
          </button>
        </div>

        {/* Transactions */}
        <Link
          href="/transactions"
          className="flex flex-col items-center text-gray-500"
        >
          <Receipt size={22} />
          <span className="text-xs mt-1">Transactions</span>
        </Link>

        {/* Settlement */}
        <Link
          href="/settlement"
          className="flex flex-col items-center text-gray-500"
        >
          <HandCoins size={22} />
          <span className="text-xs mt-1">Settle</span>
        </Link>

      </div>

    </nav>
  );
}
  