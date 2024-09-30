import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SobreNos from "./Pages/SobreNos";
import Galeria from "./Pages/Galeria"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobreNos" element={ <SobreNos /> }></Route>
                <Route path="/galeria" element={ <Galeria /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;