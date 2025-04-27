import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {Toaster} from "react-hot-toast";


function App() {


  return (
    <>
        <Toaster position="bottom-right" reverseOrder={false}/>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
