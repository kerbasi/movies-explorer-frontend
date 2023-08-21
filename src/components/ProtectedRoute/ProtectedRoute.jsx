import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  const check = props.reversProtect ? !props.logined : props.logined;
  return check ? (
    <Component {...props} />
  ) : (
    <Navigate to={check ? "/movies" : "/"} replace />
  );
}

export default ProtectedRoute;
