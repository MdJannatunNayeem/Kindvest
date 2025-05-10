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
import DonationForm from "./components/DonationForm.jsx";
import DonateFormPage from "./pages/DonateFormPage.jsx";
import ManageDonationUpdatePage from "./pages/ManageDonationUpdatePage.jsx";
import DonorDonationDetailsPage from "./pages/DonorDonationDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


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
               <Route path="/:id/donate" element={<DonateFormPage />} />
               <Route path="/:id/update-manage-donation" element={<ManageDonationUpdatePage />} />
               <Route path="/donation-details/:id" element={<DonorDonationDetailsPage />} />
               <Route path="/user-details" element={<ProfilePage />} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
