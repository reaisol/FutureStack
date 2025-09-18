
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "./App.tsx";
  import StudyAbroadPage from "./pages/StudyAbroad.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
      </Routes>
    </BrowserRouter>
  );
  