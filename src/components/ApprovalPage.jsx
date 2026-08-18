import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiBookOpenLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import MemberShip from "./MembershipProgram";
import Footer from "./Fooer";
const Approval = () => {
  return (
    <>
      <MemberShip />
      <div className="flex flex-col font-sans gap-4 px-4 py-4 sm:px-8 lg:px-16">
        {/* 1  */}
        <div>
          <div className="bg-[var(--bg-navbar)]  py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500 font-bold flex items-center justify-center">CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800" />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22, 2026 9:44 AM</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600 text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 3  */}
        <div >
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >Z</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Zain</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> zain@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 4  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 5  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 6  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 7  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 8  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* 9  */}
        <div>
          <div className="bg-[var(--bg-navbar)] py-4 sm:py-7">
            <div className="py-3 flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-2xl border-l-4 border-1 border-green-500 px-3 sm:px-0">
              <div className="w-12 h-12 bg-[rgb(229,241,255)] flex items-center justify-center rounded-lg flex-shrink-0 sm:pl-2 ml-2">
                <h1 className="w-10 h-10 text-blue-500  font-bold flex items-center justify-center " >CI</h1>
              </div>
              <div className="flex flex-col gap-2 sm:pl-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:pt-2">
                  <h1 className="font-bold text-lg">Chindeu lwu</h1>
                  <div className="w-30 h-6 bg-[rgb(229,241,255)] rounded-lg flex flex-row gap-2 items-center">
                    <MdPersonOutline className="pl-1 text-gray-800 " />
                    <p className="text-gray-800 text-center text-sm font-medium">New Member</p>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-3 items-center">
                    <MdOutlineMailOutline className="text-blue-500" />
                    <p className="text-sm"> user123@wacp.edu</p>
                  </div>
                  <p className="text-sm">June 22,2026 9:44 AM </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:pt-5 md:flex flex-wrap">
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Approved</button>
                  <button className="w-full sm:w-30 h-8 sm:h-6 bg-green-200 rounded-lg text-[rgb(3,90,35)] font-medium">Paid</button>
                  <button className="w-full sm:w-80 h-8 sm:h-6 bg-blue-100 rounded-lg text-blue-600  text-sm">Membership Program in Community Health</button>
                </div>
              </div>
            </div>



          </div>
        </div>

      </div>

      <Footer />

    </>


  );
};
export default Approval;
