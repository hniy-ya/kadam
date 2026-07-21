import React from "react";

export default function Search() {
    return (
        <div className="relative flex-1 mt-5">
            {" "}
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
                placeholder="Search Freinds"
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 outline-none"
            />
        </div>
    );
}
