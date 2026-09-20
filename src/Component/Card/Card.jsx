import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Card({ posts, display }) {
  return (
    <>
      {posts.map((post) => (
        <div
          className={
            display === "grid"
              ? "col-span-6 md:col-span-6 lg:col-span-4 "
              : "col-span-1 "
          }
          key={post.id}
        >
          <div className="item h-full  rounded-2xl border border-gray-600/50 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <NavLink
              to={`/blog/${post.slug}`}
              className="h-full"
            >
              <div
                className={
                  display === "grid"
                    ? "image relative overflow-hidden"
                    : "image relative overflow-hidden w-72 lg:w-80 shrink-0"
                }
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={
                    display === "grid"
                      ? "w-full rounded-t-2xl group-hover:scale-110 transition-all duration-300"
                      : " w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  }
                />

                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                  {post.category}
                </div>

                <div className="overlay w-full h-[50%] absolute bottom-0 left-0 right-0 bg-linear-0 from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
              </div>

              <div
                className={
                  display === "grid"
                    ? "h-full rounded-b-2xl p-6 bg-[#161616]"
                    : "flex-1 p-6 bg-[#161616] flex flex-col justify-center"
                }
              >
                <div className="flex items-center gap-2 text-[14px] leading-5 text-[#737373] mb-3">
                  <IoIosTimer />
                  {post.readTime}

                  <span className="size-1.5 rounded-full bg-[#737373]"></span>

                  <p className="text-[#737373] text-[12px] leading-4">
                    {post.date}
                  </p>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-[20px] leading-6.25 font-semibold transition-all duration-300 group-hover:text-[#FF6900]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#a1a1a1] mb-5 text-[14px] leading-5.75">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="foot pt-4 border-t border-gray-600/50 flex items-center justify-between mt-auto">
                  <div className="right flex items-center gap-2">
                    <div className="image size-9 rounded-full relative">
                      <img
                        src={post.author.avatar}
                        className="w-full h-full object-cover rounded-full ring-2 ring-[#262626]"
                        alt={post.author.name}
                      />
                    </div>

                    <div>
                      <h4 className="text-[14px] leading-5 font-semibold">
                        {post.author.name}
                      </h4>

                      <p className="text-[#a1a1a1] text-[12px] leading-4">
                        {post.author.role}
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
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
