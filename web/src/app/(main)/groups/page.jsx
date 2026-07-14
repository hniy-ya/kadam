import { ArrowBigLeft, Plus, Search } from "lucide-react";
import React from "react";
import BottomNavigation from "../../../componets/BottomNvigation";

export default function page() {
    return (
        <div className="min-h-screen bg-background p-7">
            <div className="flex items-center justify-between ">
                <h2 className="font-semibold text-text">Connections</h2>
                <div>
                    <Plus />
                </div>
            </div>

            <div className="relative flex-1 mt-5">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    placeholder="Search connections"
                    className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 outline-none"
                />
            </div>

             <div className="flex justify-between items-center px-4 py-4 mt-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200"></div>

                            <div>
                                <h3 className="font-medium">Ameen</h3>
                                <p className="text-sm text-gray-500">Expense</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">₹2500</p>
                            <span className="text-sm text-gray-500">Today</span>
                        </div>
                    </div>

                    <div className="mx-4 border border-gray-200"></div>

            <BottomNavigation />
        </div>
    );
}
