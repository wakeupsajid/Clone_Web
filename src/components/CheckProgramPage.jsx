import Footer from "./Fooer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Check = () => {
  return (
    <>

      <div className="bg-[var(--bg-main)] font-sans min-h-screen">
       

        <div className="mt-6 font-sans px-4 sm:px-6 lg:px-8 mb-80">
          <div className="max-w-2xl mx-auto bg-[var(--bg-hover)] rounded-2xl text-center p-6 sm:p-8 shadow-md">

            <h1 className="text-xl sm:text-2xl font-bold">
              Select a programme first
            </h1>

            <p className=" text[var(--text-muted)] text-sm sm:text-base lg:text-lg mt-4">
              To apply, choose a programme level from the programme selection page,
              then complete the eligibility checklist.
            </p>

            <button
              className="mt-6 w-full sm:w-auto px-6 py-3 bg-[rgb(32,85,224)] text-white font-bold rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to="/SelectionPage">
                Go To Programme Selection
              </Link>
            </button>

          </div>
        </div>
        <Footer />
      </div>





    </>
  );
};
export default Check;