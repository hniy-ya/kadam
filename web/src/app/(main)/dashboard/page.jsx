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

// app/(main)/dashboard/page.jsx

"use client";

import { Bell, Wallet, ArrowDownLeft, ArrowUpRight, Plus, Home, Users, Receipt, User, LogOut } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
//  import useGroupStore from "../../../store/groupStore";
//  import useAuthStore from "../../../store/authStore";
//  import useRouter from "next/navigation";

export default function Dashboard() {
    //   const { logout, user, checkAuth } = useAuthStore();
    // const router = useRouter();
    // // const [showModal, setShowModal] = useState(false);
    // const { groups, fetchGroups } = useGroupStore();

    // useEffect(() => {
    //     checkAuth();
    //    fetchGroups()
    // }, []);

    // console.log("grup:", groups);

    // const handleLogout = async () => {
    //     await logout();
    //     router.push("/login");
    // };
    return (
        <div className="min-h-screen bg-gray-100 p-3">
            {/* Header */}

            <div className="flex items-center justify-between ">
                <div className="flex items-center  gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border">
                        <img alt="profile" className="h-full w-full object-cover" />
                    </div>

                    <div>
                        <h2 className="font-semibold text-text">Hi, </h2>
                        <p className="text-sm text-text-muted">Welcom Back</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Notification */}
                        <div className="relative
                        cursor-pointer">
                            <Bell className="text-primary-dark" size={22} />

                            {/* Notification Dot */}
                            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-400 border-2 border-white"></span>
                        </div>

                        {/* Logout */}
                        <button>
                            <LogOut size={22} className="text-red-500 hover:text-red-600" />
                        </button>
                    </div>
                </div>
                </div>
            

            <div className="p-4 space-y-5">
                {/* Balance */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow">
                        <p className="text-gray-500 text-sm">You Will Get</p>
                        <h2 className="text-2xl font-bold text-green-600">₹2,850</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow">
                        <p className="text-gray-500 text-sm">You Owe</p>
                        <h2 className="text-2xl font-bold text-red-600">₹750</h2>
                    </div>
                </div>

                {/* Pending Settlement */}
                <div className="bg-white rounded-2xl shadow p-4">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Pending Settlement</h3>

                        <span className="bg-red-100 text-red-600 px-2 rounded-full text-sm">2</span>
                    </div>

                    <p className="text-gray-500 mt-2">2 requests waiting for your response.</p>
                </div>

                {/* Recent Transactions */}

                <div className="bg-white rounded-2xl shadow">
                    <div className="p-4 border-b">
                        <h3 className="font-semibold">Recent Transactions</h3>
                    </div>

                    <div className="divide-y">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-3">
                                <ArrowDownLeft className="text-green-600" />
                                <div>
                                    <p>Dinner Expense</p>
                                    <small className="text-gray-500">Hostel Friends</small>
                                </div>
                            </div>

                            <span className="text-green-600 font-semibold">+₹300</span>
                        </div>

                        <div className="flex justify-between p-4">
                            <div className="flex gap-3">
                                <ArrowUpRight className="text-red-600" />
                                <div>
                                    <p>Trip Expense</p>
                                    <small className="text-gray-500">College Friends</small>
                                </div>
                            </div>

                            <span className="text-red-600 font-semibold">-₹450</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Button */}

            <button className="fixed bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#255736] text-white shadow-lg flex items-center justify-center">
                <Plus size={30} />
            </button>

            {/* Bottom Navigation */}

            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
                <Home className="text-[#255736]" />

                <Users />

                <Receipt />

                <User />
            </nav>
        </div>
        
    );
}
