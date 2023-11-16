import { SignIn } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
       <SignIn/>
    </div>
  );
};

export default Login;
