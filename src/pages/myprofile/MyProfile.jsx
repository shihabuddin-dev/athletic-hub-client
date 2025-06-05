import React from "react";
import Swal from "sweetalert2";
import Button from "../../components/ui/Button";
import useAuth from "../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";
import userLogo from "../../assets/user-logo.png";

const MyProfile = () => {
  const { user, signOutUser } = useAuth();
  // logout user
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5046E5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser();
        Swal.fire({
          title: "Sign out!",
          text: "You have been Sign out.",
          icon: "success",
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Sign Out failed.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <Fade>
      <div className="flex justify-center items-center min-h-[70vh]">
        <title>My Profile | Athletic Hub</title>
        <div className="card w-full max-w-md bg-base-100 shadow-md border-t-4 border-b-4 border-secondary p-6">
          <div className="flex flex-col items-center gap-3">
            <div className="avatar">
              <div className="w-24 h-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || userLogo} alt="User" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-1">
              {user.displayName || "User Name"}
            </h2>
            <span className="badge badge-outline badge-secondary mb-2">
              {user.email}
            </span>
          </div>
          <div className="divider">Profile Details</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Account Created:</span>
              <span className="text-base-content/70">
                {user.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Last Sign In:</span>
              <span className="text-base-content/70">
                {user.metadata?.lastSignInTime
                  ? new Date(user.metadata.lastSignInTime).toLocaleString()
                  : "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">User ID:</span>
              <span className="text-base-content/70 break-all">{user.uid}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email Verified:</span>
              <span
                className={`inline-block w-2 h-2 rounded-full  animate-pulse ${
                  user.emailVerified ? "bg-green-600" : "bg-red-500"
                }`}
              ></span>
              <span
                className={
                  user.emailVerified ? "text-green-600" : "text-red-500"
                }
              >
                {user.emailVerified ? "Yes" : "No"}
              </span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2 items-center">
            <Button onClick={handleLogOut} variant="danger">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MyProfile;
