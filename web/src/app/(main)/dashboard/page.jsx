// "use client";

// import { Search, Bell, Plus, ArrowDownCircle, ArrowUpCircle, LogOut } from "lucide-react";
// import useAuthStore from "../../../store/authStore";
// import GroupCard from "../../../componets/groupCard";
// import GroupModal from "../../../componets/groupFormModal";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import BottomNavigation from "../../../componets/BottomNvigation";
// import Image from "next/image";
// import useGroupStore from "../../../store/groupStore";
// import Link from "next/link";

// export default function HomePage() {
//     const { logout, user, checkAuth } = useAuthStore();
//     const router = useRouter();
//     const [showModal, setShowModal] = useState(false);
//     const { groups, fetchGroups } = useGroupStore();

//     useEffect(() => {
//         checkAuth();
//        fetchGroups()
//     }, []);

//     console.log("grup:", groups);

//     const handleLogout = async () => {
//         await logout();
//         router.push("/login");
//     };
//     return (
//         <div className="min-h-screen bg-background p-4">
//             {/* Header */}
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                     <div className="h-12 w-12 overflow-hidden rounded-full border">
//                         <img src={user?.profilePic} alt="profile" className="h-full w-full object-cover" />
//                     </div>

//                     <div>
//                         <h2 className="font-semibold text-text">Hi, {user?.username?.toUpperCase()}</h2>
//                         <p className="text-sm text-text-muted">Welcom Back</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     {/* Notification */}
//                     <div className="relative cursor-pointer">
//                         <Bell className="text-primary-dark" size={22} />

//                         {/* Notification Dot */}
//                         <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-400 border-2 border-white"></span>
//                     </div>

//                     {/* Logout */}
//                     <button onClick={handleLogout}>
//                         <LogOut size={22} className="text-red-500 hover:text-red-600" />
//                     </button>
//                 </div>
//             </div>

//             {/* Summary */}

//             <div className="mt-6 rounded-xl bg-secondary  p-5 shadow-2xl">
//                 <div className="grid grid-cols-2 divide-x">
//                     <div className="flex flex-col items-center">
//                         <ArrowDownCircle size={28} className="text-green-600" />

//                         <p className="mt-2 text-sm text-gray-500">You Get</p>

//                         <h2 className="text-2xl font-bold text-green-600">₹2,450</h2>

//                     </div>

//                     <div className="flex flex-col items-center">
//                         <ArrowUpCircle size={28} className="text-red-500" />

//                         <p className="mt-2 text-sm text-gray-500">You Owe</p>

//                         <h2 className="text-2xl font-bold text-red-500">₹1,200</h2>
//                     </div>
//                 </div>
//             </div>

//             {/* Search */}
//             <div className="mt-5 flex gap-3">
//                 <div className="relative flex-1">
//                     <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                     <input
//                         placeholder="Search groups"
//                         className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 outline-none"
//                     />
//                 </div>

//                 <button
//                     className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-white"
//                     onClick={() => setShowModal(true)}
//                 >
//                     <Plus size={22} />
//                 </button>
//                 <GroupModal isOpen={showModal} onClose={() => setShowModal(false)} />
//             </div>

//             {/* Groups */}
//             <div className="space-y-4">
//                 {groups.map((group) => (
//                     <GroupCard
//                         key={group._id}
//                         id={group._id}
//                         name={group.groupName}
//                         members={group.members.length}
//                         profileGroup={group.profileGroupImage}
//                         getAmount={0}
//                         oweAmount={0}
//                     />
//                 ))}
//             </div>

//             <BottomNavigation />
//         </div>
//     );
// }

"use client";

import { Bell, Menu, ChevronRight, LogOut, Receipt, Timer, Subscript, BookMarked, LucideBookMarked, Check, CheckSquare } from "lucide-react";
import BottomNavigation from "../../../componets/BottomNvigation";
import useAuthStore from "../../../store/authStore";
import { useRouter } from "next/navigation";

// import Image from "next/image";
import useGroupStore from "../../../store/groupStore";
import { useEffect } from "react";
// import Link from "next/link";

export default function HomePage() {
    const { logout, checkAut, user } = useAuthStore();
    const router = useRouter();
    // const [showModal, setShowModal] = useState(false);
    // const { groups, fetchGroups } = useGroupStore();

    // useEffect(() => {
    //     checkAuth();
    //    fetchGroups()
    // }, []);

    // console.log("grup:", groups);

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };
    return (
        <main className="min-h-screen  pb-24 bg-background">
            {/* Header */}
            <section className=" rounded-b-3xl  px-5 pt-6 pb-5">
                <div className="flex items-center justify-between">
                    {/* Left Side */}
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border">
                            <img src={user?.profilePic} alt="profile" className="h-full w-full object-cover" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-text">Hi,  {user?.username?.toUpperCase()}</h2>
                            <p className="text-sm text-text-muted">Welcome Back</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer">
                            <Bell className="text-primary-dark" size={22} />

                            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-400 border-2 border-white"></span>
                        </div>

                        <button onClick={handleLogout}>
                            <LogOut size={22} className="text-red-500 hover:text-red-600" />
                        </button>
                    </div>
                </div>

                {/* Balance */}

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 rounded-4xl p-5">
                        <p className="text-gray-600">You Will Get</p>

                        <h2 className="text-3xl font-bold text-green-700 mt-2">₹800</h2>
                        <button className="mt-6 text-sm font-medium text-green-600 underline underline-offset-4">
                            View Details
                        </button>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-5">
                        <p className="text-gray-600">You Owe</p>

                        <h2 className="text-3xl font-bold text-red-600 mt-2">₹2500</h2>
                        <button className="mt-6 text-sm font-medium text-red-600 underline underline-offset-4">
                            View Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="px-5 mt-6 ">
                <h2 className="font-semibold text-xl mb-3">Overview</h2>

                <div className=" rounded-xl  bg-white border border-gray-200 ">
                    <div className="flex justify-between items-center px-4 py-4">
                        <div className="flex items-center gap-3"> <span className=""><Receipt size={22} /></span>
                        <span>Total Transactions</span></div>
                     
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">18</span>
                    </div>

                    <div className="mx-4 border border-gray-200"></div>

                    <div className="flex justify-between items-center px-4 py-4">
                      <div className="flex items-center gap-3">
                         <span className=""><Timer size={22} /></span>
                        <span>Pending Settlement</span>
                      </div>
                      
                      
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm">
                            7
                        </span>
                    </div>

                    <div className="mx-4 border border-gray-200"></div>

                    <div className="flex justify-between items-center px-4 py-4">
                      <div className="flex items-center gap-3">
                         <span className="">< CheckSquare size={22} /></span>
                        <span>Settled</span>
                      </div>
                      
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">11</span>
                    </div>
                </div>
            </section>

            {/* Recent Transactions */}
            <section className="px-5 mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-xl">Recent Transactions</h2>

                    <button className="text-[#255736] font-medium underline underline-offset-4">View All</button>
                </div>

                <div>
                    {/* Transaction 1 */}
                    <div className="flex justify-between items-center px-4 py-4">
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

                    {/* Transaction 2 */}
                    <div className="flex justify-between items-center px-4 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200"></div>

                            <div>
                                <h3 className="font-medium">Nisha</h3>
                                <p className="text-sm text-gray-500">Expense</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">₹450</p>
                            <span className="text-sm text-gray-500">Yesterday</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Navigation */}

            <BottomNavigation />
        </main>
    );
}
