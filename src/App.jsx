import React from "react";
import AmbientBackground from "./components/Layouts/AmbientBackground";
import Navbar from "./components/Layouts/Navbar";
import Banner from "./components/Layouts/Banner";
import TotalNews from "./components/Layouts/TotalNews";
import ProgramKeahlian from "./components/Layouts/ProgramKeahlian";
import SIAP from "./components/Layouts/SIAP";
import LatestNews from "./components/Layouts/LatestNews";
import Gallery from "./components/Layouts/Gallery";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
        <Banner />
        <TotalNews />
        <ProgramKeahlian />
        <SIAP />
        <LatestNews />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
