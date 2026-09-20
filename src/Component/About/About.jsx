import { MdLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { SiVerizon } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import data from "../../data/posts.json";
import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function About() {
  const [posts, setPosts] = useState(data.posts);
  return (
    <>
      <section className="relative py-24 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="head w-fit mb-8 flex gap-2 items-center mx-auto py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900]">
            <span className="relative inline-flex size-1.5 animate-pulse rounded-full bg-[#FF6900]"></span>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
            </span>

            <p className="text-[#FF6900] text-[14px] leading-5 font-medium">
              من نحن
            </p>
          </div>
          <h2 className="text-6xl leading-15 font-bold mb-4">
            مهمتنا هي{" "}
            <span className="bg-linear-to-r from-[#DD6500] to-[#F2AD00] bg-clip-text text-transparent">
              الإعلام والإلهام
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className=" grid w-full grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center  p-6 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="icon mb-1">
                <FaUsers className="size-8 text-[#FF6900]" />
              </div>
              <p className="text-[#FA991D] text-3xl leading-9 font-bold">
                +2مليون
              </p>
              <p className="text-[#4B4B4B]">قارئ شهرياً</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="icon mb-1">
                <MdLibraryBooks className="size-8 text-[#FF6900]" />
              </div>
              <p className="text-[#FA991D] text-3xl leading-9 font-bold">
                +500
              </p>
              <p className="text-[#4B4B4B]">مقالة منشورة</p>
            </div>{" "}
            <div className="flex flex-col items-center p-6 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="icon mb-1">
                <FaPenNib className="size-8 text-[#FF6900]" />
              </div>
              <p className="text-[#FA991D] text-3xl leading-9 font-bold">+50</p>
              <p className="text-[#4B4B4B]">كاتب خبير</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#141414] rounded-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="icon mb-1">
                <MdMenuBook className="size-8 text-[#FF6900]" />
              </div>
              <p className="text-[#FA991D] text-3xl leading-9 font-bold">+15</p>
              <p className="text-[#4B4B4B]">تصنيف</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"></span>
            قيمنا
            <span className="w-1.5 h-8 bg-linear-to-t from-orange-500 to-yellow-500 rounded-full"></span>
          </h2>

          <p className="text-lg text-neutral-400 text-center mb-16">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <FaBullseye className="text-4xl text-orange-500 mb-4" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  الجودة أولاً
                </h3>
                <p className="text-neutral-400 text-sm">محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <MdElectricBolt className="text-4xl text-orange-500 mb-4" />
                </div>{" "}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  تركيز عملي
                </h3>
                <p className="text-neutral-400 text-sm">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <FaHandshakeAngle className="text-4xl text-orange-500 mb-4" />
                </div>{" "}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  المجتمع
                </h3>
                <p className="text-neutral-400 text-sm">تعلم مع آلاف المصورين</p>
              </div>
            </div>
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <FaArrowsRotate className="text-4xl text-orange-500 mb-4" />
                </div>{" "}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  دائماً محدث
                </h3>
                <p className="text-neutral-400 text-sm">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="container">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="head mx-auto w-fit mb-8 flex gap-2 items-center  py-2 px-4 bg-[#25160B] rounded-3xl border border-[#FF6900] ">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#FF6900]"></span>
              </span>
              <p className="text-[#FF6900]">فريقنا</p>
            </div>
            <h3 className="text-4xl leading-10 font-bold mb-4">
              تعرف على كتابنا
            </h3>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {posts.map((post) => (
              <div key={post.id} className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="image size-24 rounded-full relative mb-4">
                    <img
                      src={post.author.avatar}
                      className="size-full object-cover ring-4 ring-[#262626] rounded-full transition-all duration-300 group-hover:ring-[#5D2F0F]"
                      alt=""
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                      <SiVerizon />
                    </div>
                  </div>
                  <div className="txt">
                    <h3 className="font-bold text-white text-lg">
                      {post.author.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-medium mb-4">
                      {post.author.role}{" "}
                    </p>
                  </div>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MdMailOutline />

                تواصل معنا
              </a>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                to="/blog"
              >
                تصفح المقالات
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
