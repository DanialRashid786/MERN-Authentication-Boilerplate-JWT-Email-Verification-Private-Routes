import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/verify-token`, {
          withCredentials: true, // Ensures the cookie is sent
        });
      } catch (error) {
        console.log("Not authenticated! Redirecting...",error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);
};

export default useAuthCheck;
