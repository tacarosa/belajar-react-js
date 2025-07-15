import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage"
import Dashboard from "../page/Dashboard";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;