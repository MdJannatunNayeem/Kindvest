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
import AdminCompletionPage from "./pages/AdminCompletionPage.jsx";
import AdminPendingPage from "./pages/AdminPendingPage.jsx";
import AdminAcceptPage from "./pages/AdminAcceptPage.jsx";
import VolunteerDeliveryTable from "./components/VolunteerDeliveryTable.jsx";
import VolunteerDeliveryTablePage from "./pages/VolunteerDeliveryTablePage.jsx";
import VolunteerPendingPage from "./pages/VolunteerPendingPage.jsx";
import VolunteerReceivedPage from "./pages/VolunteerReceivedPage.jsx";
import DonorOnGoingPage from "./pages/DonorOnGoingPage.jsx";
import DonorCompletePage from "./pages/DonorCompletePage.jsx";
import DonorPendingPage from "./pages/DonorPendingPage.jsx";
import VolunteerListPage from "./pages/VolunteerListPage.jsx";


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
               <Route path="/admin/completion-donation" element={<AdminCompletionPage />} />
               <Route path="/admin/pending-donation" element={<AdminPendingPage />} />
               <Route path="/admin/accept-donation" element={<AdminAcceptPage />} />
               <Route path="/volunteer/delivered-donation" element={<VolunteerDeliveryTablePage/>} />
               <Route path="/volunteer/pending-donation" element={<VolunteerPendingPage/>} />
               <Route path="/volunteer/received-donation" element={<VolunteerReceivedPage/>} />
               <Route path="/donor/accept-donation" element={<DonorOnGoingPage/>} />
               <Route path="/donor/received-donation" element={<DonorCompletePage/>} />
               <Route path="/donor/pending-donation" element={<DonorPendingPage/>} />
               <Route path="/all-volunteers" element={<VolunteerListPage/>} />
               <Route path="/user-details" element={<ProfilePage />} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
