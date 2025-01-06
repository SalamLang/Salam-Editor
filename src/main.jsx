import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditorLayout from "./layouts/EditorLayout.jsx";
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>
        <RouteChangeHandler/>
        <ToastContainer />
        <Routes>
            <Route path="/" element={<EditorLayout/>}/>
            <Route path="/firework" element={<FireWork />}/>
        </Routes>
    </BrowserRouter>
</>)
