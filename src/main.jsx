import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorLayout from "./layouts/EditorLayout.jsx";
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";
import { ToastContainer } from "react-toastify";
import RunLayout from "./layouts/RunLayout.jsx";
import SalamConfig from "./components/config/SalamConfig.jsx";
import NotFound from "./components/errors/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <RouteChangeHandler />
      <ToastContainer />
      <SalamConfig />
      <Routes>
        <Route path="/" element={<EditorLayout />} />
        <Route path="/run" element={<RunLayout />} />
        <Route path="/firework" element={<FireWork />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>,
);
