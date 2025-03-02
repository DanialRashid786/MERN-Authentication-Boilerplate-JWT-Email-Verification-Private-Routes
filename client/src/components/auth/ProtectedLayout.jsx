import useAuthCheck from "../../custom-Hooks/useAuthCheck";
import PropTypes from 'prop-types';

const ProtectedLayout = ({ children }) => {
  useAuthCheck(); // Runs authentication check on all protected pages

  return <>{children}</>; // Render the protected content
};
ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedLayout;
