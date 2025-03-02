import { Container, Box } from "@mui/material";
import PropTypes from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
