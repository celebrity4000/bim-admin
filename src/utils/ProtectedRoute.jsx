import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateAdmin } from "./authHandler";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading, true or false means validated

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const adminValidation = await validateAdmin();
        if (adminValidation.message === "Session Validated") {
          localStorage.setItem(
            "userDetails",
            JSON.stringify(adminValidation && adminValidation?.user)
          );
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
