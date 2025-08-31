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
  const [toastVisible, setToastVisible] = useState(false);
  const handleAllWorking = () => {
    setToast(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1800); // Start fade out
    setTimeout(() => setToast(false), 2200); // Remove from DOM after fade
  };
  const dismissToast = () => {
    setToastVisible(false);
    setTimeout(() => setToast(false), 400);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f1020] text-white flex items-center justify-center p-2 sm:p-6 relative">
      {/* Toast Notification with animation */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 py-3 rounded-xl shadow-lg flex items-center gap-3
            bg-green-600 text-white w-[90vw] max-w-xs sm:max-w-md
            transition-all duration-500 ease-in-out
            ${
              toastVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 -translate-y-4"
            }`}
          style={{ boxShadow: "0 8px 32px 0 rgba(34,197,94,0.25)" }}
          role="status"
          aria-live="polite"
        >
          <span className="font-semibold animate-pulse">All working</span>
          <button
            onClick={dismissToast}
            className="ml-2 text-white/80 hover:text-white text-lg font-bold focus:outline-none transition-transform duration-200 active:scale-90"
            aria-label="Dismiss notification"
          >
            &times;
          </button>
        </div>
      )}
      <div className="w-full max-w-5xl rounded-3xl bg-[#16172a] shadow-[0_20px_80px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/5 p-2 sm:p-6 md:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <button
            onClick={handleAllWorking}
            className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-violet-400 active:scale-90 relative overflow-hidden group"
          >
            <span className="absolute inset-0 group-active:scale-110 group-active:bg-white/10 transition-all duration-300 rounded-xl pointer-events-none" />
            <Menu className="w-5 h-5 text-white/70 relative z-10" />
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAllWorking}
              className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-violet-400 active:scale-90 relative overflow-hidden group"
            >
              <span className="absolute inset-0 group-active:scale-110 group-active:bg-white/10 transition-all duration-300 rounded-xl pointer-events-none" />
              <Search className="w-5 h-5 text-white/70 relative z-10" />
            </button>
            <button
              onClick={handleAllWorking}
              className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-violet-400 active:scale-90 relative overflow-hidden group"
            >
              <span className="absolute inset-0 group-active:scale-110 group-active:bg-white/10 transition-all duration-300 rounded-xl pointer-events-none" />
              <Bell className="w-5 h-5 text-white/70 relative z-10" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-400" />
            </button>
            <Avatar alt="Jane Doe" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Student Module
          </h1>
          <p className="mt-3 text-white/60 text-lg">Welcome back, Jane Doe</p>
          <p className="mt-1 text-white/40">Friday, April 26</p>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-indigo-600 to-violet-700/90 hover:scale-105 hover:shadow-2xl hover:shadow-violet-700/40 transition-all duration-300 shadow-lg shadow-violet-900/30 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
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
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-rose-500 to-fuchsia-600 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-700/40 transition-all duration-300 shadow-lg shadow-fuchsia-900/30 ring-1 ring-white/10 focus:ring-2 focus:ring-fuchsia-400 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-300">
                <Hand className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Volunteering</p>
            </div>
          </button>

          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-amber-400 to-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-700/40 transition-all duration-300 shadow-lg shadow-orange-900/20 ring-1 ring-white/10 focus:ring-2 focus:ring-amber-400 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-orange-400/20 transition-all duration-300">
                <BellRing className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Notifications</p>
            </div>
          </button>

          <button
            onClick={handleAllWorking}
            className="group rounded-2xl p-5 text-left bg-gradient-to-br from-cyan-500 to-teal-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-700/40 transition-all duration-300 shadow-lg shadow-teal-900/30 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <BarChart3 className="w-6 h-6" />
              </div>
              <p className="text-xl font-semibold">Progress</p>
            </div>
          </button>
        </div>

        {/* Activity Feed */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-2xl font-bold">Activity feed</h2>
          <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 md:p-4 overflow-x-auto">
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
