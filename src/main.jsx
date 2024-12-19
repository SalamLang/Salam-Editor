import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditorLayout from "./layouts/EditorLayout.jsx";

createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <EditorLayout /> } />
        </Routes>
    </BrowserRouter>
</>)
