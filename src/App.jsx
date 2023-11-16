import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Preview from "./pages/Preview";
 import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import {
  FacebookProvider,
  LoginButton,
  EmbeddedPost,
  ShareButton,
} from "react-facebook";
import ImageUpload from "./pages/ImageUpload";
import Login from "./pages/Login";
function PublicPage() {
  function handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <>
      <h1>PUBLIC PAGE</h1>
    </>
  );
}

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const [allResumeData, setResumeData] = useState([]);
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/preview"
          element={
            <>
              <SignedIn>
                <Preview allResumeData={allResumeData} />
              </SignedIn>
              <SignedOut>
                <Home/>
              </SignedOut>
            </>
          }
        />
        <Route
          path="/imageupload"
          element={
            <>
              <SignedIn>
                <ImageUpload />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/login/*"
          element={<Login/>}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/edit"
          element={
            <>
              <SignedIn>
                <Resume setResumeData={setResumeData} />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return <ClerkProviderWithRoutes />;
}

export default App;
