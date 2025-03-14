import Loader from "@/common/Loader";
import TextField from "@/common/TextField";
import React from "react";

function SendOTPForm({ phoneNumber, onChange, onSubmit, isLoading }) {
  return (
    <div className="container xl:max-w-screen-xl flex flex-col items-center mt-8">
      <h1 className="font-extrabold text-4xl hover:text-primary-900 transition-all duration-300 text-secondary-800">
        دیجی شاپ
      </h1>
      <p>ورود | ثبت‌نام</p>
      <form onSubmit={onSubmit} className="space-y-5 mt-5 max-w-md">
        <TextField
          label="شماره موبايل"
          type="tel"
          name={phoneNumber}
          onChange={onChange}
          maxLength="11"
          pattern="0\d{10}"
        />
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            ارسال كد تاييد
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
