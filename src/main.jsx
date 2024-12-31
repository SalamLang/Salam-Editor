import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditorLayout from "./layouts/EditorLayout.jsx";
import RouteChangeHandler from "./components/nprogress/RouteChangeHandler.jsx";

createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>
        <RouteChangeHandler/>
        <Routes>
            <Route path="/" element={<EditorLayout/>}/>
        </Routes>
    </BrowserRouter>
</>)
