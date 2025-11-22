import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  // Default email & password
  const [input, setInput] = useState({
    email: "sadhonkumardey750@gmail.com",
    password: "632571",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(input.email, input.password);

    if (result.success) {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/");
    } else {
      setError(result.message);
      toast.error(result.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-700 via-blue-500 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30 animate-fadeIn">
        <div className="text-center mb-6">
          <img
            src="/campus-logo.png"
            alt="Campus Mart"
            className="h-20 mx-auto drop-shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white mt-3">Campus Mart</h1>
          <p className="text-white/80">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/70 focus:bg-white outline-none shadow-md"
          />

          {error && (
            <p className="text-red-200 bg-red-500/20 py-2 px-3 rounded-md text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/90 mt-4 text-sm">
          Don't have an account?
          <Link to='/contact'>
            <span className="cursor-pointer text-yellow-300 hover:underline ml-1">
              Contact Admin
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
