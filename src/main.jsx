import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const EditorLayout = lazy(() => import("./layouts/EditorLayout"));
const RunLayout = lazy(() => import("./layouts/RunLayout"));
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";
import { ToastContainer } from "react-toastify";
import SalamConfig from "./components/config/SalamConfig.jsx";
import NotFound from "./components/errors/NotFound.jsx";
import { Suspense } from "react";
import Loading from "./components/loading/Loading.jsx";
const LoginLayout = lazy(() => import("./layouts/LoginLayout.jsx"));

createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <RouteChangeHandler />
        <ToastContainer />
        <SalamConfig />
        <Routes>
          {/*Editor*/}
          <Route path="/" element={<EditorLayout />} />
          <Route path="/run" element={<RunLayout />} />

          {/*Costume*/}
          <Route path="/firework" element={<FireWork />} />

          {/*Auth*/}
          <Route path="/login" element={<LoginLayout />} />

          {/*404 - Not found*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>,
);
