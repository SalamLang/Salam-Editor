import "./i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";
import { ToastContainer } from "react-toastify";
import SalamConfig from "./components/config/SalamConfig.jsx";
import NotFound from "./components/errors/NotFound.jsx";
import Loading from "./components/loading/Loading.jsx";
import LoginProvider from "./provider/LoginProvider.jsx";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Index from "./components/admin/Index.jsx";
import Users from "./components/admin/Users.jsx";
import Codes from "./components/admin/Codes.jsx";
import EditorLayout from "./layouts/EditorLayout";
import LangConfig from "./components/config/LangConfig.jsx";
import LoginLayout from "./layouts/LoginLayout.jsx";
import TrueProvider from "./provider/TrueProvider.jsx";
const RunLayout = lazy(() => import("./layouts/RunLayout"));

createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <LangConfig />
        <TrueProvider>
          <LoginProvider>
            <RouteChangeHandler />
            <ToastContainer />
            <Toaster />
            <SalamConfig />
            <Routes>
              {/*Editor*/}
              <Route path="/:id?" element={<EditorLayout />} />
              <Route path="/run" element={<RunLayout />} />

              {/*Costume*/}
              <Route path="/firework" element={<FireWork />} />

              {/*Auth*/}
              <Route path="/login" element={<LoginLayout />} />

              {/*Admin*/}
              <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Index />} />
                <Route path={"users"} element={<Users />} />
                <Route path={"codes"} element={<Codes />} />
              </Route>

              {/*404 - Not found*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LoginProvider>
        </TrueProvider>
      </BrowserRouter>
    </Suspense>
  </>,
);
