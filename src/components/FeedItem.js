import React from "react";

export default function FeedItem({ icon, title, time, last }) {
  return (
    <div
      className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-white/5 transition ${
        !last ? "mb-1" : ""
      }`}
    >
      <div className="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-xl bg-indigo-600/20 ring-1 ring-indigo-300/20">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-base md:text-lg font-medium">{title}</p>
        <p className="text-sm text-white/50 mt-1">{time}</p>
      </div>
    </div>
  );
}
