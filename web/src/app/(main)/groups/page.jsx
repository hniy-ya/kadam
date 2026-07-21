"use client";

// import {  Plus, Search } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import BottomNavigation from "../../../componets/BottomNvigation";

// import AddFriendModal from "../../../componets/FrendsForm";
// import useFriendStore from "../../../store/friendStore";

// export default function page() {
//      const [open, setOpen] = useState(false);
//        const [tab, setTab] = useState("friends");

//        const {
//     friends,
//     pending,
//     received,
//     loadFriends,
//     loadPending,
//     loadReceived,
//   } = useFriendStore();

//   useEffect(() => {

//     loadFriends();

//     loadPending();

//     loadReceived();

//   }, []);
//     return (
//         <div className="min-h-screen bg-background p-7">
//             <div className="flex items-center justify-between ">
//                 <h2 className="font-semibold text-text">Connections</h2>
//                 <div className="">

//       <button
//       onClick={()=>setOpen(true)}

//       ><Plus size={18} className="inline-block mr-2" />

//       </button>

//       <AddFriendModal
//         open={open}
//         onClose={() => setOpen(false)}
//       />

//     </div>
//             </div>
//              <section className=" mt-4">

//         <div className="flex bg-white rounded-xl p-1">

//           <button
//             onClick={() => setTab("friends")}
//             className={`flex-1 py-2 rounded-lg ${
//               tab === "friends"
//                 ? "bg-[#255736] text-white"
//                 : ""
//             }`}
//           >
//             Friends
//           </button>

//           <button
//             onClick={() => setTab("pending")}
//             className={`flex-1 py-2 rounded-lg ${
//               tab === "pending"
//                 ? "bg-[#255736] text-white"
//                 : ""
//             }`}
//           >
//             Pending
//           </button>

//           <button
//             onClick={() => setTab("received")}
//             className={`flex-1 py-2 rounded-lg ${
//               tab === "received"
//                 ? "bg-[#255736] text-white"
//                 : ""
//             }`}
//           >
//             Received
//           </button>

//         </div>

//       </section>

//       {/* Content */}

//       <section className="px-5 mt-5 space-y-4">

//         {tab === "friends" &&
//           friends.map((friend) => (

//             <div
//               key={friend._id}
//               className="bg-white rounded-xl p-4 shadow"
//             >

//               <div className="flex justify-between">

//                 <div>

//                   <h3 className="font-semibold">
//                     {friend.friend.username}
//                   </h3>

//                   <p className="text-sm text-gray-500">
//                     {friend.friend.email}
//                   </p>

//                 </div>

//                 <button className="text-[#255736]">
//                   View
//                 </button>

//               </div>

//             </div>

//           ))}

//         {tab === "pending" &&
//           pending.map((item) => (

//             <div
//               key={item._id}
//               className="bg-white rounded-xl p-4 shadow"
//             >

//               <div className="flex justify-between">

//                 <div>

//                   <h3 className="font-semibold">
//                     {item.receiver.username}
//                   </h3>

//                   <p className="text-gray-500 text-sm">
//                     Pending
//                   </p>

//                 </div>

//                 <button className="text-red-500">
//                   Cancel
//                 </button>

//               </div>

//             </div>

//           ))}

//         {tab === "received" &&
//           received.map((item) => (

//             <div
//               key={item._id}
//               className="bg-white rounded-xl p-4 shadow"
//             >

//               <h3 className="font-semibold">
//                 {item.sender.username}
//               </h3>

//               <div className="flex gap-3 mt-3">

//                 <button className="flex-1 bg-[#255736] text-white py-2 rounded-lg">

//                   Accept

//                 </button>

//                 <button className="flex-1 border py-2 rounded-lg">

//                   Reject

//                 </button>

//               </div>

//             </div>

//           ))}

//       </section>

//             <div className="relative flex-1 mt-5">
//                 <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                     placeholder="Search Freinds"
//                     className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 outline-none"
//                 />
//             </div>

//               <div className="bg-white rounded-2xl p-4 mt-3 shadow">

//           <div className="flex justify-between items-center">

//             <div className="flex items-center gap-3">

//               <div className="w-12 h-12 rounded-full bg-slate-200"></div>

//               <div>

//                 <h2 className="font-semibold">
//                   Ameen
//                 </h2>

//                 <p className="text-sm text-gray-500">
//                   @ameen
//                 </p>

//               </div>

//             </div>

//             <button className="text-[#255736] font-medium">
//               View
//             </button>

//           </div>

//           <div className="flex justify-between mt-4">

//             <div>

//               <p className="text-xs text-gray-500">
//                 You Will Get
//               </p>

//               <h3 className="font-bold text-green-600">
//                 ₹1,500
//               </h3>

//             </div>

//             <div className="text-right">

//               <p className="text-xs text-gray-500">
//                 Transactions
//               </p>

//               <h3 className="font-bold">
//                 5
//               </h3>

//             </div>

//           </div>

//         </div>

//             <BottomNavigation />
//         </div>
//     );
// }

"use client";

import { useState, useEffect } from "react";

import ReceivedCard from "../../../componets/connections/RecivedCard.jsx";
import FriendCard from "../../../componets/connections/FriendCard";
import PendingCard from "../../../componets/connections/PendingCard.jsx";
import AddFriendModal from "../../../componets/connections/FrendsForm";
import Tabs from "../../../componets/connections/Tabs";
import BottomNvigation from "../../../componets/BottomNvigation";
import useFriendStore from "../../../store/friendStore";
import { Plus } from "lucide-react";

export default function ConnectionsPage() {
    const [tab, setTab] = useState("friends");
    const [open, setOpen] = useState(false);

    const { friends, pending, received, loadFriends, loadPending, loadReceived, accept, reject, cancel, remove } =
        useFriendStore();

    useEffect(() => {
        loadFriends();
        loadPending();
        loadReceived();
    }, []);

    return (
        <main className="min-h-screen bg-slate-100 p-5">
            <div className="flex items-center justify-between ">
                <h2 className="font-semibold text-text">Connections</h2>{" "}
                <div className="">
                    <button onClick={() => setOpen(true)}>
                        <Plus size={18} className="inline-block mr-2" />
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <Tabs tab={tab} setTab={setTab} />
            </div>

            <div className="mt-6 space-y-4">
                {tab === "friends" &&
                    friends.map((item) => (
                        <FriendCard
                            key={item.friend._id}
                            friend={item.friend}
                            onView={() => {}}
                            onRemove={() => remove(item.friend._id)}
                        />
                    ))}

                {tab === "pending" &&
                    pending.map((item) => (
                        <PendingCard key={item._id} user={item.receiver} onCancel={() => cancel(item._id)} />
                    ))}

                {tab === "received" &&
                    received.map((item) => (
                        <ReceivedCard
                            key={item._id}
                            user={item.sender}
                            onAccept={() => accept(item._id)}
                            onReject={() => reject(item._id)}
                        />
                    ))}
            </div>

            <AddFriendModal open={open} onClose={() => setOpen(false)} />
              <BottomNvigation />
        </main>
    );
}
