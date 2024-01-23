import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { analytics } from"./Helper/index";
import { logEvent } from "firebase/analytics";
import Chat from "./Pages/Chat";

export default function App() {
   if (analytics) {
    logEvent(analytics, "Init...")
   }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/chat" element={<Chat/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}