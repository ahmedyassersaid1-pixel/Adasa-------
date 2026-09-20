import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/posts.json";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = data.posts.find((p) => p.slug === slug);
  // console.log(post);
  const sections = post.content.split("##");

  const contentSections = sections.slice(1).map((section) => {
    const parts = section.trim().split("\n\n");

    return {
      title: parts[0],
      body: parts.slice(1).join("\n\n"),
    };
  });
  const catData = data.posts.filter((blog) => blog.category == post.category);

  return (
    <>
      <section className="bg-[#0a0a0a] min-h-screen text-white">
        <div className="relative h-[60vh] min-h-125 overflow-hidden">
          <img
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={post.image}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent" />
          <div className="absolute top-8 right-8 left-8">
            <header className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/"
              >
                <AiOutlineHome />
              </Link>
              <MdOutlineKeyboardArrowLeft />
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/blog"
              >
                المدونة
              </Link>
              <MdOutlineKeyboardArrowLeft />
              <span className="text-orange-400 font-medium truncate max-w-50">
                {post.category}
              </span>
            </header>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                  to={`/blog?category=${post.category}`}
                >
                  {post.category}{" "}
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <FaRegCalendarAlt />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}{" "}
              </h2>
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  src={post.author.avatar}
                />
                <div>
                  <p className="font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>
              <div className="prose-custom">
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {sections[0]?.trim()}
                </p>

                {contentSections.map((section, index) => (
                  <div
                    key={index}
                    id={`section-${index}`}
                    className="scroll-mt-24"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4">
                      <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                        <FaCamera className="text-orange-500" />
                      </span>

                      {section.title}
                    </h3>

                    <p className="text-neutral-300 leading-relaxed mb-6 text-lg whitespace-pre-line">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <FaTags className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <BsFillShareFill className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                      <FaXTwitter />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                      <FaLinkedin />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                      <IoLogoWhatsapp />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                      <FaLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    alt={post.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src={post.author.avatar}
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {post.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FaListUl className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    {contentSections.map((section, index) => (
                      <Link
                        key={index}
                        to={`#section-${index}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          {index + 1}
                        </span>

                        <span className="text-sm">{section.title}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <MdOutlineAccessTime className="text-orange-500 mb-2 size-6 mx-auto" />
                      <p className="text-white font-bold">{post.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <MdOutlineCalendarToday className="text-orange-500 size-6 mb-2 mx-auto" />

                      <p className="text-white font-bold text-sm">
                        {post.date}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IoMail className="text-orange-500 size-6" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                      to="/blog"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-images text-orange-500 text-xl" />
                  <IoMdPhotos className="text-orange-500 size-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                to="/blog"
                data-discover="true"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catData.slice(1, 4).map((post) => (
                <Link
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  to="/blog/wildlife-photography-tips"
                  key={post.id}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                   {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                          src={post.author.avatar}
                        />
                       {post.author.name}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
