import React, { useState, useEffect } from "react";

const Account = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setUserId] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./userData.json");
        const data = await response.json();
        setUserData(data.users); // Set user data from JSON
        console.log(userData);
        // Set default values for username, website, and avatar_url
        if (user && user.email) {
          // Check if user and user.email exist
          const currentUser = data.users.find((u) => u.email === user.email);
          if (currentUser) {
            setUserId(currentUser.id || "");
            // Set other fields similarly
            setUserName(currentUser.username || "");
            setPhone(currentUser.phone || "");
            setAge(currentUser.age || "");
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Update user profile logic here using setUsername, setWebsite, setAvatarUrl
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <div>Email: {user?.email}</div>{" "}
          {/* Use optional chaining to handle undefined user */}
          <div>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              placeholder={username}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Image</label>
            <input
              id="phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {phone}
          <div>
            <button className="button primary block" disabled={loading}>
              Update profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Account;
