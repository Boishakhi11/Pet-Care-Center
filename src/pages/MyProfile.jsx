import React, { use, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Updated Successfully ✅");
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        {/* Profile picture */}
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-2">
              <img src={user.photoURL || userIcon} alt="User" />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-6 space-y-2">
          <h2 className="text-2xl font-bold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-base-content/70">{user.email}</p>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary w-full mt-6"
          >
            Update Profile
          </button>
        )}

        {isEditing && (
          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-3">
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="url"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <button type="submit" className="btn btn-success w-full">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
