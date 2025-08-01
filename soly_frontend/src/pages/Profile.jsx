// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored?.id) {
      getUserProfile(stored.id)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Profile</h2>
      {user ? (
        <div className="mt-4 space-y-2">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio || 'N/A'}</p>
          <p><strong>Joined:</strong> {new Date(user.date_joined).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
