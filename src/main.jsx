import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const EditorLayout = lazy(() => import("./layouts/EditorLayout"));
// eslint-disable-next-line react-refresh/only-export-components
const RunLayout = lazy(() => import("./layouts/RunLayout"));
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";
import { ToastContainer } from "react-toastify";
import SalamConfig from "./components/config/SalamConfig.jsx";
import NotFound from "./components/errors/NotFound.jsx";
import { Suspense } from "react";
import Loading from "./components/loading/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  </>,
);
