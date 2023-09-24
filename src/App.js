import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Login from "./Pages/Login/Login";
import { dividerClasses } from "@mui/material";
import MainDash from "./components/MainDash/MainDash";
import OrderDash from "./components/OrderDash/OrderDash";
import AnalyticDash from "./components/AnalyticDash/AnalyticDash";
import ProductForm from "./components/ProductForm/ProductForm";
import DetailsForm from "./components/DetailsForm/DetailsForm"
import GstForm from "./components/GstForm/GstForm"
import Profile from './Pages/Profile'
import BussinessPage from "./Pages/BussinessPage/BussinessPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Kyc from "./Pages/KYC/Kyc";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="app" element={<Main/>}>
                    <Route path="welcome" element={<MainDash/>}></Route>
                    <Route path="order" element={<OrderDash/>}></Route>
                    <Route path="analytics" element={<AnalyticDash/>}></Route>
                    <Route path="addProduct" element={<ProductForm/>}></Route>
                    <Route path="DetailsForm" element={<DetailsForm/>}></Route>
                    <Route path="GstForm" element={<GstForm/>}></Route>
                    <Route path="Profile" element={<Profile/>}>

                        <Route path="business" element={<BussinessPage/>}></Route>
                        <Route path="ProfilePage" element={<ProfilePage/>}></Route>
                        <Route path="KYC" element={<Kyc/>}> </Route>

                    </Route>


                </Route>
            </Routes>    
        </div>
        // <Main/>
    );
}

export default App;
