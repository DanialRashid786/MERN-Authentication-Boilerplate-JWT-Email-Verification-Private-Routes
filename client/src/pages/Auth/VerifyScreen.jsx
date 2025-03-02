import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Container, Card, CardContent, Typography, CircularProgress, Box } from "@mui/material";

const VerifyScreen = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/verify/${token}`);
        toast.success("Account verified successfully. You can now log in.");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch {
        toast.error("Invalid or expired verification link.");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    verifyAccount();
  }, [token, navigate]);

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ p: 3, textAlign: "center", boxShadow: 3, borderRadius: 2, width: "100%" }}>
        <CardContent>
          {loading ? (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <CircularProgress size={50} />
              <Typography variant="h6" color="textSecondary">
                Verifying your account...
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6" color="textPrimary">
              Redirecting...
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default VerifyScreen;
