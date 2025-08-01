// src/pages/Login.jsx
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const { setUser } = useUser();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      const user = res.data;
      console.log("User data: ", user)
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user); // ✅ UPDATE CONTEXT
      setMessage("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 1000)
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" className="w-full p-2 border rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Log In
        </button>
        {message && <p className="text-sm text-center text-red-500 mt-2">{message}</p>}
      </form>
    </div>
  );
}
