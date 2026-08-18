import logo from "../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuAward } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
function HomeContent() {
  return (
    <>
     <div className="bg-[var(--bg-main)] text-[var(--text-main)] font-sans min-h-screen transition-colors duration-300">
      
      {/* Section 1 - Hero (Kept identical royal blue background color) */}
      <div className="bg-[rgb(31,83,219)] rounded-xl p-6 sm:p-10 m-8">
        <div className="flex flex-row items-center gap-4">
          <img src={logo} alt="" className="h-10 sm:h-12" />
          <p className="font-bold text-white text-xs sm:text-sm">
            WEST AFRICAN COLLEGE OF PHYSICIANS
          </p>
        </div>

        <div className="text-white pt-8 text-2xl sm:text-3xl md:text-4xl font-bold">
          <h1>Faculty of Community Health <br className="hidden sm:block" />Online Academy</h1>
        </div>

        <div className="text-slate-50 pt-5 text-base sm:text-xl max-w-2xl">
          <p>Comprehensive online learning platform for community health professionals. Advance your career through structured, sequential programmes designed by experts.</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6">
          <button className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-5 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <Link to="/CreatePage" className="block w-full">Check Eligibility & Apply</Link>
            <FaArrowRightLong />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-5 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <Link to="/BackgroundPage" className="block w-full">Learn More </Link>
            <FaArrowRightLong />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-5 py-4 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <Link to="/LoginPage" className="block w-full">Student Login</Link>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Section 2 - Programme Levels heading */}
      <div className="text-center pt-10 px-4">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Programme Levels</h1>
        <p className="text-[var(--text-muted)] text-base sm:text-lg pt-3">Structured progression through four comprehensive levels of training</p>
      </div>

      {/* Programme cards wrapper */}
      <div className="pt-6 px-4 sm:px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        {/* 1st card */}
        <div className="group relative flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-90 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
          <div className="flex items-center justify-between pt-3">
            <h1 className="font-bold bg-blue-700 text-white w-15 h-15 rounded-xl flex items-center justify-center text-2xl">1</h1>
            <LuAward className="text-blue-400 text-3xl transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <h2 className="text-[var(--text-main)] font-bold text-2xl pt-4">Primary</h2>
          <p className="pt-4 text-[var(--text-muted)]">Foundation programme covering essential community health principles and practices.</p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4 flex justify-between items-center">LEVEL 1 OF 4
            <FaArrowRightLong className="transition-all duration-300 ease-out group-hover:translate-x-2" />
          </p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4">Sign up to access this Programme</p>
        </div>

        {/* 2nd Card */}
        <div className="group relative flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-90 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
          <div className="flex items-center justify-between pt-3">
            <h1 className="font-bold bg-blue-700 text-white w-15 h-15 rounded-xl flex items-center justify-center text-2xl">2</h1>
            <LuAward className="text-blue-400 text-3xl transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <h2 className="text-[var(--text-main)] font-bold text-2xl pt-4">Membership</h2>
          <p className="pt-4 text-[var(--text-muted)]">Advance programme building on primary foundations with residency training focus.</p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4 flex justify-between items-center">LEVEL 2 OF 4
            <FaArrowRightLong className="transition-all duration-300 ease-out group-hover:translate-x-2" />
          </p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4">Sign up to access this Programme</p>
        </div>

        {/* 3rd Card */}
        <div className="group relative flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-90 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
          <div className="flex items-center justify-between pt-3">
            <h1 className="font-bold bg-blue-700 text-white w-15 h-15 rounded-xl flex items-center justify-center text-2xl">3</h1>
            <LuAward className="text-blue-400 text-3xl transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <h2 className="text-[var(--text-main)] font-bold text-2xl pt-4">Fellowship</h2>
          <p className="pt-4 text-[var(--text-muted)]">Specialized training for experienced practitioners in senior residency.</p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4 flex justify-between items-center">LEVEL 3 OF 4
            <FaArrowRightLong className="transition-all duration-300 ease-out group-hover:translate-x-2" />
          </p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4">Sign up to access this Programme</p>
        </div>

        {/* 4th Card */}
        <div className="group relative flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-90 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
          <div className="flex items-center justify-between pt-3">
            <h1 className="font-bold bg-blue-700 text-white w-15 h-15 rounded-xl flex items-center justify-center text-2xl">4</h1>
            <LuAward className="text-blue-400 text-3xl transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <h2 className="text-[var(--text-main)] font-bold text-2xl pt-4">Sub-speciality Fellowship</h2>
          <p className="pt-4 text-[var(--text-muted)]">Expert-level specialization in specific domains of community health.</p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4 flex justify-between items-center">LEVEL 4 OF 4
            <FaArrowRightLong className="transition-all duration-300 ease-out group-hover:translate-x-2" />
          </p>
          <hr className="pt-3 border-[var(--bg-hover)]" />
          <p className="text-blue-500 text-sm pt-4">Sign up to access this Programme</p>
        </div>

      </div>

        {/* Sequential progression notice */}
        {/* Swapped light grey background with a variable-based asset slate */}
        <div className="bg-[var(--bg-hover)] border-l-4 border-blue-500 mx-4 sm:mx-8 p-4 rounded-lg transition-colors duration-300">
          <div className="flex gap-2 font-bold items-center">
            <AiOutlineSafety className="text-blue-500 size-6 shrink-0" />
            <h1 className="text-[var(--text-main)]">Sequential Progression Required</h1>
          </div>
          <p className="pt-2 pl-8 text-[var(--text-muted)]">Programme levels must be completed sequentially. You cannot skip Levels. Each level builds upon the previous one.</p>
        </div>

        {/* Platform Features heading */}
        <div className="text-center pt-14 px-4">
          <h1 className="font-bold text-3xl sm:text-4xl text-[var(--text-main)]">Platform Features</h1>
          <p className="pt-3 text-[var(--text-muted)] text-base sm:text-lg">Everything you need for comprehensive learning and professional development</p>
        </div>

        {/* Platform cards */}
        <div className="pt-6 px-4 sm:px-8 pb-4 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
          
          {/* 1st platform card */}
          <div className="flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-70 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="flex justify-center pt-4">
              {/* Used standard tailwind utility tags for color isolation matching */}
              <div className="flex items-center justify-center w-15 h-15 bg-blue-100 dark:bg-blue-950/40 text-blue-500 text-2xl rounded-lg">
                <GiOpenBook className="text-3xl" />
              </div>
            </div>
            <h1 className="font-bold text-2xl text-center pt-6 text-[var(--text-main)]">Structured Learning</h1>
            <p className="text-center text-[var(--text-muted)] pt-6">Programme → Domains → Courses → <br />Modules hierarchy ensures comprehensive coverage of all topics.</p>
          </div>

          {/* 2nd platform card */}
          <div className="flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-70 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="flex justify-center pt-4">
              <div className="flex items-center justify-center w-15 h-15 bg-green-100 dark:bg-green-950/40 text-green-500 text-2xl rounded-lg">
                <SiTicktick className="text-3xl" />
              </div>
            </div>
            <h1 className="font-bold text-2xl text-center pt-6 text-[var(--text-main)]">Comprehensive Assessments</h1>
            <p className="text-center text-[var(--text-muted)] pt-6">Knowledge-check quizzes, graded <br /> assignments, and timed examinations with integrity measures.</p>
          </div>

          {/* 3rd platform card */}
          <div className="flex flex-col bg-[var(--bg-navbar)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-70 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="flex justify-center pt-4">
              <div className="flex items-center justify-center w-15 h-15 bg-orange-100 dark:bg-orange-950/40 text-orange-500 text-2xl rounded-lg">
                <LuAward className="text-3xl" />
              </div>
            </div>
            <h1 className="font-bold text-2xl text-center pt-6 text-[var(--text-main)]">Certification</h1>
            <p className="text-center text-[var(--text-muted)] pt-6">Each transcript and certificates upon <br />programme completion with detailed <br />academic records.</p>
          </div>
        </div>

        {/* Application Process Wrapper */}
        <div className="bg-[var(--bg-navbar)] border border-[var(--bg-hover)] rounded-lg mx-4 sm:mx-8 pt-10 pb-6 px-12 transition-colors duration-300">
          <div className="text-center">
            <h1 className="font-bold text-3xl sm:text-4xl py-4 text-[var(--text-main)]">Application Process</h1>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">Simple steps to begin your learning journey</p>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="group flex flex-col bg-[var(--bg-main)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-65 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <h1 className="font-bold bg-blue-700 text-white w-10 h-12 rounded-lg flex items-center justify-center">1</h1>
              <AiOutlineSafety className="text-blue-500 size-6 pt-2" />
              <h1 className="font-bold pt-2 text-lg text-[var(--text-main)]">Check Eligibility</h1>
              <p className="text-[var(--text-muted)] pt-2">Review and confirm eligibility requirements for your desired programme level.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col bg-[var(--bg-main)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-65 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <h1 className="font-bold bg-blue-700 text-white w-10 h-12 rounded-lg flex items-center justify-center">2</h1>
              <GiOpenBook className="text-blue-500 size-6 pt-2" />
              <h1 className="font-bold pt-2 text-lg text-[var(--text-main)]">Submit Application</h1>
              <p className="text-[var(--text-muted)] pt-2">Complete the online application form with required information and documents.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col bg-[var(--bg-main)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-65 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <h1 className="font-bold bg-blue-700 text-white w-10 h-12 rounded-lg flex items-center justify-center">3</h1>
              <MdPeopleAlt className="text-blue-500 size-6 pt-2" />
              <h1 className="font-bold pt-2 text-lg text-[var(--text-main)]">Faculty Review</h1>
              <p className="text-[var(--text-muted)] pt-2">Our faculty reviews your application and qualifications thoroughly.</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col bg-[var(--bg-main)] shadow-sm border border-[var(--bg-hover)] rounded-3xl p-4 min-h-65 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <h1 className="font-bold bg-blue-700 text-white w-10 h-12 rounded-lg flex items-center justify-center">4</h1>
              <FaArrowTrendUp className="text-blue-500 size-6 pt-2" />
              <h1 className="font-bold pt-2 text-lg text-[var(--text-main)]">Start Learning</h1>
              <p className="text-[var(--text-muted)] pt-2">Receive access code, register, and begin your learning journey.</p>
            </div>
          </div>
        </div>

        {/* Lower CTA Panel (Kept identical royal blue layout background) */}
        <div className="bg-[rgb(31,83,219)] rounded-3xl text-center pt-10 pb-10 px-4 sm:px-8 m-8" >
          <div className="flex items-center justify-center text-blue-500">
            <FaArrowTrendUp className="w-10 h-10 text-white animate-[bounce_2s_infinite]" />
          </div>
          <h1 className="font-bold text-2xl sm:text-4xl pt-6 text-white">Ready to Begin Your Journey?</h1>
          <p className="text-white text-center pt-6 text-base sm:text-xl max-w-3xl mx-auto">Join the WACP Faculty of Community Health Online Academy and advance your <br /> career in community health. Start your application today and take the first step <br />towards professional excellence.</p>
          <button className="bg-white text-blue-600 mt-6 font-bold rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <Link to="/SelectionPage" className="block w-full px-8 py-4">Start Your Application</Link>
          </button>
        </div>

        
      </div>
    </>
  );
}
export default HomeContent;