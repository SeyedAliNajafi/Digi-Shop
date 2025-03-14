"use client";
import TextField from "@/common/TextField";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { data, isLoading, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, email });
      toast.success(message);
      router.push("/"); // Redirect to home
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100); // Small delay ensures navigation completes before refresh
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-5" onSubmit={submitHandler}>
          <TextField
            name="name"
            label="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            name="email"
            label="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isLoading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تکمیل اطلاعات
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfile;
