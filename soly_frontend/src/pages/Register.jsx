// src/pages/Register.jsx
import { use, useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const { setUser } = useUser();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      setMessage("Registered successfully!");
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input name="username" placeholder="Username" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" className="w-full p-2 border rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
        {message && <p className="text-sm text-center text-red-500 mt-2">{message}</p>}
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
}
