import React, { useState } from "react";
import data from "../../data/posts.json";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { RiLandscapeAiLine } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Home() {
  const [posts, setPosts] = useState(data.posts);

  const [categories, setCategories] = useState(data.categories);

  return (
    <>
      <main>
        <section
          className="hero px-4 sm:px-8 py-16 md:py-20 text-white relative min-h-[90vh]  flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
          id="hero"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl "></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="content relative z-10 flex flex-col items-center w-full">
            <div className="head w-fit mb-8 flex gap-2 items-center py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900]">
              <span className="relative inline-flex size-1.5 animate-pulse rounded-full bg-[#FF6900]"></span>
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
              </span>

              <p>مرحباً بك في عدسة</p>
            </div>
            <div className="text-center ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight md:leading-snug font-bold mb-6">
                اكتشف <span className="text-[#FAA720]">فن</span> <br />
                التصوير الفوتوغرافي
              </h1>
              <p className="text-base sm:text-xl md:text-2xl leading-8 md:leading-10 text-gray-400 mb-6">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
            </div>
            <div className="buttons flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-3 mb-10 md:mb-16">
              <button className="flex justify-center group transition-all duration-300 hover:-translate-y-1 items-center gap-2 px-8 py-4 bg-linear-180  from-[#EB5B0D] to-[#F76F15] rounded-4xl">
                <NavLink className="font-bold" to="blog">
                  {" "}
                  استكشف المقالات
                </NavLink>
                <span className="transition-all duration-300 group-hover:-translate-x-1.5">
                  <FaArrowLeftLong />
                </span>
              </button>
              <button className="flex justify-center group transition-all duration-300 hover:border-[#FF6900] hover:bg-[#2C190B] hover:text-[#FF6900] items-center gap-2 px-8 py-4 border border-gray-500 rounded-4xl">
                <span>
                  <AiOutlineExclamationCircle />
                </span>
                <NavLink to="about">اعرف المزيد</NavLink>
              </button>
            </div>
            <div className=" grid w-full grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="flex flex-col items-center  p-4 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="icon mb-1">
                  <MdLibraryBooks className="size-8 text-[#FF6900]" />
                </div>
                <p className="text-[#FA991D] text-3xl leading-9 font-bold">
                  +50
                </p>
                <p className="text-[#4B4B4B]">مقالة</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="icon mb-1">
                  <FaUsers className="size-8 text-[#FF6900]" />
                </div>
                <p className="text-[#FA991D] text-3xl leading-9 font-bold">
                  +10ألف
                </p>
                <p className="text-[#4B4B4B]">قارئ</p>
              </div>{" "}
              <div className="flex flex-col items-center p-4 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="icon mb-1">
                  <FaFolderOpen className="size-8 text-[#FF6900]" />
                </div>
                <p className="text-[#FA991D] text-3xl leading-9 font-bold">4</p>
                <p className="text-[#4B4B4B]">تصنيفات</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="icon mb-1">
                  <FaPenNib className="size-8 text-[#FF6900]" />
                </div>
                <p className="text-[#FA991D] text-3xl leading-9 font-bold">6</p>
                <p className="text-[#4B4B4B]">كاتب</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="absolute z-0 top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
            <header className="relative z-20 flex flex-col md:flex-row md:justify-between gap-2 md:gap-6 mb-10 md:mb-12">
              <div className="right">
                <div className="head w-fit mb-8 flex gap-2 items-center py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900]">
                  <span className="relative inline-flex size-1.5 animate-pulse rounded-full bg-[#FF6900]"></span>
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
                  </span>

                  <p className="text-[#FF6900]">مميز</p>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    مقالات مختارة
                  </h2>
                  <p className="text-[18px] leading-7 text-gray-400 mb-6">
                    محتوى منتقى لبدء رحلة تعلمك
                  </p>
                </div>
              </div>
              <div className="left self-start md:self-end mb-6 md:mb-0">
                <button className="flex justify-center group transition-all duration-300 hover:-translate-y-1 items-center gap-2 px-8 py-4 bg-linear-180  from-[#EB5B0D] to-[#F76F15] rounded-4xl">
                  <NavLink className="font-bold" to="blog">
                    عرض الكل{" "}
                  </NavLink>
                  <span className="transition-all duration-300 group-hover:-translate-x-1.5 ">
                    <MdKeyboardArrowLeft />
                  </span>
                </button>
              </div>
            </header>
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1">
                {/* log */}
                <NavLink className="block" to={`/blog/${posts[0].slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full group border rounded-2xl transition-all duration-300 border-gray-500/50 hover:border-[#5D2F0F]">
                    <div className="order-2 md:order-none md:col-start-2 md:row-start-1 rounded-b-2xl md:rounded-b-none md:rounded-e-2xl p-5 sm:p-8 md:p-10 bg-[#161616] flex flex-col">
                      <div className="head flex flex-wrap items-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-[#2E1E14] text-[#FF6900] w-fit rounded-2xl border border-[#FF6900] text-[12px] leading-4 font-semibold">
                          {posts[0].category}
                        </div>
                        <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373]">
                          <IoIosTimer />
                          {posts[0].readTime}
                        </div>
                      </div>
                      <div className="content">
                        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug font-bold mb-4 group-hover:text-[#ff6900] transition-all duration-300">
                          {posts[0].title}
                        </h3>
                        <p className="text-[#a1a1a1] mb-6">
                          {posts[0].excerpt}
                        </p>
                      </div>
                      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="image size-12 rounded-full relative">
                            <img
                              src={posts[0].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                            <div className="size-3.5 rounded-full bg-[#FF6900] border-2 border-[#161616] absolute -bottom-1 left-0"></div>
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[0].author.name}
                            </h4>
                            <p className="text-[#737373] text-[12px] leading-4">
                              {posts[0].date}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 transition-all duration-300  text-[#ff6900]">
                            <span className="group-hover:translate-x-2 transition-all duration-300">
                              اقراء المقال
                            </span>{" "}
                            <FaArrowLeftLong />
                          </div>
                        </div>
                      </footer>
                    </div>
                    <div className="order-1 md:order-none md:col-start-1 md:row-start-1 rounded-t-2xl md:rounded-t-none md:rounded-s-2xl relative h-56 sm:h-72 md:h-100 overflow-hidden">
                      <div className="image w-full h-full relative">
                        <img
                          src={posts[0].image}
                          className="w-full h-full rounded-t-2xl md:rounded-t-none md:rounded-s-2xl object-cover transition-all duration-600 group-hover:scale-110"
                          alt=""
                        />
                        <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                      </div>
                      <span className="absolute top-5 right-5 py-1.5 px-3 rounded-3xl flex items-center gap-2 bg-linear-0 from-[#FF7100] to-[#F1AE00]">
                        <FaStar className="size-3" /> مميز
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-span-1">
                {/* log */}

                <NavLink className="block" to={`/blog/${posts[1].slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full group border rounded-2xl transition-all duration-300 border-gray-500/50 hover:border-[#5D2F0F]">
                    <div className="order-2 md:order-none md:col-start-2 md:row-start-1 rounded-b-2xl md:rounded-b-none md:rounded-e-2xl p-5 sm:p-8 md:p-10 bg-[#161616] flex flex-col">
                      <div className="head flex flex-wrap items-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-[#2E1E14] text-[#FF6900] w-fit rounded-2xl border border-[#FF6900] text-[12px] leading-4 font-semibold">
                          {posts[1].category}
                        </div>
                        <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373]">
                          <IoIosTimer />
                          {posts[1].readTime}
                        </div>
                      </div>
                      <div className="content">
                        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug font-bold mb-4 group-hover:text-[#ff6900] transition-all duration-300">
                          {posts[1].title}
                        </h3>
                        <p className="text-[#a1a1a1] mb-6">
                          {posts[1].excerpt}
                        </p>
                      </div>
                      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="image size-12 rounded-full relative">
                            <img
                              src={posts[1].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                            <div className="size-3.5 rounded-full bg-[#FF6900] border-2 border-[#161616] absolute -bottom-1 left-0"></div>
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[1].author.name}
                            </h4>
                            <p className="text-[#737373] text-[12px] leading-4">
                              {posts[1].date}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 transition-all duration-300  text-[#ff6900]">
                            <span className="group-hover:translate-x-2 transition-all duration-300">
                              اقراء المقال
                            </span>{" "}
                            <FaArrowLeftLong />
                          </div>
                        </div>
                      </footer>
                    </div>
                    <div className="order-1 md:order-none md:col-start-1 md:row-start-1 rounded-t-2xl md:rounded-t-none md:rounded-s-2xl relative h-56 sm:h-72 md:h-100 overflow-hidden">
                      <div className="image w-full h-full relative">
                        <img
                          src={posts[1].image}
                          className="w-full h-full rounded-t-2xl md:rounded-t-none md:rounded-s-2xl object-cover transition-all duration-600 group-hover:scale-110"
                          alt=""
                        />
                        <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                      </div>
                      <span className="absolute top-5 right-5 py-1.5 px-3 rounded-3xl flex items-center gap-2 bg-linear-0 from-[#FF7100] to-[#F1AE00]">
                        <FaStar className="size-3" /> مميز
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-span-1">
                {/* log */}

                <NavLink className="block" to={`/blog/${posts[2].slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full group border rounded-2xl transition-all duration-300 border-gray-500/50 hover:border-[#5D2F0F]">
                    <div className="order-2 md:order-none md:col-start-2 md:row-start-1 rounded-b-2xl md:rounded-b-none md:rounded-e-2xl p-5 sm:p-8 md:p-10 bg-[#161616] flex flex-col">
                      <div className="head flex flex-wrap items-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-[#2E1E14] text-[#FF6900] w-fit rounded-2xl border border-[#FF6900] text-[12px] leading-4 font-semibold">
                          {posts[2].category}
                        </div>
                        <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373]">
                          <IoIosTimer />
                          {posts[2].readTime}
                        </div>
                      </div>
                      <div className="content">
                        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug font-bold mb-4 group-hover:text-[#ff6900] transition-all duration-300">
                          {posts[2].title}
                        </h3>
                        <p className="text-[#a1a1a1] mb-6">
                          {posts[2].excerpt}
                        </p>
                      </div>
                      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="image size-12 rounded-full relative">
                            <img
                              src={posts[2].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                            <div className="size-3.5 rounded-full bg-[#FF6900] border-2 border-[#161616] absolute -bottom-1 left-0"></div>
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[2].author.name}
                            </h4>
                            <p className="text-[#737373] text-[12px] leading-4">
                              {posts[2].date}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 transition-all duration-300  text-[#ff6900]">
                            <span className="group-hover:translate-x-2 transition-all duration-300">
                              اقراء المقال
                            </span>{" "}
                            <FaArrowLeftLong />
                          </div>
                        </div>
                      </footer>
                    </div>
                    <div className="order-1 md:order-none md:col-start-1 md:row-start-1 rounded-t-2xl md:rounded-t-none md:rounded-s-2xl relative h-56 sm:h-72 md:h-100 overflow-hidden">
                      <div className="image w-full h-full relative">
                        <img
                          src={posts[2].image}
                          className="w-full h-full rounded-t-2xl md:rounded-t-none md:rounded-s-2xl object-cover transition-all duration-600 group-hover:scale-110"
                          alt=""
                        />
                        <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                      </div>
                      <span className="absolute top-5 right-5 py-1.5 px-3 rounded-3xl flex items-center gap-2 bg-linear-0 from-[#FF7100] to-[#F1AE00]">
                        <FaStar className="size-3" /> مميز
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 md:p-24 border-y border-gray-800/50 bg-[#111111] text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center">
              <div className="head  w-fit mb-8 flex gap-2 items-center py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900]">
                <span className="relative inline-flex size-1.5 animate-pulse rounded-full bg-[#FF6900]"></span>
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
                </span>

                <p className="text-[#FF6900]">التصنيفات</p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
                  استكشف حسب الموضوع
                </h2>
                <p className="text-[18px] leading-7 text-gray-400 mb-6">
                  اعثر على محتوى مصمم حسب اهتماماتك
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                {categories.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="col-span-6 sm:col-span-3 group transition-all duration-500 hover:-translate-y-2"
                    >
                      <NavLink to="blog">
                        <div className="relative p-4 sm:p-6 border border-gray-800/50 rounded-2xl flex justify-between overflow-hidden transition-all duration-300">
                          <div className="absolute inset-0 bg-linear-[145deg] from-[#DD6500] to-[#F2AD00] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                          <div className="right relative z-10">
                            <div className="icon size-12 bg-[#2E1E14] flex items-center justify-center rounded-2xl border border-[#FF6900] mb-4 transition-all duration-300 group-hover:bg-[#FDA833] group-hover:border-transparent">
                              {category.color == "emerald" ? (
                                <FaSun className="text-[#FF6900] transition-all duration-300 group-hover:text-white size-5" />
                              ) : category.color == "purple" ? (
                                <FaUserLarge className="text-[#FF6900] transition-all duration-300 group-hover:text-white size-5" />
                              ) : category.color == "blue" ? (
                                <RiLandscapeAiLine className="text-[#FF6900] transition-all duration-300 group-hover:text-white size-5" />
                              ) : (
                                <GrTechnology className="text-[#FF6900] transition-all duration-300 group-hover:text-white size-5" />
                              )}
                            </div>
                            <h3 className="mb-1 text-[18px] leading-7 font-bold">
                              {category.name}
                            </h3>
                            <p className="text-[14px] leading-5 text-gray-500/80 transition-all duration-300 group-hover:text-gray-300">
                              {category.count} مقالة
                            </p>
                          </div>
                          <div className="left relative z-10">
                            <div className="icon flex justify-center items-center size-8 rounded-full bg-[#FF9D33] mt-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                              <IoIosArrowBack />
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#0A0A0A]  z-10">
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
          <div className="container px-4 sm:px-6 lg:px-8 text-white ">
            <header className="relative z-20 flex flex-col md:flex-row md:justify-between gap-2 md:gap-6 mb-10 md:mb-12">
              <div className="right">
                <div className="head w-fit mb-8 flex gap-2 items-center py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900]">
                  <span className="relative inline-flex size-1.5 animate-pulse rounded-full bg-[#FF6900]"></span>
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
                  </span>

                  <p className="text-[#FF6900]">الأحدث</p>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    أحدث المقالات
                  </h2>
                  <p className="text-[18px] leading-7 text-gray-400 mb-6">
                    محتوى جديد طازج من المطبعة
                  </p>
                </div>
              </div>
              <div className="left self-start md:self-end mb-6 md:mb-0">
                <button className="flex group transition-all duration-300 text-[#FF6900] hover:text-[#FF8904] items-center gap-2 ">
                  <NavLink className="font-bold" to="blog">
                    عرض جميع المقالات
                  </NavLink>
                  <span className="transition-all duration-300 group-hover:-translate-x-1 ">
                    <FaArrowLeftLong />
                  </span>
                </button>
              </div>
            </header>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4 relative z-10">
              <div className="col-span-6 md:col-span-6 lg:col-span-4">
                <NavLink className="block" to={`/blog/${posts[3].slug}`}>
                  <div className="item rounded-2xl border border-gray-600/50 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        src={posts[3].image}
                        className="w-full aspect-video object-cover rounded-t-2xl group-hover:scale-110 transition-all duration-300"
                        alt=""
                      />
                      <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                    </div>
                    <div className=" rounded-b-2xl p-6 bg-[#161616]">
                      <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373] mb-3">
                        <IoIosTimer />
                        {posts[3].readTime}
                        <span className="size-1.5 rounded-full bg-[#737373]"></span>
                        <p className="text-[#737373] text-[12px] leading-4">
                          {posts[3].date}
                        </p>
                      </div>
                      <h3 className=" mb-3 text-[20px] leading-6.25 font-semibold transition-all duration-300 group-hover:text-[#FF6900]">
                        {posts[3].title}
                      </h3>
                      <p className="text-[#a1a1a1] mb-5 text-[14px] leading-5.75 ">
                        {posts[3].excerpt}
                      </p>
                      <div className="foot pt-4 border-t border-gray-600/50 flex items-center justify-between">
                        <div className="right flex items-center gap-2">
                          <div className="image size-9 rounded-full relative">
                            <img
                              src={posts[3].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[3].author.name}
                            </h4>
                            <p className="text-[#a1a1a1] text-[12px] leading-4">
                              {posts[3].author.role}
                            </p>
                          </div>
                        </div>
                        <div className="left">
                          <div className="icon size-8 rounded-full bg-[#2E1E14] flex items-center justify-center border border-[#FF6900] transition-all duration-300 group-hover:bg-[#FF6900]">
                            <MdKeyboardArrowLeft className="text-[#FF6900] transition-all duration-300 group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-span-6 md:col-span-6 lg:col-span-4">
                <NavLink className="block" to={`/blog/${posts[4].slug}`}>
                  <div className="item rounded-2xl border border-gray-600/50 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        src={posts[4].image}
                        className="w-full aspect-video object-cover rounded-t-2xl group-hover:scale-110 transition-all duration-300"
                        alt=""
                      />
                      <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                    </div>
                    <div className=" rounded-b-2xl p-6 bg-[#161616]">
                      <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373] mb-3">
                        <IoIosTimer />
                        {posts[4].readTime}
                        <span className="size-1.5 rounded-full bg-[#737373]"></span>
                        <p className="text-[#737373] text-[12px] leading-4">
                          {posts[4].date}
                        </p>
                      </div>
                      <h3 className=" mb-3 text-[20px] leading-6.25 font-semibold transition-all duration-300 group-hover:text-[#FF6900]">
                        {posts[4].title}
                      </h3>
                      <p className="text-[#a1a1a1] mb-5 text-[14px] leading-5.75 ">
                        {posts[4].excerpt}
                      </p>
                      <div className="foot pt-4 border-t border-gray-600/50 flex items-center justify-between">
                        <div className="right flex items-center gap-2">
                          <div className="image size-9 rounded-full relative">
                            <img
                              src={posts[4].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[4].author.name}
                            </h4>
                            <p className="text-[#a1a1a1] text-[12px] leading-4">
                              {posts[4].author.role}
                            </p>
                          </div>
                        </div>
                        <div className="left">
                          <div className="icon size-8 rounded-full bg-[#2E1E14] flex items-center justify-center border border-[#FF6900] transition-all duration-300 group-hover:bg-[#FF6900]">
                            <MdKeyboardArrowLeft className="text-[#FF6900] transition-all duration-300 group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-span-6 md:col-span-6 lg:col-span-4">
                <NavLink className="block" to={`/blog/${posts[5].slug}`}>
                  <div className="item rounded-2xl border border-gray-600/50 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        src={posts[5].image}
                        className="w-full aspect-video object-cover rounded-t-2xl group-hover:scale-110 transition-all duration-300"
                        alt=""
                      />
                      <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                    </div>
                    <div className=" rounded-b-2xl p-6 bg-[#161616]">
                      <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373] mb-3">
                        <IoIosTimer />
                        {posts[5].readTime}
                        <span className="size-1.5 rounded-full bg-[#737373]"></span>
                        <p className="text-[#737373] text-[12px] leading-4">
                          {posts[5].date}
                        </p>
                      </div>
                      <h3 className=" mb-3 text-[20px] leading-6.25 font-semibold transition-all duration-300 group-hover:text-[#FF6900]">
                        {posts[5].title}
                      </h3>
                      <p className="text-[#a1a1a1] mb-5 text-[14px] leading-5.75 ">
                        {posts[5].excerpt}
                      </p>
                      <div className="foot pt-4 border-t border-gray-600/50 flex items-center justify-between">
                        <div className="right flex items-center gap-2">
                          <div className="image size-9 rounded-full relative">
                            <img
                              src={posts[5].author.avatar}
                              className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-[14px] leading-5 font-semibold">
                              {posts[5].author.name}
                            </h4>
                            <p className="text-[#a1a1a1] text-[12px] leading-4">
                              {posts[5].author.role}
                            </p>
                          </div>
                        </div>
                        <div className="left">
                          <div className="icon size-8 rounded-full bg-[#2E1E14] flex items-center justify-center border border-[#FF6900] transition-all duration-300 group-hover:bg-[#FF6900]">
                            <MdKeyboardArrowLeft className="text-[#FF6900] transition-all duration-300 group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="form relative bg-[#0A0A0A] text-white py-16 md:py-24">
            <div className="absolute z-0  top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#161616] rounded-3xl border border-[#262626] p-6 sm:p-8 md:p-12 lg:p-16 flex items-center flex-col text-center">
                <div className="icon mb-6 size-16 flex justify-center items-center bg-linear-300 from-[#F64D00] to-[#FF6600] rounded-2xl">
                  <FaRegEnvelope className="size-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-bold mb-4">
                  اشترك في{" "}
                  <span className="bg-linear-to-r from-[#DD6500] to-[#F2AD00] bg-clip-text text-transparent">
                    نشرتنا الإخبارية
                  </span>
                </h2>
                <p className="text-[18px] leading-7 text-gray-400 mb-6">
                  احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                  الإلكتروني
                </p>
                <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto mb-6">
                  <input
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    اشترك الآن
                  </button>
                </form>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2 space-x-reverse">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-[#161616]"
                        alt=""
                        src={posts[0].author.avatar}
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-[#161616]"
                        alt=""
                        src={posts[1].author.avatar}
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-[#161616]"
                        alt=""
                        src={posts[2].author.avatar}
                      />
                    </div>
                    <span>
                      انضم لـ{" "}
                      <span className="text-white font-medium">+10,000</span>
                      مصور
                    </span>
                  </div>
                  <span className="hidden sm:inline text-[#262626]">•</span>
                  <span>بدون إزعاج</span>
                  <span className="hidden sm:inline text-[#262626]">•</span>
                  <span>إلغاء الاشتراك في أي وقت</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
