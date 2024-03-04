import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
    <Route
      {...rest}
      element={user ? children : <Navigate to="/login" replace />}
    />
    </Routes>
  );
};

export default PrivateRoute;
