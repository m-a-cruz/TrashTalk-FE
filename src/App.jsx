import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import Monitor from "./components/Monitor";
import Insights from "./components/Insights";
import Reports from "./components/Reports";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./components/NotFoundPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import SetNewPasswordPage from "./components/SetNewPasswordPage";
import TermsConditionPage from "./components/TermsConditionPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/set-new-password" element={<SetNewPasswordPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/monitor" element={<PrivateRoute><Monitor /></PrivateRoute>} />
        <Route path="/insights" element={<PrivateRoute><Insights /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />

        {/* Default Route */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
