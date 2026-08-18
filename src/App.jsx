import { Routes, Route, useLocation } from "react-router-dom"; 
import useTheme from "./components/useTheme"; 
import Home from "./components/HomePage";
import BackgroundPage from "./components/BackgroundPage";
import Check from "./components/CheckProgramPage";
import Navbar from "./components/Navbar";
import Selection from "./components/SelectionPage";
import Login from "./components/LoginPage";
import Create from "./components/CreatePage";
import MemberShip from "./components/MembershipProgram";
import Approval from "./components/ApprovalPage";
import Course from "./components/CoursesPage";
import All from "./components/AllPage";
import Reject from "./components/RejectedPage";
import Pending from "./components/PendingPage";

function App() {
  const [theme, toggleTheme] = useTheme();
  const location = useLocation(); // 2. Get the current active URL path

  // 3. Define the pages where you do NOT want the navbar to appear
  const hideNavbarPaths = ["/LoginPage", "/CreatePage"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="app-container">
      {/* 4. Only render the Navbar if the current path is NOT in the hide list */}
      {!shouldHideNavbar && <Navbar theme={theme} toggleTheme={toggleTheme} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BackgroundPage" element={<BackgroundPage />} />
        <Route path="/CheckProgramPage" element={<Check />} />
        <Route path="/SelectionPage" element={<Selection />} />
        <Route path="/CreatePage" element={<Create />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/MembershipProgram" element={<MemberShip />} />
        <Route path="/ApprovalPage" element={<Approval />} />
        <Route path="/CoursesPage" element={<Course />} />
        <Route path="/PendingPage" element={<Pending />} />
        <Route path="/AllPage" element={<All />} />
        <Route path="/RejectedPage" element={<Reject />} />
      </Routes>
    </div>
  );
}

export default App;




