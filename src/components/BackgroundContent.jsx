import logo from "../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { AiOutlineSafety } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { CiMemoPad } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import Footer from "./Fooer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const BackgroundContent = () => {
    return(
       <div className="bg-[var(--bg-main)] text-[var(--text-main)] font-sans min-h-screen transition-colors duration-300">

        {/* Background hero */}
        <div className="bg-[rgb(31,83,219)] rounded-4xl p-6 sm:p-10 m-12">
          <div className="pb-6">
            <Link to="/" className="text-slate-50">← Back to Home</Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <img src={logo} alt="" className="h-16 sm:h-25" />
            <div>
              <h1 className="font-bold text-white text-3xl sm:text-5xl">Background</h1>
              <p className="text-white text-base sm:text-lg pt-3">
                Understanding the WACP Online Academy
              </p>
            </div>
          </div>

          <div className="text-slate-100 pt-8 text-lg">
            <p className="text-[rgb(219,234,254)] text-base sm:text-[20px]">
              The online academy platform for the Faculty of Community Health, West African <br />
              College of Physicians (WACP) is set up to support structured postgraduate <br />
              medical training in Community Health.
            </p>
          </div>
        </div>

        {/* Programme Levels */}
        <div className=" px-4 sm:px-14 pb-4">
          <div className="bg-[var(--bg-hover)] rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer p-6">
            <div className="flex flex-col sm:flex-row gap-5">
              <GiGraduateCap className="w-15 h-16 bg-[rgb(31,83,219)] text-white rounded-2xl p-3 shrink-0" />
              <div>
                <h1 className="font-bold text-2xl sm:text-3xl">Programme Levels</h1>
                <p className="pt-4 text-base sm:text-xl text-[var(--text-muted)]">
                  The academy will cater for candidates at the <span className="text-blue-600 font-medium">Primary</span>, <span className="text-blue-600 font-medium">Membership</span>, and <span className="text-blue-600 font-medium">Fellowship</span> levels.
                  At the Fellowship stage, candidates may enrol through either the Fellowship or Sub-Specialty
                  Fellowship route, in accordance with WACP guidelines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 ">
              <div className="min-h-25 bg-[var(--bg-main)]  flex flex-col rounded-lg items-center justify-center p-4">
                <div className="w-10 h-10 bg-[rgb(31,83,219)] rounded-lg flex items-center justify-center">
                  <h1 className="font-bold text-white text-lg">1</h1>
                </div>
                <h1 className="text-[14px] font-medium pt-2">Primary</h1>
              </div>
              <div className="min-h-25 bg-[var(--bg-main)] flex flex-col rounded-lg items-center justify-center p-4">
                <div className="w-10 h-10 bg-[rgb(31,83,219)] rounded-lg flex items-center justify-center">
                  <h1 className="font-bold text-white text-lg">2</h1>
                </div>
                <h1 className="text-[14px] font-medium pt-2">Membership</h1>
              </div>
              <div className="min-h-25 bg-[var(--bg-main)]  flex flex-col rounded-lg items-center justify-center p-4">
                <div className="w-10 h-10 bg-[rgb(31,83,219)] rounded-lg flex items-center justify-center">
                  <h1 className="font-bold text-white text-lg">3</h1>
                </div>
                <h1 className="text-[14px] font-medium pt-2">Fellowship</h1>
              </div>
              <div className="min-h-25 bg-[var(--bg-main)]  flex flex-col rounded-lg items-center justify-center p-4">
                <div className="w-10 h-10 bg-[rgb(31,83,219)] rounded-lg flex items-center justify-center">
                  <h1 className="font-bold text-white text-lg">4</h1>
                </div>
                <h1 className="text-[14px] font-medium pt-2">Sub-Speciality</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Sequential Progression */}
        <div className="px-4 sm:px-14 pb-4 ">
          <div className="bg-[var(--bg-hover)] rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer p-6">
            <div className="flex flex-col sm:flex-row gap-5 ">
              <FiTarget className="w-16 h-12 bg-[rgb(28,177,83)] text-white rounded-lg p-3 shrink-0" />
              <div>
                <h1 className="font-bold text-2xl sm:text-3xl">Sequential Progression</h1>
                <p className="pt-4 text-base sm:text-xl text-[var(--text-muted)]">
                  Progression through the academy will be sequential: candidates must commence at
                  the Primary level and advance through subsequent levels only after meeting the
                  prescribed eligibility criteria for each stage.
                </p>
                <div className="mt-6 bg-[var(--bg-main)] border-l-4 border-green-500 rounded-lg p-4">
                  <p className="font-bold text-[var(--text-main)] ">
                    Enrolment at any level will be strictly limited to candidates who have fulfilled
                    the requisite WACP requirements.
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 pt-8 w-full max-w-5xl mx-auto overflow-x-auto sm:overflow-visible pb-2 no-scrollbar">
              {/* Step 1 */}
              <div className="flex flex-col items-center shrink-0 min-w-[70px] sm:min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[rgb(31,83,219)] rounded-full flex items-center justify-center shrink-0">
                  <h1 className="font-bold text-white text-xs sm:text-sm">1</h1>
                </div>
                <p className="pt-1 text-[11px] sm:text-sm font-medium text-[var(--text-main)]  whitespace-nowrap">Primary</p>
              </div>


              <hr className="hidden sm:block flex-1 min-w-10 h-0.5 sm:h-1 bg-[rgba(255,99,71,0.5)] border-none self-center" />

              {/* Step 2 */}
              <div className="flex flex-col items-center shrink-0 min-w-[70px] sm:min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[rgb(28,177,83)] rounded-full flex items-center justify-center shrink-0">
                  <h1 className="font-bold text-white text-xs sm:text-sm">2</h1>
                </div>
                <p className="pt-1 text-[11px] sm:text-sm font-medium text-[var(--text-main)] whitespace-nowrap">Membership</p>
              </div>

              <hr className="hidden sm:block flex-1 min-w-10 h-0.5 sm:h-1 bg-[rgba(255,99,71,0.5)] border-none self-center" />

              {/* Step 3 */}
              <div className="flex flex-col items-center shrink-0 min-w-[70px] sm:min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[rgb(213,119,16)] rounded-full flex items-center justify-center shrink-0">
                  <h1 className="font-bold text-white text-xs sm:text-sm">3</h1>
                </div>
                <p className="pt-1 text-[11px] sm:text-sm font-medium text-[var(--text-main)] whitespace-nowrap">Fellowship</p>
              </div>

              <hr className="hidden sm:block flex-1 min-w-10 h-0.5 sm:h-1 bg-[rgba(255,99,71,0.5)] border-none self-center" />

              {/* Step 4 */}
              <div className="flex flex-col items-center shrink-0 min-w-[70px] sm:min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[rgb(125,78,237)] rounded-full flex items-center justify-center shrink-0">
                  <h1 className="font-bold text-white text-xs sm:text-sm">4</h1>
                </div>
                <p className="pt-1 text-[11px] sm:text-sm font-medium text-[var(--text-main)] whitespace-nowrap">Sub-Speciality</p>
              </div>
            </div>

          </div>
        </div>

        {/* Important Notice */}
        <div className="px-4 sm:px-14 pb-4">
          <div className="rounded-3xl bg-[var(--bg-hover)] border-2 border-[rgb(251,230,138)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer p-6">
            <div className="flex flex-col sm:flex-row gap-5">
              <MdErrorOutline className="w-16 h-12 bg-[rgb(213,119,16)] text-white rounded-lg p-3 shrink-0" />
              <div>
                <h1 className="font-bold text-2xl sm:text-3xl">Important Notice</h1>
                <p className="pt-4 text-base sm:text-xl text-[var(--text-muted)]">
                  It is important to note that participation in the online academy will fulfil only
                  part of the overall requirements for the award of the respective Primary,
                  Membership, or Fellowship certifications by the WACP, and does not replace
                  mandatory institutional, clinical, or examination components stipulated by the
                  College.
                </p>
                <div className="flex gap-2 items-center pt-4">
                  <AiOutlineSafety className="text-orange-500 size-6 shrink-0" />
                  <p className="text-sm font-bold text-orange-500">
                    This platform provides academic support only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Access Code / Assessment Structure */}
        <div className="px-4 sm:px-14 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Card */}
          <div className="bg-[var(--bg-hover)] rounded-3xl shadow-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="w-14 h-14 bg-fuchsia-600 rounded-2xl flex items-center justify-center">
              <LuUsers className="text-white text-4xl" />
            </div>

            <h1 className="text-2xl font-bold pt-4">Access Code System</h1>

            <p className="text-base sm:text-lg pt-4">
              Following payment and formal approval by the Faculty of Community
              Health for enrolment at the appropriate level, candidates will be
              issued a unique access code.
            </p>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-purple-600 text-xl shrink-0" />
                <span className=" text-sm">Register on the platform</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-purple-600 text-xl shrink-0" />
                <span className=" text-sm">Upload required documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-purple-600 text-xl shrink-0" />
                <span className=" text-sm">Access courses and assessments</span>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-[var(--bg-hover)] rounded-3xl shadow-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="w-14 h-14 bg-fuchsia-600 rounded-2xl flex items-center justify-center">
              <LuAward className="text-white text-3xl" />
            </div>

            <h1 className="text-2xl font-bold pt-4">Assessment Structure</h1>

            <p className="text-base sm:text-lg pt-4">
              Each level will comprise a defined set of courses. Upon completion of each
              course, candidates will undertake a graded assessment.
            </p>

            <div className="bg-[var(--bg-main)] mt-5 rounded-lg p-2">
              <div className="flex flex-row items-center gap-2">
                <CiMemoPad className="text-blue-800 shrink-0" />
                <h1 className="text-sm font-bold">Graded Assessments</h1>
              </div>
              <p className="text-sm text-[rgb(104,109,123)] pt-1">Recorded on interim transcript</p>
            </div>

            <div className="bg-[var(--bg-main)] mt-5 rounded-lg p-2">
              <div className="flex flex-row items-center gap-2">
                <FaArrowTrendUp className="text-blue-800 shrink-0" />
                <h1 className="text-sm font-bold">Graded Assessments</h1>
              </div>
              <p className="text-sm text-[rgb(104,109,123)] pt-1">Ungraded questions after modules</p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="px-4 sm:px-14 pt-8 pb-10">
          <div className="bg-[rgb(31,83,219)] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-15 h-15 bg-[rgb(81,129,237)] flex items-center justify-center rounded-2xl shrink-0">
                <FaRegStar className="text-white" />
              </div>
              <div>
                <h1 className="text-white text-xl sm:text-2xl font-bold">Ready to Begin Your Journey?</h1>
                <p className="text-white/80 text-base sm:text-lg pt-1">Check your eligibility and start your application today</p>
              </div>
            </div>
            <button className="bg-white text-[rgb(31,83,219)] font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer whitespace-nowrap">
              <Link to="/SelectionPage" className="block w-full px-6 sm:px-8 py-3 sm:py-4 ">Check Eligibility And Apply →</Link>

            </button>
          </div>
        </div>

    
      </div>
    );
};
export default BackgroundContent;