import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const features = [
  { icon: <LockIcon fontSize="large" />, title: "JWT Authentication", desc: "Secure login system with HTTP-only cookies." },
  { icon: <SecurityIcon fontSize="large" />, title: "Private Routing", desc: "Protect pages from unauthorized access." },
  { icon: <VerifiedUserIcon fontSize="large" />, title: "Email Verification", desc: "Verify accounts with a one-time email link." },
  { icon: <VpnKeyIcon fontSize="large" />, title: "Redux Toolkit", desc: "Manage authentication state efficiently." },
];

const Hero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1976D2 30%, #1565C0 90%)",
        color: "white",
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Secure MERN Authentication
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, mb: 4 }}>
          Complete authentication system with JWT, email verification, and private routing.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", mb: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/login"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "50px",
            }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            href="/register"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "50px",
              borderColor: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            Register
          </Button>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3} justifyContent="center">
          {features.map(({ icon, title, desc }, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  bgcolor: "background.paper",
                  boxShadow: 3,
                  borderRadius: 2,
                  minHeight: 180,
                }}
              >
                <CardContent>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
