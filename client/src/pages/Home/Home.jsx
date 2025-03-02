import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useVerifyTokenQuery}  from "../../slices/usersApiSlice";
import { setCredentials, logout } from "../../slices/authSlice";
import FeaturesSection from "../../components/HomeComponents/FeaturesSection";
import Hero from "../../components/HomeComponents/Hero";

const Home = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const { data, error } = useVerifyTokenQuery(); // API call to verify token

  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data)); // Store user info in Redux
    }
    if (error) {
      dispatch(logout()); // If token is invalid, logout user
    }
  }, [data, error, dispatch]);

  return (
    <div>
      <Hero />
      {userInfo && <FeaturesSection />}
    </div>
  );
};

export default Home;
