import React from "react";
import OTPInput from "react-otp-input";
function CheckOTPForm({
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendOtp,
  otpResponse,
  isCheckingOtp,
}) {
  return (
    <div>
      <div className="flex items-center my-6">
        <button onClick={onBack} className="justify-self-end border border-secondary-500 rounded-lg p-1">
          <svg
            className="size-4 text-secondary-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
        <h1 className="font-extrabold text-4xl hover:text-primary-900 transition-all duration-300 text-secondary-800 text-center flex-1">
          دیجی شاپ
        </h1>
      </div>
      {/* <p>
        {otpResponse?.message}
        <button onClick={onBack}>ویرایش؟</button>
      </p> */}
      <form className="space-y-6" onSubmit={onSubmit}>
        <p className="text-xl font-bold text-secondary-700">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            width: "2.5rem",
            padding: "0.9rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
            outline: "none",
          }}
          containerStyle="flex flex-row-reverse gap-x-4 justify-center"
          renderInput={(props) => <input type="number" {...props} />}
        />
        <div
          onClick={onResendOtp}
          className="flex justify-center text-secondary-800 text-sm"
        >
          دریافت مجدد کد تایید
        </div>
        {isCheckingOtp ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOTPForm;
