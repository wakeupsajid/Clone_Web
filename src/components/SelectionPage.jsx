import logo from "../assets/logo.png";
import { LuAward } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Fooer";
import Navbar from "./navbar";

const Selection = () => {
  return (
    <>
      <div className="bg-[var(--bg-main)] font-sans ">
        
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-7 sm:px-12">

          <div>
            <Link to="/" className="text-blue-600 hover:text-[rgb(38,88,223)]">
                ← Back to Home
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img src={logo} alt="" className="h-13 w-auto flex-shrink-0 object-contain" />
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl sm:text-4xl">Select Your Programme Level</h1>
              <p className="text-base sm:text-xl text-[rgb(104,109,123)]">Choose the programme level you wish to apply for. Each level has specific eligibility requirements.</p>
            </div>
          </div>

          {/* section1  */}

          <div className="bg-[var(--bg-hover)] rounded-2xl border-l-4 border-blue-500">
            <div className="flex flex-col gap-2 px-4 py-3 sm:px-6">
              <div className="flex gap-2 items-center">
                <LuAward className="text-blue-600 text-2xl " />
                <h1 className="text-base sm:text-lg font-medium">Important: Sequential Progression</h1>
              </div>
              <p className="text-sm text-[var(--text-muted)] pl-8 sm:pl-9">Programme levels must be completed sequentially. You cannot skip levels. Each level builds upon the previous one. Please ensure you have completed the prerequisite level before applying for the next level.</p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col lg:flex-row gap-8">

            {/*  first Card */}
            <div className="relative w-full lg:w-[600px] h-auto lg:h-[300px] bg-[var(--bg-hover)] rounded-3xl p-6  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer flex flex-col gap-4">

              {/* Icons */}
              <div className="w-fit w-max bg-[rgb(29,77,212)] rounded-2xl p-6 flex items-center justify-center shrink-0">
                <h1 className="font-bold text-2xl text-white leading-none">1</h1>
              </div>


              {/* Heading */}
              <h1 className="text-xl sm:text-2xl font-bold">
                Primary
              </h1>
              {/* Paragraph */}
              <p className="text[var(--text-muted)] text-base sm:text-lg">
                Fondation program covering essentianl community health principles and practices. Perfect for those in community heath.
              </p>
              <div className="space-y-2">
                <hr className="text-slate-200" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-blue-600 font-medium">
                <p>Level 1 of 4 </p>
                <hr className="text-slate-200 md:hidden" />
                <p>Check Eligibility  → </p>
              </div>

            </div>
            {/* second card  */}
            <div className="relative w-full lg:w-[600px] h-auto lg:h-[300px] bg-[var(--bg-hover)] rounded-3xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-4">
              {/* Icons */}
              <div className="w-fit w-max bg-[rgb(29,77,212)] rounded-2xl p-6 flex items-center justify-center shrink-0">
                <h1 className="font-bold text-2xl text-white leading-none">2</h1>
              </div>
              {/* Heading */}
              <h1 className="text-xl sm:text-2xl font-bold">
                Membership
              </h1>
              {/* Paragraph */}
              <p className="text[var(--text-muted)] text-base sm:text-lg">
                Advance Program Buiding on primary fondations with residency training focus. Require Completion of primary level.
              </p>
              <div className="space-y-2">
                <hr className="text-slate-200" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-blue-600 font-medium">
                <p>Level 2 of 4 </p>
                <hr className="text-slate-200 md:hidden" />
                <p>Check Eligibility  → </p>
              </div>

            </div>

          </div>
          <div className="rounded-3xl flex flex-col lg:flex-row gap-8">

            {/*  3rd Card */}
            <div className="relative w-full lg:w-[600px] h-auto lg:h-[300px] bg-[var(--bg-hover)] rounded-3xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-4">

              {/* Icons */}
              <div className="w-fit w-max bg-[rgb(29,77,212)] rounded-2xl p-6 flex items-center justify-center shrink-0">
                <h1 className="font-bold text-2xl text-white leading-none">3</h1>
              </div>
              {/* Heading */}
              <h1 className="text-xl sm:text-2xl font-bold">
                Fellowship
              </h1>
              {/* Paragraph */}
              <p className="text[var(--text-muted)] text-base sm:text-lg">
                Specialized trainin for experienced practioners in senior residency. Requires completion of Membership level.
              </p>
              <div className="space-y-2">
                <hr className="text-slate-200" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-blue-600 font-medium">
                <p>Level 3 of 4 </p>
                <hr className="text-slate-200 md:hidden" />
                <p>Check Eligibility  → </p>
              </div>

            </div>
            {/* 4th card  */}
            <div className="relative w-full lg:w-[600px] h-auto lg:h-[300px] bg-[var(--bg-hover)] rounded-3xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-4">
              {/* Icons */}
              <div className="w-fit w-max bg-[rgb(29,77,212)] rounded-2xl p-6 flex items-center justify-center shrink-0">
                <h1 className="font-bold text-2xl text-white leading-none">4</h1>
              </div>
              {/* Heading */}
              <h1 className="text-xl sm:text-2xl font-bold">
                Sub- Speciality Fellowship
              </h1>
              {/* Paragraph */}
              <p className="text[var(--text-muted)] text-base sm:text-lg">
                Expert-level specialization in specific domains of community health. Require completion of Fellowship Level.
              </p>
              <div className="space-y-2">
                <hr className="text-slate-200" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-blue-600 font-medium">
                <p>Level 4 of 4 </p>
                <hr className="text-slate-200 md:hidden" />
                <p>Check Eligibility  → </p>
              </div>

            </div>
          </div>

          
          {/* section2  */}
          <div className=" bg-[var(--bg-hover)] rounded-3xl py-4">
            <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
              <div className="flex gap-2 items-center">
                <FaGraduationCap className="text-blue-600 text-3xl " />
                <h1 className="text-base sm:text-[18px] font-medium">Need Help Choosing?</h1>
              </div>
              <p className="text-md text-[var(--text-muted)] pl-9 sm:pl-10">If you're unsure which programme level is right for you, review the eligibility requirements for each level. Start with Primary if you're new to community health training, or select the level that matches your current qualifications.</p>
              <p className="font-medium text-[16px] text-[rgb(29,78,216)] pl-9 sm:pl-10 py-4">
                <Link to="/BackgroundPage">Learn more about programme levels →</Link>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Selection;
