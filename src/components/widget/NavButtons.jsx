import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import authService from "../../app/auth.service";
import { Button } from "./Button";
import { memo } from "react";
import { Link } from "react-router-dom";
export const NavButtons = memo(() => {
  const dispath = useDispatch();
  const authState = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await authService.logout();
    dispath(logout());
  };
  return (
    <div className="flex space-x-4 justify-center items-center">
      {authState.status ? (
        <Button
          bgColor="bg-red-700"
          textColor="text-white"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <>
          <Link to="/register">
            <Button
              bgColor="bg-white"
              textColor="text-black"
              classNames="border border-white hover:bg-transparent hover:text-white  transition-colors duration-300"
            >
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button
              bgColor=""
              textColor="text-white"
              classNames="border border-1 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Login
            </Button>
          </Link>
        </>
      )}
    </div>
  );
})
