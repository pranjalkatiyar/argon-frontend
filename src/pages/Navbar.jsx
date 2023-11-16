import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { FacebookProvider, ShareButton } from "react-facebook";
import { useState } from "react";
import { LoginButton } from "react-facebook";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"
import {useUser} from "@clerk/clerk-react"
import ReactFacebookLogin from "react-facebook-login";


const SignOutButton = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate()
 
  return (
    // Clicking on this button will sign out a user and reroute them to the "/" (home) page.
    <button onClick={() => signOut(() => navigate("/"))}>
      Sign out
    </button>
  );
};

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path
      ? "text-white font-bold"
      : "text-gray-200 font-bold hover:text-white";
  };

  const [facebooklogin, setfacebooklogin] = useState(false);
  const {isSignedIn,user} = useUser();

  function handleSuccess(response) {
    console.log(response);
    if (response.status === "connected") {
      setfacebooklogin(true);
    }
  }

  const responseFacebook = (response) => {
    if(response.id)
    {
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
          {isSignedIn && (
            <ReactFacebookLogin
            appId="1472217970017724"
            autoLoad={false}
            fields="name,email,picture"
            onClick={clickComponent => console.log("CLICKED")}
             callback={responseFacebook} 
            />
          )}
        </div>
       

          <Link
            to="/imageupload"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Post your fav image
          </Link>
   
      </div>
      <div>
      {isSignedIn && (
        <div className="flex items-center">
            <span className="mr-2 font-bold text-white">Welcome, {user.fullName}</span>
            <SignOutButton className="bg-white-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" />
        </div>
      )}

      </div>
    </nav>
  );
};

export default Navbar;
