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
import AccountSettings from "./components/AccountSettings";
import ReportAProblem from "./components/ReportAProblem";
import HelpPage from "./components/HelpPage";
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
        <Route path="/accountsettings" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />
        <Route path="/reportaproblem" element={<PrivateRoute><ReportAProblem /></PrivateRoute>} />
        <Route path="/helppage" element={<PrivateRoute><HelpPage /></PrivateRoute>} />
        <Route path="terms-and-conditions" element={<PrivateRoute><TermsConditionPage /></PrivateRoute>} />
        <Route path="privacy-policy" element={<PrivateRoute><PrivacyPolicyPage /></PrivateRoute>} />

        {/* Default Route */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
