"use client";
import { useState, useEffect } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 3) return "شب بخیر";
  if (hour < 12) return "صبح بخیر";
  if (hour < 15) return "ظهر بخیر";
  if (hour < 18) return "بعد از ظهر بخیر";
  return "شب بخیر";
};

export default function Greeting() {
  const [greeting, setGreeting] = useState(getGreeting());
  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <p className="text-sm text-secondary-500 font-bold">{greeting}!</p>;
}
