import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditorLayout from "./layouts/EditorLayout.jsx";
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";
import FireWork from "./components/FireWork.jsx";

createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>
        <RouteChangeHandler/>
        <Routes>
            <Route path="/" element={<EditorLayout/>}/>
            <Route path="/firework" element={<FireWork />}/>
        </Routes>
    </BrowserRouter>
</>)
