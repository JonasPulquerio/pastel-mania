/* eslint-disable import/first */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SobreNos from "./Pages/SobreNos";
import Galeria from "./Pages/Galeria"
import PageNotFound from "./Pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobreNos" element={ <SobreNos /> }></Route>
                <Route path="/galeria" element={ <Galeria /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;