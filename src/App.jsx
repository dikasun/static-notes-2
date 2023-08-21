import React from "react";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddNotePage from "./pages/AddNotePage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
