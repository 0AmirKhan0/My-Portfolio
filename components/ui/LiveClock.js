"use client";

import { useEffect, useState } from "react";
import moment from "moment-timezone";

export default function LiveClock({ timeZone }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);
  return (
    <div className="flex items-center justify-center ga-[0.5vw] text-3xl text-secondary-foreground font-semibold">
      {!time ? (
        <div>Loading...</div>
      ) : (
        <div>
          <span>Kerman</span> , <span>{time}</span>
        </div>
      )}
    </div>
  );
}
