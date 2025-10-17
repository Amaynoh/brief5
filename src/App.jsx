import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Evenement from "./pages/Evenement";
import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";
import MyEvents from "./pages/MyEvents";
import Startups from "./pages/Startups";
import Investisseurs from "./pages/Investisseurs";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investisseurs" element={<Investisseurs />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/forum" element={<Forum />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute roles={["admin"]}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/myevents"
            element={
              <PrivateRoute roles={["admin", "startup", "investisseur"]}>
                <MyEvents />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

