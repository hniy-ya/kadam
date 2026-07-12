import { ArrowDownCircle, ArrowUpCircle, Bell, LogOut, TrafficCone } from "lucide-react";
import BottomNavigation from "../../../../componets/BottomNvigation";

export default async function GroupPage({ params }) {
    const { groupId } = await params;

    return (
        <div className="min-h-screen bg-background p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border"></div>

                    <div>
                        <h2 className="font-semibold text-text">Hi, </h2>
                        <p className="text-sm text-text-muted">Welcom Back</p>
                    </div>
                </div>

                <div className="flex items-center  gap-4">
                    {/* Notification */}
                    <div className="relative cursor-pointer">
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

            <div className="mt-6 rounded-xl bg-secondary  p-5 shadow-2xl">
                <div className="grid grid-cols-2 divide-x">
                    <div className="flex flex-col items-center">
                        <ArrowDownCircle size={28} className="text-green-600" />

                        <p className="mt-2 text-sm text-gray-500">You Get</p>

                        <h2 className="text-2xl font-bold text-green-600">₹2,450</h2>
                    </div>

                    <div className="flex flex-col items-center">
                        <ArrowUpCircle size={28} className="text-red-500" />

                        <p className="mt-2 text-sm text-gray-500">You Owe</p>

                        <h2 className="text-2xl font-bold text-red-500">₹1,200</h2>
                    </div>
                </div>
            </div>

           
            <div class="grid grid-cols-2 gap-3 px-6 py-2">
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                <i class="fa-regular fa-calendar text-emerald-600"></i> Events
            </button>
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                <i class="fa-solid fa-chart-pie text-emerald-600"></i> Split
            </button>
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                <i class="fa-solid fa-users text-emerald-600"></i> Members
            </button>
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                <i class="fa-solid fa-chart-column text-emerald-600"></i> Stats
            </button>
        </div>

        <BottomNavigation/>


            
        </div>
    );
}
