import Logo from "@/common/Logo";
import React from "react";

function Footer() {
  return (
    <div className="container xl:max-w-screen-xl bg-gray-100 rounded-2xl p-4  lg:my-10 px-3">
      <div className="flex flex-col md:flex-row justify-between items-center mx-8 gap-y-">
        <div className="md:w-96 w-80">
          <Logo size="size-24" />
          <p>
            دیجی شاپ توسط درست سید علی نجفی شده و برای دیدن پروژه های بیشتر به
            پورتفولیو یا گیت هابم مراجعه کنید.
          </p>
          <p>
            دیجی شاپ یک سایت فروشگاهی کامل است، برای هر گونه پیشنهاد، نظر یا
            انتقاد می‌توانید از طریق فرم بالا با ما ارتباط برقرار کنید.
          </p>
        </div>
        <div
          className="flex flex-col gap-y-4 justify-center md:mt-24 mt-10 "
          dir="ltr"
        >
          <div className="flex flex-row gap-x-5 items-center hover:text-primary-900 fill-current">
            <a
              href="https://github.com/SeyedAliNajafi"
              target="_blank"
              className="fill-current"
            >
              <svg
                className="size-8 transition-all duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              className=" transition-all duration-400"
              href="https://github.com/SeyedAliNajafi"
              target="_blank"
            >
              SeyedAliNajafi
            </a>
          </div>
          <div className="flex flex-row gap-x-5 items-center hover:text-primary-900 fill-current">
            <a
              href="www.linkedin.com/in/seyed-ali-najafi"
              target="_blank"
              className="fill-current"
            >
              <svg
                className="size-8 transition-all duration-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a
              className=" transition-all duration-400"
              href="www.linkedin.com/in/seyed-ali-najafi"
              target="_blank"
            >
              Seyed Ali Najafi
            </a>
          </div>
          <div className="flex flex-row gap-x-5 items-center hover:text-primary-900 fill-current">
            <a href="https://seyedalinajafi.ir/" target="_blank">
              <svg
                className="size-8 transition-all duration-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
              </svg>
            </a>
            <a
              className="transition-all duration-400"
              href="https://seyedalinajafi.ir/"
              target="_blank"
              id="section1"
            >
              seyedalinajafi.ir
            </a>
          </div>
          <div className="flex flex-row gap-x-5 items-center hover:text-primary-900 fill-current">
            <a
              href="https://t.me/AliNajafi006"
              target="_blank"
              className="fill-current"
            >
              <svg
                className="size-8 transition-all duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
              </svg>
            </a>
            <a
              className=" transition-all duration-400"
              href="https://t.me/AliNajafi006"
              target="_blank"
            >
              AliNajafi006
            </a>
          </div>
          <div className="flex flex-row gap-x-5 items-center hover:text-primary-900 fill-current">
            <a href="mailto:seyedalinajafi1388@gmail.com" target="_blank">
              <svg
                className="size-8 transition-all duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
            <a
              className="transition-all duration-400"
              href="mailto:seyedalinajafi1388@gmail.com"
              target="_blank"
            >
              seyedalinajafi1388@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#050e0c] opacity-75 mt-16 mb-12"></div>
      <div className="flex justify-center flex-col items-center md:gap-y-3">
        <p className="font-extrabold text-3xl hidden md:block">
          Made by{" "}
          <strong className="hover:text-primary-900 transition-all duration-300">
            Seyed Ali Najafi
          </strong>
        </p>
        <p className="font-bold text-3xl block md:hidden">Made by</p>
        <strong className="font-bold text-3xl block md:hidden">
          Seyed Ali Najafi
        </strong>
        <h1 className="hover:text-primary-900 transition-all duration-300 text-3xl font-extrabold persian mb-3 lg:mb-7 ">
          سید علی نجفی
        </h1>
      </div>
    </div>
  );
}

export default Footer;
