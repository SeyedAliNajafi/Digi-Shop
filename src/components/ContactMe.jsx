import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@/common/TextField";
import toast from "react-hot-toast";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vxf368g", "template_p5zg2x8", form.current, {
        publicKey: "vTbn5fywqGthoLmKg",
      })
      .then(
        () => {
          toast.success("ممنون برای نظرات شما");
        },
        (error) => {
          toast.error("خطا در ارسال پیام");
        }
      );
  };

  return (
    <div className="flex justify-center px-3" id="contact-us-mobile">
      <div className="flex justify-center items-center flex-col gap-y-4 bg-gray-100/50 p-4 rounded-2xl w-96 md:w-[450px] lg:w-[600px]">
        <div className="flex justify-center flex-col items-center mb-2">
          <h2 className="font-bold text-2xl my-2">ارتباط با ما</h2>
          <p>
            از طریق این فرم می‌توانید هر گونه پیشنهادات، انتقادات یا نظرات خود
            را با در میان بگذارید.
          </p>
          <p>تیم دیجی شاپ در کمترین زمان ممکن جواب سوال های شما را می‌دهد.</p>
        </div>
        <div>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <TextField name="user_name" label={"نام و نام خانوادگی"} />
            </div>
            <div>
              <TextField type="email" name="user_email" label={"ایمیل"} />
            </div>
            <div>
              <label className="mb-2" htmlFor="message">
                پیام
              </label>
              <textarea
                type="text"
                className="textField__input h-44 text-start resize-none"
                name="message"
              />
            </div>
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
