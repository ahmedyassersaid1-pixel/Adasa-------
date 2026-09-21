import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/blog", label: "المدونة" },
  { to: "/about", label: "من نحن" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="bg-[#161616] text-white fixed top-0 right-0 left-0 z-50 selection:bg-[#FF6900] selection:text-white">
        <div className="navbar p-3 container flex justify-between items-center gap-3">
          <Link to="/"  className="flex items-center gap-3 group min-w-0">
            <div className="image size-10 sm:size-12 shrink-0">
              <img
                src="../../../public/logo.png"
                className="w-full group-hover:scale-110 transition-all duration-300"
                alt="logo"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-[18px] sm:text-[20px] leading-7">عدسة</h2>
              <p className="hidden sm:block text-[#A15A0B] leading-4 text-[12px]">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:block p-1.5 border border-[#262626] rounded-full">
            <ul className="flex items-center">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    className="inline-block py-2.5 px-4 lg:px-5 transition-all duration-300 text-neutral-400 hover:text-white border-0 rounded-4xl"
                    to={l.to}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="icon size-10 rounded-xl p-3 flex justify-center items-center border border-transparent hover:border hover:border-slate-500/50 group transition-all duration-300">
              <IoSearch className="transition duration-300 group-hover:text-[#FF6900]" />
            </div>
            <NavLink
              to="/blog"
              className="hidden md:inline-block py-3 lg:py-4 px-6 lg:px-8 rounded-4xl bg-linear-[135deg] from-[#f97316] to-[#ea580c] text-sm font-bold transition duration-300 hover:-translate-y-1"
            >
              ابدأ القراءه
            </NavLink>
            <button
              type="button"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden size-10 rounded-xl flex justify-center items-center border border-[#262626] text-xl"
            >
              {open ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#262626] bg-[#161616]">
            <ul className="container px-3 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    onClick={close}
                    to={l.to}
                    className="block py-3 px-4 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <NavLink
                  onClick={close}
                  to="/blog"
                  className="block text-center py-3 px-6 rounded-4xl bg-linear-[135deg] from-[#f97316] to-[#ea580c] text-sm font-bold"
                >
                  ابدأ القراءه
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
