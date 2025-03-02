import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useRedirectIfAuthenticated = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/verify-token`, {
          withCredentials: true, // Send cookies for authentication check
        });
        navigate("/profile"); // Redirect authenticated users to a protected page
      } catch (error) {
        console.log("Not authenticated! Redirecting...", error);
        setLoading(false); // Allow the login page to be rendered for non-authenticated users
      }
    };

    checkAuth();
  }, [navigate]);

  return loading; // Return loading state
};

export default useRedirectIfAuthenticated;
