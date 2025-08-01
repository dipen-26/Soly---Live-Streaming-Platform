import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // update global state
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-200">
      <h1 className="font-bold">LiveStreamApp</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <span>Hello, {user.username}</span>
          <button onClick={handleLogout} className="text-red-500">
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      )}
    </nav>
  );
}
