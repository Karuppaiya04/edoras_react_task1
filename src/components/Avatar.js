import React, { useMemo } from "react";

export default function Avatar({ src, alt }) {
  const initials = useMemo(
    () => (alt ? alt.split(" ").map((s) => s[0]).join("") : "JD"),
    [alt]
  );

  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 grid place-items-center text-xs font-semibold text-white overflow-hidden ring-2 ring-white/10">
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : initials}
    </div>
  );
}
