import { SignIn } from "@clerk/clerk-react";
 
const Login = () => {
 
  return (
    <div className="flex justify-center items-center h-screen">
       <SignIn />
    </div>
  );
};

export default Login;
