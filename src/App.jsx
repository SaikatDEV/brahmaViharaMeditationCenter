import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import AboutUs from "./components/Section/AboutUs";
import Experience from "./components/Section/Experience";
import BuddhaBanner from "./components/Section/BuddhaBanner";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/Section/VideoPlayer";
import DonateOnline from "./components/Footer/DonateOnline";
import AdminLogin from "./components/Header/AdminLogin";
import CreatePost from "./components/Posts/CreatePost";
import NotFound from "./components/NotFound/NotFound"; // Optional: For undefined routes

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <Router>
      <div>
        <Header
          onAdminLogin={() => setShowLoginForm(true)}
          isAdminLoggedIn={isAdminLoggedIn}
          onAdminLogout={handleLogout}
        />

        {/* Admin Login Form */}
        {showLoginForm && (
          <AdminLogin
            onLoginSuccess={handleLoginSuccess}
            onClose={handleCloseLoginForm}
            isAdminLoggedIn={isAdminLoggedIn}
            onLogout={handleLogout}
          />
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<BuddhaBanner />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/videos" element={<VideoPlayer />} />
          <Route path="/donate" element={<DonateOnline />} />
          <Route path="/createpost" element={<CreatePost />} />
          {/* Optional: 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
