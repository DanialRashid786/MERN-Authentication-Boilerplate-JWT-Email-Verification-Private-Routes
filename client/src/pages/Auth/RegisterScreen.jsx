import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
// import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  CircularProgress, 
  Grid 
} from "@mui/material";
import FormContainer from "../../components/ui/FormContainer";
import Loader from "../Auth/Loader";

import useRedirectIfAuthenticated from "../../custom-Hooks/useRedirectIfAuthenticated";



const RegisterScreen = () => {
  const loading = useRedirectIfAuthenticated(); // Ensure user is checked before rendering
 // Ensure user is checked before rendering

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        await register({ name, email, password }).unwrap(); // No need to store response
        toast.success("Registered successfully. Please check your email to verify your account.");
        navigate("/login"); // Redirect to login page after registration
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match");
  //   } else {
  //     try {
  //       const res = await register({ name, email, password }).unwrap();
  //       dispatch(setCredentials({ ...res }));
  //       navigate("/");
  //     toast.success("Registered successfully");

  //     } catch (err) {
  //       toast.error(err?.data?.message || err.error);
  //     }
  //   }
  // };

  if (loading) return null; // Ensure hooks are called first before this condition

  return (
    <FormContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>

      <Box component="form" onSubmit={submitHandler} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Register"}
        </Button>
      </Box>

      {isLoading && <Loader />}

      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Typography variant="body2">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Grid>
    </FormContainer>
  );
};

export default RegisterScreen;
