import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626] selection:bg-[#FF6900] selection:text-white">
        <div className="container">
          <div className="absolute z-0 top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute z-0 bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 relative z-10 px-4 sm:px-8 py-12 md:py-16">
            <div className="lg:col-span-1">
              <NavLink to="/">
                <div className="flex items-center gap-3 mb-6 group ">
                  <div className="size-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <span className="text-white font-bold text-xl">ع</span>
                  </div>
                  <span className="text-xl font-bold text-white">عدسة</span>
                </div>
              </NavLink>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <Link
                  to="https://twitter.com/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  to="https://github.com/"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </Link>
                <Link
                  to="https://linkedin.com/"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://youtube.com/"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/about"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/blog"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/about"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    مناظر طبيعية{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/about"
                  >
                    <IoIosArrowForward className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                    تقنيات{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                  ابقى على اطلاع
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                      type="email"
                    />
                  </div>
                  <button className="w-full py-4 px-8 rounded-4xl bg-linear-[135deg] from-[#f97316] to-[#ea580c] text-sm font-bold transition duration-300 hover:-translate-y-1 ">
                    اشتراك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 py-6 border-t border-gray-600/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
              <div className="lg:col-span-1 flex flex-wrap items-center gap-1 justify-center lg:justify-start text-sm text-neutral-500 mb-4 lg:mb-6 leading-relaxed text-center">
                © 2026 عدسة. صنع بكل{" "}
                <span>
                  <FaHeart className="text-[#FF6900]" />
                </span>{" "}
                جميع الحقوق محفوظة.
              </div>
              <div className="lg:col-span-1 flex items-center gap-1 justify-center lg:justify-end text-sm text-neutral-500 mb-2 lg:mb-6 leading-relaxed">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 items-center ">
                  <li>
                    <Link
                      className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                      to="/privacy"
                    >
                      سياسة الخصوصية{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                      to="/terms"
                    >
                      شروط الخدمة{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
