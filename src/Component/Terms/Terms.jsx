import React from "react";
import { Link } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { ImNotification } from "react-icons/im";

export default function Terms() {
  return (
    <>
      <div className="bg-[#0a0a0a]">
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[linear-linear(rgba(38,38,38,0.5)_1px,transparent_1px),linear-linear(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8">
              <Link
                className="text-neutral-400 hover:text-white transition-colors"
                to="/"
              >
                الرئيسية
              </Link>
              <FaAngleRight className="w-4 h-4 text-neutral-600 rotate-180" />

              <span className="text-orange-500 font-medium">شروط الخدمة</span>
            </nav>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
              <LuFileText className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شروط الخدمة
            </h1>
            <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div className="shrink-0">
                <ImNotification className="font-semibold text-yellow-500 size-6"/>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-500 mb-1">
                  إشعار مهم
                </h3>
                <p className="text-yellow-300/80 text-sm">
                  يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول
                  أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  1
                </span>
                الموافقة على الشروط
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة
                  هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي
                  من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول
                  إليه.
                </p>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  2
                </span>
                رخصة الاستخدام
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض
                  الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
                </p>
                <p className="text-neutral-300 font-medium mb-3">
                  بموجب هذا الترخيص لا يجوز لك:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>تعديل أو نسخ المواد</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  3
                </span>
                إخلاء المسؤولية
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا
                  يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع
                  الضمانات الأخرى.
                </p>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  4
                </span>
                القيود
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                  أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على
                  الموقع.
                </p>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  5
                </span>
                محتوى المستخدم
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً
                  غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه
                  وتعديله وتوزيعه.
                </p>
                <p className="text-neutral-300 font-medium mb-3">
                  يجب ألا يكون محتواك:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>انتهاك حقوق الملكية الفكرية للآخرين</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>احتواء فيروسات أو أكواد ضارة</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>انتهاك أي قوانين أو لوائح معمول بها</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <MdClose className="text-[#FF6467]" />
                    <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  6
                </span>
                التعديلات
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام
                  هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط
                  الخدمة.
                </p>
              </div>
            </section>
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  7
                </span>
                معلومات الاتصال
              </h2>
              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
                </p>
                <a
                  href="mailto:hello@adasah.com"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                >
                  <MdMailOutline />
                  hello@adasah.com
                </a>
              </div>
            </section>
          </div>
          <div className="mt-16 pt-8 border-t border-[#262626]">
            <p className="text-neutral-500 text-sm text-center">
              باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
              <Link
                className="text-orange-500 hover:text-orange-400 font-medium"
                to="/privacy"
              >
                سياسة الخصوصية
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
