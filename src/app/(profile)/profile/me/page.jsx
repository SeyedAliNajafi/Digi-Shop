"use client";

import Loader from "@/common/Loader";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import SideBar from "../SideBar";
import SideBarMobile from "../SideBarMobile";
import Greeting from "@/components/Greeting";
import Link from "next/link";
import ProfilePic from "@/common/ProfilePic";

function MePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const [formData, setFormData] = useState({});
  const { user } = data || {};

  const includeskey = ["name", "email", "phoneNumber", "biography"];
  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-5 bg-white h-screen">
      <div className="col-span-1 bg-white overflow-y-hidden w-full p-4 hidden lg:block">
        <SideBar />
      </div>
      <SideBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:col-span-4 overflow-y-auto col-span-5">
        <div className="bg-white p-4 flex justify-between ">
          <div className="flex items-center gap-x-2 flex-col lg:flex-row">
            <div className="flex items-center gap-x-1">
              <span className="lg:hidden" onClick={() => setIsOpen(true)}>
                <svg
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-gray-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </span>
              <h1 className="text-lg">
                سلام؛ <span className="font-black text-xl">{user.name}</span>
              </h1>
            </div>
            <span className="hidden lg:block h-4 w-0.5 bg-gray-200"></span>
            <Greeting />
          </div>
          <div className="flex gap-x-3">
            <Link href="/cart">
              <button className="border-gray-200 border p-2 rounded-2xl shadow-lg">
                <svg
                  className="h-6 w-6 text-secondary-700 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </button>
            </Link>
            <Link href="/profile">
              <button className="border-gray-200 border p-2 rounded-2xl shadow-lg">
                <svg
                  className="h-6 w-6 text-secondary-700 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full bg-gray-100/60 p-4 rounded-2xl">
          <div className="max-w-sm">
            <h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
            <div className="bg-white p-4 rounded-2xl">
              <div className="flex justify-center ">
                <ProfilePic size="size-[110px]" text="text-6xl" />
              </div>
              <form onSubmit={sumbitHandler} className="space-y-5 ">
                {Object.keys(includeObj(user, includeskey)).map((key) => {
                  return (
                    <TextField
                      label={key}
                      name={key}
                      key={key}
                      value={formData[key] || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  );
                })}
                <div className="pt-2">
                  {isUpdating ? (
                    <Loader />
                  ) : (
                    <button type="submit" className="btn btn--primary w-full">
                      ثبت تغییرات
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MePage;
