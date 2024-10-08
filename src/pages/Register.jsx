import { useDispatch } from "react-redux";
import { Button, Input } from "../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../app/auth.service";
import { login as loginAction } from "../store/auth.slice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Register handler
  const registerUser = async (data) => {
    setError("");
    
    try {
      const newUser = await authService.createAccount(data);
      if (newUser) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(loginAction({ user }));
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
          Create an Account
        </h2>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleSubmit(registerUser)}>
          {/* Name Input */}
          <Input
            type="text"
            label="Full Name: "
            placeholder="Enter Your Full Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}

          {/* Email Input */}
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
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}

          {/* Password Input */}
          <Input
            type="password"
            label="Password: "
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">
              {errors.password.message}
            </p>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Register Button */}
          <div>
            <Button type="submit" classNames="w-full py-3 text-lg">
              Register
            </Button>
          </div>
        </form>

        <div className="my-6">
          <div className="border-t border-gray-300"></div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-950 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
