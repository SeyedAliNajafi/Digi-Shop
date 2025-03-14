import { useGetUser } from "@/hooks/useAuth";
import React from "react";

function ProfilePic({ size = "size-[45px]", text = "text-xl" }) {
  const { data } = useGetUser();
  const { user } = data || {};
  let str = "";
  if (user) {
    str = user.name[0];
  }

  return (
    <div
      className={`${size} ${text} rounded-full bg-gray-400 flex items-center justify-center text-white `}
    >
      {str}
    </div>
  );
}

export default ProfilePic;
