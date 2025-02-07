"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DebugSlug() {
  const params = useParams();

  useEffect(() => {
    console.log("🛠 useParams output:", params);
  }, [params]);

  return <p>Check console logs for params</p>;
}
