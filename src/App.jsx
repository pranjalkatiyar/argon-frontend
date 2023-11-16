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
import {
  FacebookProvider,
  LoginButton,
  EmbeddedPost,
  ShareButton,
} from "react-facebook";
import ImageUpload from "./pages/ImageUpload";
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
        <Route path="/" element={<PublicPage />} />
        <Route
          path="/preview"
          element={
            <>
              <SignedIn>
                <Preview allResumeData={allResumeData} />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
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
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
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
