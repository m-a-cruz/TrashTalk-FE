import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API}/protected`, { withCredentials: true });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authorization error:", error);
        setIsAuthenticated(false); // Update state on error
      }
    };

    checkAuth(); // Call authentication check on mount
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loader while verifying
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;










// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const API = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const checkAuth = async () => {
//       axios.get(`${API}/protected`, { withCredentials: true })
//         .then(response => {
//           // console.log(response.data);
//           setIsAuthenticated(true);
//         })
//         .catch(error => {
//           // console.error("Authorization error:", error);
//           setIsAuthenticated(false);
//         });
//     };

//     checkAuth();
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show loader while verifying
//   }

//   return isAuthenticated ? children : <Navigate to="/login"replace/>;
// };

// export default ProtectedRoute;
