import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Star, Security, Speed } from "@mui/icons-material";

const features = [
  { icon: <Star fontSize="large" />, title: "Quality", description: "We ensure top-notch quality in all our products." },
  { icon: <Security fontSize="large" />, title: "Security", description: "Your data and privacy are our top priority." },
  { icon: <Speed fontSize="large" />, title: "Performance", description: "Optimized for speed and efficiency." },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, px: 2, bgcolor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom>
        Our Key Features
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Discover what makes us stand out from the competition.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
