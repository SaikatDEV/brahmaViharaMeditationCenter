import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Section/Home";
import Header from "./components/Header/Header";
import AboutUs from "./components/Section/AboutUs";
import Tripitaka from "./components/Section/Tripitaka";
import Viharas from "./components/Section/Viharas";
import Footer from "./components/Footer/footer";
import DonateOnline from "./components/Footer/DonateOnline";
import AdminLogin from "./components/Header/AdminLogin";
import CreatePost from "./components/Posts/CreatePost";
import Stories from "./components/Section/Stories";
import Jataka from "./components/Section/Jataka";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/tripitaka" element={<Tripitaka />} />
          <Route path="/jataka" element={<Jataka />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/viharas" element={<Viharas />} />
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
