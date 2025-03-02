import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
import FormContainer from "../../components/ui/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import useRedirectIfAuthenticated from "../../custom-Hooks/useRedirectIfAuthenticated";

const LoginScreen = () => {
  const loading = useRedirectIfAuthenticated(); // Ensure user is checked before rendering

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/");
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  if (loading) return null; // Ensure hooks are called first before this condition

  return (
    <FormContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>

      <Box component="form" onSubmit={submitHandler} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Sign In"}
        </Button>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2">
          New Customer? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </FormContainer>
  );
};

export default LoginScreen;