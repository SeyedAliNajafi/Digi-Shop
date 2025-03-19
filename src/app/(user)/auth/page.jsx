"use client";
import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";
const RESEND_TIME = 90;
function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();
  const {
    data: otpResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: muatateCheckOtp, isLoading: isCheckingOtp } =
    useMutation({
      mutationFn: checkOtp,
    });
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const setOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOtp({ phoneNumber });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await muatateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/"); // Redirect to home
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100); // Small delay ensures navigation completes before refresh
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((s) => s - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={setOTPHandler}
            isLoading={isLoading}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={setOTPHandler}
            otpResponse={otpResponse}
            isCheckingOtp={isCheckingOtp}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center mx-10 md:mx-0">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
}

export default AuthPage;
