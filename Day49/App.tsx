import { Route, Routes } from "react-router";
import  DashboardLayout  from "./Dashboard";
import Home from "./Inputs";
import {Profile} from "./Inputs";
import  {Orders}  from "./Inputs";
import  {Settings}  from "./Inputs";

function App(){
    return(
                <Routes>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                </Routes>

    );
}

export default App;