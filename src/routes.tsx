import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import { Index } from "./pages";
import { Dashboard } from "./pages/home";

export default () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

          </Routes>
      </BrowserRouter>
    );
}