import { useDispatch } from "react-redux";
import { Button, Input } from "../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../app/auth.service";
import { login as loginAction } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispath = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Login handler
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const user = await authService.getCurrentUser();
        if (user) dispath(loginAction({ user }));
        navigate("/all-post")
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src="logo.png" alt="Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Login Form */}
        <form className="space-y-6">
          <Input type="email" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <div>
            <Button type="submit" classNames="w-full py-3 text-lg">
              {" "}
              Sign In
            </Button>
          </div>
        </form>

        <div className="my-6">
          <div className="border-t border-gray-300"></div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-gray-950 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
