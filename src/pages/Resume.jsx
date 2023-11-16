import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const Resume = ({ setResumeData }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [allData, setAllData] = useState([]);
  const [skills, setSkills] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({
    id: user?.id,
    fullName: user?.firstName + " " + user?.lastName,
    phoneNumber: user?.phoneNumbers[0]?.phoneNumber,
    username: user?.username,
    email: user?.emailAddresses[0]?.emailAddress,
    description: "",
  });

  const [educationDetails, setEducationDetails] = useState([
    {
      institute: "",
      degree: "",
      fieldOfStudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
    },
  ]);
  const [experienceDetails, setExperienceDetails] = useState([
    {
      title: "",
      company: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
    },
  ]);

  useEffect(() => {
    async function userDetailsSave() {
      console.log("backend saving data");
      const data = await axios.post(`https://argon-backend.onrender.com/local/signup`, {
        first_name: user?.firstName,
        last_name: user?.lastName,
        email: user?.emailAddresses[0]?.emailAddress,
        username: user?.username,
        phone_number: user?.phoneNumbers[0]?.phoneNumber,
        id: user.id,
        image: user?.imageUrl,
        provider: user?.provider,
      });
      console.log(data);
    }

    userDetailsSave();
  }, []);

  useEffect(() => {
    async function getResumeProfile() {
      let profile = await axios.get(
        `https://argon-backend.onrender.com/user/profile/${user.id}`
      );
      profile = profile.data.profile;
      console.log(profile);
      setEducationDetails(() => {
        let newEducationDetails = profile?.education
          ? profile.education.map((education) => {
              return {
                institute: education.institute,
                degree: education.degree,
                fieldOfStudy: education.fieldOfStudy,
                from: new Date(education.from).toISOString().substring(0, 10),
                to: new Date(education.to).toISOString().substring(0, 10),
                current: education.current,
                description: education.description,
              };
            })
          : [];
        return newEducationDetails;
      });
      setExperienceDetails(() => {
        let newExperienceDetails = profile?.workExperience
          ? profile.workExperience.map((experience) => {
              return {
                title: experience.title,
                company: experience.company,
                location: experience.location,
                from: new Date(experience.from).toISOString().substring(0, 10),
                to: new Date(experience.to).toISOString().substring(0, 10),
                current: experience.current,
                description: experience.description,
              };
            })
          : [];
        return newExperienceDetails;
      });

      console.log(educationDetails, experienceDetails);
    }
    getResumeProfile();

    return () => {
      setEducationDetails([
        {
          institute: "",
          degree: "",
          fieldOfStudy: "",
          from: "",
          to: "",
          current: false,
          description: "",
        },
      ]);
      setExperienceDetails([
        {
          title: "",
          company: "",
          location: "",
          from: "",
          to: "",
          current: false,
          description: "",
        },
      ]);
    };
  }, []);

  const addMoreExperience = () => {
    setExperienceDetails([
      ...experienceDetails,
      {
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: "",
      },
    ]);
  };

  const addMoreEducation = () => {
    setEducationDetails([
      ...educationDetails,
      {
        institute: "",
        degree: "",
        fieldOfStudy: "",
        from: "",
        to: "",
        current: false,
        description: "",
      },
    ]);
  };

  const handleSave = async () => {
    try {
      console.log(skills);
      const data = await axios.post(`https://argon-backend.onrender.com/user/update`, {
        personalDetails,
        educationDetails,
        experienceDetails,
        skills,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlelogout = async () => {
    try {
      const logout = await axios.get(`https://argon-backend.onrender.com/auth/logout`);
      if (logout.data.success) {
        if (cookie.get("authorizationToken")) {
          cookie.remove("authorizationToken");
        }
      }
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteEducation = (index) => {
    const newEducationDetails = [...educationDetails];
    newEducationDetails.splice(index, 1);
    setEducationDetails(newEducationDetails);
  };

  const handleDeleteExperience = (index) => {
    const newExperienceDetails = [...experienceDetails];
    newExperienceDetails.splice(index, 1);
    setExperienceDetails(newExperienceDetails);
  };

  useEffect(() => {
    setResumeData([
      personalDetails,
      educationDetails,
      experienceDetails,
      skills,
    ]);
  }, [personalDetails, educationDetails, experienceDetails, skills]);

  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center capitalize">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded  p-4 px-4 md:p-8 mb-6">
            {/* personal details */}
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-4xl">Personal Details</p>
                </div>
              </div>
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label className="text-lg capitalize" for="full_name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={personalDetails.fullName}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label className="text-lg capitalize" for="phone_number">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={personalDetails.phoneNumber}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label className="text-lg capitalize" for="username">
                      username
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={personalDetails.username}
                      placeholder="username"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label className="text-lg capitalize" for="email">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={personalDetails.email}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label className="text-lg capitalize" for="description">
                      description
                    </label>
                    <textarea
                      type="textarea"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={personalDetails.description}
                      placeholder="Description"
                      onChange={(e) =>
                        setPersonalDetails({
                          ...personalDetails,
                          description: e.target.value,
                        })}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* personal details ended */}

            <div class="min-h-screen flex flex-col justify-center ">
              <div>
                <div class="relative  bg-white  sm:rounded-3xl ">
                  <div class="mx-auto">
                    <div class="divide-y divide-gray-200">
                      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div>
                          <Skills
                            fetched_skills={skills}
                            setSkills={setSkills}
                          />
                        </div>
                        {/* education details started */}
                        <div class="md:grid md:grid-cols-6 md:gap-6">
                          <div class="md:col-span-3">
                            <p class="font-medium text-4xl">
                              Education Details
                            </p>
                          </div>
                        </div>
                        {/* education details ended */}
                        <Education
                          educationDetails={educationDetails}
                          setEducationDetails={setEducationDetails}
                          addMoreEducation={addMoreEducation}
                        />
                        {/* experience details started */}
                        <div class="md:grid md:grid-cols-6 md:gap-6 mt-8">
                          <div class="md:col-span-3 ">
                            <p class="font-medium text-4xl">
                              Experience Details
                            </p>
                          </div>
                        </div>
                        <Experience
                          experienceDetails={experienceDetails}
                          setExperienceDetails={setExperienceDetails}
                          addMoreExperience={addMoreExperience}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
