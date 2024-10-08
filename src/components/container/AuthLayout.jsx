import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus, navigate]);
  return <>{children}</>;
};

export const RedirectLayout = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus) {
      navigate("/all-post");
    }
  }, [authStatus, navigate]);
  return <>{children}</>;
};
