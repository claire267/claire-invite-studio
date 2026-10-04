"use client";
// Live countdown to the wedding date. Client component because it
// needs to update every second in the browser.
import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate, accentColor }: { targetDate: string; accentColor: string }) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units: [string, number][] = [["Days", time.days], ["Hours", time.hours], ["Min", time.minutes], ["Sec", time.seconds]];

  return (
    <div className="flex gap-6 justify-center">
      {units.map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="font-serif text-3xl" style={{ color: accentColor }}>{String(value).padStart(2, "0")}</div>
          <div className="text-xs uppercase tracking-wide opacity-70">{label}</div>
        </div>
      ))}
    </div>
  );
}
