import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {Toaster} from "react-hot-toast";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import CreateDonationPage from "./pages/CreateDonationPage.jsx";
import UpdateEventPage from "./pages/UpdateEventPage.jsx";
import VolunteerDashboardPage from "./pages/VolunteerDashboardPage.jsx";
import DonorDashboardPage from "./pages/DonorDashboardPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";


function App() {


  return (
    <>
        <Toaster position="bottom-right" reverseOrder={false}/>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
               <Route path="/donor-dashboard" element={<DonorDashboardPage />} />
               <Route path="/volunteer-dashboard" element={<VolunteerDashboardPage />} />
               <Route path="/create-donation" element={<CreateDonationPage />} />
               <Route path="/:id/update-event" element={<UpdateEventPage />} />
               <Route path="/activity" element={<ActivityPage />} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
