import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <button className="btn loading btn-square">loading</button>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace state={{from: location}}></Navigate>;
};

export default PrivateRoute;