import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";

import data from "../../data/posts.json";
import Card from "./../Card/Card";
export default function Blog() {
  const [posts, setPosts] = useState(data.posts);
  // console.log(posts.length);

  const [categories, setCategories] = useState(data.categories);
  let [currentPage, setcurrentPage] = useState(1);
  const [currentCat, setcurrentCat] = useState("جميع المقالات");

  const postsPerPage = 6;

  let filteredPosts;

  if (currentCat === "جميع المقالات") {
    filteredPosts = posts;
  } else {
    filteredPosts = posts.filter((post) => post.category === currentCat);
  }

  let startIndex = (currentPage - 1) * postsPerPage;
  let endIndex = startIndex + postsPerPage;

  const [search, setSearch] = useState("");
  function getValue(event) {
    const word = event.target.value;
    setSearch(word);
  }
  // console.log(search);
  const searchedPosts = filteredPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  });
  let currentPosts = searchedPosts.slice(startIndex, endIndex);

  function filterCategory(category) {
    setcurrentCat(category);
    setcurrentPage(1);
  }
  const [display, setDisplay] = useState("grid");
  console.log(display);

  return (
    <>
      <main>
        <section>
          <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="relative py-20 overflow-hidden">
              <div className="absolute inset-0 bg-[#0a0a0a]"></div>
              <div className="absolute inset-0 bg-[linear-linear(rgba(38,38,38,0.5)_1px,transparent_1px),linear-linear(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="head mx-auto w-fit mb-8 flex gap-2 items-center  py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900] ">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
                  </span>
                  <GrNotes className="text-[#FF6900]" />
                  <p className="text-[#FF6900]">مدونتنا</p>
                </div>
                <h2 className="text-6xl leading-15 font-bold mb-4">
                  استكشف{" "}
                  <span className="bg-linear-to-r from-[#DD6500] to-[#F2AD00] bg-clip-text text-transparent">
                    مقالاتنا
                  </span>
                </h2>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                  اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
              </div>
            </div>
            <section>
              <div className="search sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-80">
                      <input
                        onChange={(e) => getValue(e)}
                        placeholder="ابحث في المقالات..."
                        className="bg-[#161616] rounded-2xl border border-gray-600/50 focus:border-[#DD6500] focus:outline-none w-full px-5 py-3 pr-12"
                        type="text"
                      />
                      <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        onClick={() => filterCategory("جميع المقالات")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "جميع المقالات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        جميع المقالات
                      </button>
                      <button
                        onClick={() => filterCategory("إضاءة")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "إضاءة" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        إضاءة
                      </button>
                      <button
                        onClick={() => filterCategory("بورتريه")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "بورتريه" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        بورتريه
                      </button>
                      <button
                        onClick={() => filterCategory("مناظر طبيعية")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "مناظر طبيعية" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        مناظر طبيعية
                      </button>
                      <button
                        onClick={() => filterCategory("تقنيات")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "تقنيات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        تقنيات
                      </button>
                      <button
                        onClick={() => filterCategory("معدات")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentCat == "معدات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                      >
                        معدات
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <section className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12">
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-neutral-400">
                    عرض{" "}
                    <span className="font-bold text-white">
                      {filteredPosts.length}
                    </span>{" "}
                    مقالات
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                      <button
                        onClick={() => setDisplay("grid")}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          display === "grid"
                            ? "bg-orange-500 text-white"
                            : "text-neutral-400 hover:text-white"
                        }`}
                        title="grid"
                      >
                        <span>
                          <HiOutlineSquares2X2 />
                        </span>
                      </button>
                      <button
                        onClick={() => setDisplay("list")}
                        className={`p-2 rounded-lg transition-all duration-300  ${
                          display === "list"
                            ? "bg-orange-500 text-white"
                            : "text-neutral-400 hover:text-white"
                        }`}
                        title="list"
                      >
                        <span>
                          <IoMenu />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div
                    className={
                      display === "grid"
                        ? "grid grid-cols-6 md:grid-cols-12 gap-4 "
                        : "grid grid-cols-1  gap-4 relative z-10 "
                    }
                  >
                    <Card display={display} posts={currentPosts} />
                  </div>
                </div>
                <div className="pagnation">
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      className={`p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                      disabled={currentPage === 1}
                      onClick={() => setcurrentPage(currentPage - 1)}
                    >
                      <IoIosArrowForward />
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setcurrentPage(1)}
                        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === 1 ? "bg-linear-to-r from-orange-500 to-orange-600" : null}`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setcurrentPage(2)}
                        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === 2 ? "bg-linear-to-r from-orange-500 to-orange-600" : null}`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setcurrentPage(3)}
                        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === 3 ? "bg-linear-to-r from-orange-500 to-orange-600" : null}`}
                      >
                        3
                      </button>
                      <button
                        onClick={() => setcurrentPage(4)}
                        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === 4 ? "bg-linear-to-r from-orange-500 to-orange-600" : null}`}
                      >
                        4
                      </button>
                      <button
                        onClick={() => setcurrentPage(5)}
                        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === 5 ? "bg-linear-to-r from-orange-500 to-orange-600" : null}`}
                      >
                        5
                      </button>
                    </div>
                    <button
                      disabled={currentPage === 5}
                      className={`p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] ${currentPage === 5 ? "cursor-not-allowed" : ""}`}
                      onClick={() => setcurrentPage(currentPage + 1)}
                    >
                      <IoIosArrowBack />
                    </button>
                  </div>
                </div>
                <p className="text-center text-neutral-500 mt-4 text-sm">
                  صفحة {currentPage} من 5
                </p>
              </section>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
