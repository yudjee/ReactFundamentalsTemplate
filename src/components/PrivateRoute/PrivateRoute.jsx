import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserRoleSelector } from "../../store/selectors";

export const PrivateRoute = ({ children }) => {
  const role = useSelector(getUserRoleSelector);
  const [hasRole, setHasRole] = useState(false);

  useEffect(() => {
    typeof role === "string" && setHasRole(true);
  }, [role]);

  if (!hasRole) {
    return null;
  }

  return role === "admin" ? children : <Navigate to={"/courses"} />;
};
