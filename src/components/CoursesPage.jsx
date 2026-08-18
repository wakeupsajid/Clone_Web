import { FaArrowTrendUp } from "react-icons/fa6";
import { PiBookOpenBold } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaRegCirclePlay } from "react-icons/fa6";
import data from "../data/Data.json";
import data1 from "../data/Data1.json";
import data2 from "../data/Data2.json";
import data3 from "../data/Data3.json";
import data4 from "../data/Data4.json";
import Navbar from "./Navbar";
import Footer from "./Fooer";

const Course = () => {
  return (
    <>
      <div className="bg-[var(--bg-main)] font-sans">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-6 sm:px-8 lg:px-16 lg:py-8">

          <div className="bg-[rgb(38,88,223)] rounded-2xl h-auto sm:h-50 flex items-center">
            <div className="font-sans-serif flex flex-col gap-2 pl-4 sm:pl-5 py-4 sm:py-6">
              <h1 className="font-medium text-2xl sm:text-3xl lg:text-5xl text-white">Welcome Back Sajid</h1>
              <p className="text-white text-sm">Continue your membership training journey and track your progress</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
                <h4 className="font-medium text-md text-white">Membership program in ommunity Health</h4>
                <button className="rounded-lg bg-blue-300 text-sm w-25 h-5 tex-center">MEMBERSHIP</button>
              </div>
            </div>

          </div>

          {/* card section  */}
          <div className="flex flex-col lg:flex-row gap-2">

            {/* 1  */}
            <div className="bg-[var(--bg-navbar)] w-full lg:w-[380px] h-auto lg:h-[150px]  flex flex-col rounded-2xl px-3 py-2">
              <p className="text-sm py-2 ">Overall Progress</p>
              <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold text-2xl">0%</h1>
                <div className="w-10 h-12 bg-[rgb(113,163,193)] rounded-lg flex items-center justify-center">
                  <FaArrowTrendUp className="text-blue-800" />
                </div>
              </div>
              <hr className="text-slate-100 border-t-8 rounded-lg mt-2 " />
              <p className="text-sm  pt-2" >0 of 40 courses completed</p>


            </div>
            {/* 2  */}
            <div className="bg-[var(--bg-navbar)] w-full lg:w-[380px] h-auto lg:h-[150px]  flex flex-col rounded-2xl px-3 py-2">
              <p className="text-sm py-2 ">Enrolled Programme</p>
              <div className="flex flex-row justify-between items-center gap-4">
                <h1 className="font-bold ">Membership Programme In <br /> Community Health</h1>
                <div className="w-10 h-12 bg-green-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PiBookOpenBold className="text-green-800" />
                </div>
              </div>
              <p className="mt-4 text-sm ">Domains</p>


            </div>

            {/* 3  */}
            <div className="bg-[var(--bg-navbar)] w-full lg:w-[380px] h-auto lg:h-[150px]  flex flex-col rounded-2xl px-3 py-2">
              <p className="text-sm py-2">Quick Action</p>
              <div className="flex flex-row justify-between items-center gap-4">

                <p className="text-sm text-blue-500">View Transcripts <br /> View Certificates</p>

                <div className="w-10 h-12 bg-orange-300 flex items-center justify-center rounded-lg flex-shrink-0 ">
                  <FaRegCircle />

                </div>
              </div>


            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">Membrship Program in Community  Health </h1>
          <p className="text-sm font-medium text-[rgb(109,111,122)]">Membership Program --- complete all courses to earn your certificate</p>
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* courses section  */}


            {/* ist course  */}
            <div className="bg-[var(--bg-navbar)] rounded-lg">
              <div>
                <div className="flex flex-row gap-3 items-center px-4 py-4">
                  <h1 className="w-12 h-10 bg-[rgb(31,83,219)] flex text-center justify-center py-2 text-lg font-bold text-white  rounded-lg flex-shrink-0" >1</h1>
                  <div>
                    <h2 className="font-bold text-lg">{data.category}</h2>
                    <p className="text-[12px] text-[rgb(104,109,123)]">{data.totalCourses} courses</p>

                  </div>

                </div>
                <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6">
                  {data.courses.map((course) => (
                    <div key={course.id}>
                      <div className=" border-2 border-slate-50  hover:border-blue-300 rounded-lg">
                        <div className="flex flex-col gap-2 px-4 sm:px-6 py-3">
                          <div className="flex flex-row gap-3">
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-15 flex items-center justify-center">
                              <span >{course.code}</span>
                            </div>
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-25 flex items-center justify-center">
                              <span>{course.status}</span>
                            </div>
                          </div>
                          <div className="flex flex-col  sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="font-medium  text-lg flex-1 hover:text-blue-600 cursor-pointer">
                              {course.title}
                            </h3>
                            <div className="bg-[rgb(32,85,224)] text-white text-[14px] font-medium rounded-lg w-full sm:w-28 h-8 flex items-center justify-center gap-1 shrink-0">
                              <FaRegCirclePlay />
                              <button>Continue</button>
                            </div>
                          </div>
                          <p className="text-[14px] text-[rgb(104,109,123)]">{course.description}</p>
                          <div className="flex flex-row gap-2 items-center">
                            <HiOutlineBookOpen className="text-[14px] text-[rgb(104,109,123)]" />
                            <p className="text-[rgb(104,109,123)] text-[14px]">{course.modules} Modules</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 2nd course  */}
            <div className="bg-[var(--bg-navbar)] rounded-lg">
              <div>
                <div className="flex flex-row gap-3 items-center px-4 py-4">
                  <h1 className="w-12 h-10 bg-[rgb(31,83,219)] flex text-center justify-center py-2 text-lg font-bold text-white  rounded-lg flex-shrink-0" >2</h1>
                  <div>
                    <h2 className="font-bold text-lg">{data1.category}</h2>
                    <p className="text-[12px] text-[rgb(104,109,123)]">{data1.totalCourses} courses</p>

                  </div>

                </div>
                <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6">
                  {data1.courses.map((course) => (
                    <div key={course.id}>
                      <div className="border-2 border-slate-50  hover:border-blue-500 rounded-lg">
                        <div className="flex flex-col gap-2 px-4 sm:px-6 py-3">
                          <div className="flex flex-row gap-3">
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-15 flex items-center justify-center">
                              <span >{course.code}</span>
                            </div>
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-25 flex items-center justify-center">
                              <span>{course.status}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="font-medium text-lg flex-1 hover:text-blue-600 cursor-pointer">
                              {course.title}
                            </h3>

                            <div className="bg-[rgb(32,85,224)] text-white text-[14px] font-medium rounded-lg w-full sm:w-28 h-8 flex items-center justify-center gap-1 shrink-0">
                              <FaRegCirclePlay />
                              <button>Continue</button>
                            </div>
                          </div>


                          <p className="text-[14px] text-[rgb(104,109,123)]">{course.description}</p>
                          <div className="flex flex-row gap-2 items-center">
                            <HiOutlineBookOpen className="text-[14px] text-[rgb(104,109,123)]" />
                            <p className="text-[rgb(104,109,123)] text-[14px]">{course.modules} Modules</p>
                          </div>


                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            {/* 3rd course  */}
            <div className="bg-[var(--bg-navbar)] rounded-lg">
              <div>
                <div className="flex flex-row gap-3 items-center px-4 py-4">
                  <h1 className="w-12 h-10 bg-[rgb(31,83,219)] flex text-center justify-center py-2 text-lg font-bold text-white  rounded-lg flex-shrink-0" >3</h1>
                  <div>
                    <h2 className="font-bold text-lg">{data2.category}</h2>
                    <p className="text-[12px] text-[rgb(104,109,123)]">{data2.totalCourses} courses</p>
                  </div>

                </div>
                <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6">
                  {data2.courses.map((course) => (
                    <div key={course.id}>
                      <div className="border-2 border-slate-50  hover:border-blue-500 rounded-lg">
                        <div className="flex flex-col gap-2 px-4 sm:px-6 py-3">
                          <div className="flex flex-row gap-3">
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-15 flex items-center justify-center">
                              <span >{course.code}</span>
                            </div>
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-25 flex items-center justify-center">
                              <span>{course.status}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="font-medium text-lg flex-1 hover:text-blue-600 cursor-pointer">
                              {course.title}
                            </h3>

                            <div className="bg-[rgb(32,85,224)] text-white text-[14px] font-medium rounded-lg w-full sm:w-28 h-8 flex items-center justify-center gap-1 shrink-0">
                              <FaRegCirclePlay />
                              <button>Continue</button>
                            </div>
                          </div>


                          <p className="text-[14px] text-[rgb(104,109,123)]">{course.description}</p>
                          <div className="flex flex-row gap-2 items-center">
                            <HiOutlineBookOpen className="text-[14px] text-[rgb(104,109,123)]" />
                            <p className="text-[rgb(104,109,123)] text-[14px]">{course.modules} Modules</p>
                          </div>


                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            {/* 4th course */}
            <div className="bg-[var(--bg-navbar)] rounded-lg">
              <div>
                <div className="flex flex-row gap-3 items-center px-4 py-4">
                  <h1 className="w-12 h-10 bg-[rgb(31,83,219)] flex text-center justify-center py-2 text-lg font-bold text-white  rounded-lg flex-shrink-0" >4</h1>
                  <div>
                    <h2 className="font-bold text-lg">{data3.category}</h2>
                    <p className="text-[12px] text-[rgb(104,109,123)]">{data3.totalCourses} courses</p>
                  </div>

                </div>
                <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6">
                  {data3.courses.map((course) => (
                    <div key={course.id}>
                      <div className="border-2 border-slate-50  hover:border-blue-500 rounded-lg">
                        <div className="flex flex-col gap-2 px-4 sm:px-6 py-3">
                          <div className="flex flex-row gap-3">
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-15 flex items-center justify-center">
                              <span >{course.code}</span>
                            </div>
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-25 flex items-center justify-center">
                              <span>{course.status}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="font-medium text-lg flex-1 hover:text-blue-600 cursor-pointer">
                              {course.title}
                            </h3>

                            <div className="bg-[rgb(32,85,224)] text-white text-[14px] font-medium rounded-lg w-full sm:w-28 h-8 flex items-center justify-center gap-1 shrink-0">
                              <FaRegCirclePlay />
                              <button>Continue</button>
                            </div>
                          </div>


                          <p className="text-[14px] text-[rgb(104,109,123)]">{course.description}</p>
                          <div className="flex flex-row gap-2 items-center">
                            <HiOutlineBookOpen className="text-[14px] text-[rgb(104,109,123)]" />
                            <p className="text-[rgb(104,109,123)] text-[14px]">{course.modules} Modules</p>
                          </div>


                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            {/* 5th course  */}
            <div className="bg-[var(--bg-navbar)] rounded-lg">
              <div>
                <div className="flex flex-row gap-3 items-center px-4 py-4">
                  <h1 className="w-12 h-10 bg-[rgb(31,83,219)] flex text-center justify-center py-2 text-lg font-bold text-white  rounded-lg flex-shrink-0" >5</h1>
                  <div>
                    <h2 className="font-bold text-lg">{data4.category}</h2>
                    <p className="text-[12px] text-[rgb(104,109,123)]">{data4.totalCourses} courses</p>
                  </div>

                </div>
                <div className="flex flex-col gap-4 px-4 pb-4 sm:px-6">
                  {data4.courses.map((course) => (
                    <div key={course.id}>
                      <div className="border-2 border-slate-50  hover:border-blue-500 rounded-lg">
                        <div className="flex flex-col gap-2 px-4 sm:px-6 py-3">
                          <div className="flex flex-row gap-3">
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-15 flex items-center justify-center">
                              <span >{course.code}</span>
                            </div>
                            <div className="bg-blue-300 rounded-2xl text-[12px] text-blue-800 w-25 flex items-center justify-center">
                              <span>{course.status}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="font-medium text-lg flex-1 hover:text-blue-600 cursor-pointer">
                              {course.title}
                            </h3>

                            <div className="bg-[rgb(32,85,224)] text-white text-[14px] font-medium rounded-lg w-full sm:w-28 h-8 flex items-center justify-center gap-1 shrink-0">
                              <FaRegCirclePlay />
                              <button>Continue</button>
                            </div>
                          </div>


                          <p className="text-[14px] text-[rgb(104,109,123)]">{course.description}</p>
                          <div className="flex flex-row gap-2 items-center">
                            <HiOutlineBookOpen className="text-[14px] text-[rgb(104,109,123)]" />
                            <p className="text-[rgb(104,109,123)] text-[14px]">{course.modules} Modules</p>
                          </div>


                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>

    </>
  );
};
export default Course;
