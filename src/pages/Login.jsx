import { useDispatch } from "react-redux";
import { Button, Input } from "../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../app/auth.service";
import { login as loginAction } from "../store/auth.slice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispath = useDispatch();
  const { register, handleSubmit,formState: { errors } } = useForm();
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
        navigate("/all-post");
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
        <form className="space-y-6" onSubmit={handleSubmit(login)}>
          <Input
            type="email"
            label="Email: "
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
          <Input
            type="password"
            label="Password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <Button type="submit" classNames="w-full py-3 text-lg">
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
            <Link to="/register" className="text-gray-950 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
