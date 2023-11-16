import { SignIn } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
  return (
    <div className="flex justify-center items-center h-screen">
       <SignIn/>
    </div>
  );
};

export default Login;
