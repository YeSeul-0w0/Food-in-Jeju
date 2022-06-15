import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Food from "./Tab/Food";

function Router() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Food />} />
        </Routes>
    </BrowserRouter>
}

export default Router;