import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiBookOpenLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
// import Footer from "./Fooer";
import Navbar from "./Navbar";

const MemberShip = () => {
  return (
    <>
      
      {/* section 1  */}
      <div className="bg-[var(--bg-main)] font-sans">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-6 sm:px-8 lg:px-16 lg:py-8">

          <div className="bg-[rgb(38,88,223)] rounded-2xl h-auto sm:h-40 flex items-center">
            <div className="font-sans-serif flex flex-col gap-2 px-5 py-4 sm:py-3">
              <h1 className="font-medium text-2xl sm:text-3xl lg:text-5xl text-white">Membership Programme in community Health Dashord</h1>
              <p className="text-white text-sm">Manage application and courses for your programme</p>
            </div>

          </div>

          {/* section 2  */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-20">
            <div className="font-sans-serif flex gap-2 text-blue-500 items-center" >
              <MdOutlinePeopleOutline className="w-6 h-6 " />
              <button > <Link to="/ApprovalPage" className="hover:text-[rgb(38,88,223)]">Member Aprovals</Link></button>

            </div>
            <div className="font-sans-serif flex gap-2 text-blue-500 items-center">
              <RiBookOpenLine className="w-6 h-6" />
              <button > <Link to="/CoursesPage" className="hover:text-[rgb(38,88,223)]">Course Management</Link></button>
            </div>
          </div>

          {/*  1st card  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans-serif ">
            <div className="bg-[var(--bg-hover)] w-full h-auto rounded-2xl py-4">
              <div className="flex flex-row justify-between items-center gap-4 px-3">
                <div>
                  <h1>Total Request</h1>
                  <p className="font-bold text-3xl">9</p>
                </div>
                <div className="w-15 h-15 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0">
                  <MdOutlinePeopleOutline className="w-10 h-10 text-blue-500 " />
                </div>
              </div>
            </div>
            {/* 2nd card  */}
            <div className="bg-[var(--bg-hover)] w-full h-auto rounded-2xl py-4">
              <div className="flex flex-row justify-between items-center gap-4 px-3">
                <div>
                  <button>Pending Request</button>
                  <p className="font-bold text-3xl text-green-500">0</p>
                </div>
                <div className="w-15 h-15 bg-[rgb(192,144,118)] flex items-center justify-center rounded-lg flex-shrink-0">
                  <FaRegClock className="w-10 h-10 text-orange-500 " />
                </div>
              </div>
            </div>
            {/* 3rd card  */}
            <div className="bg-[var(--bg-hover)] w-full h-auto rounded-2xl py-4">
              <div className="flex flex-row justify-between items-center gap-4 px-3">
                <div>
                  <h1>Total Request</h1>
                  <p className="font-bold text-3xl text-green-500">9</p>
                </div>
                <div className="w-15 h-15 bg-[rgb(169,209,169)] flex items-center justify-center rounded-lg flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="w-10 h-10 text-green-500 " />
                </div>
              </div>
            </div>
            {/* 4th card  */}
            <div className="bg-[var(--bg-hover)] w-full h-auto rounded-2xl py-4">
              <div className="flex flex-row justify-between items-center gap-4 px-3">
                <div>
                  <h1>Rejected</h1>
                  <p className="font-bold text-3xl ">0</p>
                </div>
                <div className="w-15 h-15 bg-[rgb(177,93,93)] flex items-center justify-center rounded-lg flex-shrink-0">
                  <RxCross2 className="w-10 h-10 text-red-500 " />
                </div>
              </div>
            </div>
          </div>
          {/* member Approval section  */}

          <div className="bg-[var(--bg-hover)] font-sans-serif flex flex-col gap-2 px-3 py-4">
            <h1 className="font-bold text-2xl">Member Approvals</h1>
            <p className="text-sm">Review new registration for <strong>Membership Programme in Community Health</strong>. Approve applicants before they can sign in.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-row gap-4 bg-[var(--bg-main)] w-full sm:flex-1 h-8 border border-gray-500 rounded-lg items-center justify-center text-[12px] font-medium">
                <button>
                  <Link to="/PendingPage">  Pending</Link>
                </button> <p>0</p>
              </div>
              <div className="flex flex-row gap-4 bg-green-700 w-full sm:flex-1 h-8 border border-gray-500 rounded-lg items-center justify-center text-[12px] font-medium">
                <button className="text-blue-500">
                  <Link to="/ApprovalPage">Approved</Link>
                </button> <p>9</p>
              </div>
              <div className="flex flex-row gap-4 bg-[var(--bg-main)] w-full sm:flex-1 h-8 border border-gray-500 rounded-lg items-center justify-center text-[12px] font-medium">
                <button>
                  <Link to="/RejectedPage">Regected</Link>
                </button> <p>0</p>
              </div>
              <div className="flex flex-row gap-4 bg-[var(--bg-main)] w-full sm:flex-1 h-8 border border-gray-500 rounded-lg items-center justify-center text-[12px] font-medium">
                <button>
                  <Link to="/AllPage">All</Link>
                </button> <p>9</p>
              </div>


            </div>
          </div>

          {/* Lists  */}

          {/* <div className="bg-white" >
     </div> */}

        </div>

        {/* <Footer/> */}
      </div>
    </>
  );
};
export default MemberShip;
