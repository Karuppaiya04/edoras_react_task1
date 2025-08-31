import React, { useState } from "react";
import {
  Bell,
  BellRing,
  CalendarDays,
  Menu,
  Search,
  BarChart3,
  Hand,
  CalendarCheck2,
  UserCheck,
  Megaphone,
} from "lucide-react";

import Avatar from "../components/Avatar";
import FeedItem from "../components/FeedItem";

export default function StudentModule() {
  const [toast, setToast] = useState(false);
  const handleAllWorking = () => {
    setToast(true);
    // Auto-dismiss after 2 seconds
    setTimeout(() => setToast(false), 2000);
  };
  const dismissToast = () => setToast(false);
  return (
    <div className="min-h-screen w-full bg-[#0f1020] text-white flex items-center justify-center p-6 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">
          <span className="font-semibold">All working</span>
          <button
            onClick={dismissToast}
            className="ml-2 text-white/80 hover:text-white text-lg font-bold"
          >
            &times;
          </button>
        </div>
      )}
      <div className="w-full max-w-5xl rounded-3xl bg-[#16172a] shadow-[0_20px_80px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/5 p-6 md:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleAllWorking}
            className="p-2 rounded-xl hover:bg-white/5 transition"
          >
            <Menu className="w-5 h-5 text-white/70" />
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAllWorking}
              className="p-2 rounded-xl hover:bg-white/5 transition"
            >
              <Search className="w-5 h-5 text-white/70" />
            </button>
            <button
              onClick={handleAllWorking}
              className="p-2 rounded-xl hover:bg-white/5 transition relative"
            >
              <Bell className="w-5 h-5 text-white/70" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-400" />
            </button>
            <Avatar alt="Jane Doe" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Student Module
          </h1>
          <p className="mt-3 text-white/60 text-lg">Welcome back, Jane Doe</p>
          <p className="mt-1 text-white/40">Friday, April 26</p>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-indigo-600 to-violet-700/90 hover:to-violet-600 transition shadow-lg shadow-violet-900/30 ring-1 ring-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-semibold leading-6">Event</p>
                <p className="-mt-0.5 text-xl font-semibold">registration</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-rose-500 to-fuchsia-600 hover:to-fuchsia-500 transition shadow-lg shadow-fuchsia-900/30 ring-1 ring-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10">
                <Hand className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Volunteering</p>
            </div>
          </button>

          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-amber-400 to-orange-500 hover:to-orange-400 transition shadow-lg shadow-orange-900/20 ring-1 ring-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10">
                <BellRing className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Notifications</p>
            </div>
          </button>

          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-cyan-500 to-teal-600 hover:to-teal-500 transition shadow-lg shadow-teal-900/30 ring-1 ring-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10">
                <BarChart3 className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Progress</p>
            </div>
          </button>
        </div>

        {/* Activity Feed */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Activity feed</h2>
          <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 md:p-4">
            <FeedItem
              icon={<CalendarCheck2 className="w-5 h-5" />}
              title="Upcoming Astronomy Club meeting"
              time="5h ago"
            />
            <FeedItem
              icon={<UserCheck className="w-5 h-5" />}
              title="Volunteering request approved"
              time="1d ago"
            />
            <FeedItem
              icon={<Megaphone className="w-5 h-5" />}
              title="Committee meeting scheduled"
              time="2d ago"
              last
            />
          </div>
        </div>
      </div>
    </div>
  );
}
