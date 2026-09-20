import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#161616] text-white fixed top-0 right-0 left-0 z-50  selection:bg-[#FF6900] selection:text-white">
        <div className="navbar  p-3 container flex justify-between items-center">
          <div className="flex items-center gap-3 group ">
            <div className="image size-12">
              <img
                src="../../../public/logo-GdqARQRt.png"
                className="w-full group-hover:scale-110 transition-all duration-300"
                alt="logo"
              />
            </div>
            <div>
              <h2 className="font-bold text-[20px] leading-7">عدسة</h2>
              <p className="text-[#A15A0B] leading-4 text-[12px]">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>
          <div className="p-1.5 border border-[#262626] rounded-full">
            <ul className="flex items-center">
              <li>
                <NavLink
                  className="inline-block py-2.5 px-5 transition-all duration-300 text-neutral-400 hover:text-white border-0 rounded-4xl"
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="inline-block py-2.5 px-5 transition-all duration-300 text-neutral-400 hover:text-white border-0 rounded-4xl"
                  to="blog"
                >
                  المدونة
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="inline-block py-2.5 px-5 transition-all duration-300 text-neutral-400 hover:text-white border-0 rounded-4xl"
                  to="about"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon size-10 rounded-xl p-3 flex justify-center items-center border border-transparent hover:border hover:border-slate-500/50 group transition-all duration-300">
              <IoSearch className="transition duration-300 group-hover:text-[#FF6900]" />
            </div>
            <button
              className=" py-4 px-8 rounded-4xl bg-linear-[135deg] from-[#f97316] to-[#ea580c] text-sm font-bold transition duration-300 hover:-translate-y-1 " >
                <NavLink to="blog">

              ابدأ القراءه
                </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
