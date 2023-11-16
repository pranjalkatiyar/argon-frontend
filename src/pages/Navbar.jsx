import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { FacebookProvider, ShareButton } from "react-facebook";
import { useState } from "react";
import { LoginButton } from "react-facebook";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path
      ? "text-white font-bold"
      : "text-gray-200 font-bold hover:text-white";
  };

  const [facebooklogin, setfacebooklogin] = useState(false);

  function handleSuccess(response) {
    console.log(response);
    if (response.status === "connected") {
      setfacebooklogin(true);
    }
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <nav className="flex items-center justify-between  text-white flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Agro Query Assessment
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/preview"
            className={`block mt-4 lg:inline-block lg:mt-0 ${isActive(
              "/preview"
            )} mr-4`}
          >
            Preview
          </Link>
          <Link
            to="/edit"
            className={`block mt-4 lg:inline-block lg:mt-0 ${isActive(
              "/edit"
            )} mr-4`}
          >
            Edit
          </Link>
          <FacebookProvider appId="1472217970017724">
            <LoginButton
              scope="email"
              onError={handleError}
              onSuccess={handleSuccess}
              color="blue"
            >
              Share on Facebook
            </LoginButton>
          </FacebookProvider>
        </div>
        {facebooklogin && (
          <Link
            to="/imageupload"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Post your fav image
          </Link>
        )}
      </div>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
