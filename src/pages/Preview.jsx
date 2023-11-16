import React from "react";

const Preview = ({allResumeData}) => {
  console.log("ALL RESUME DATA",allResumeData);
  
  const [personalDetails,educationalDetails,experienceDetails,skills]=allResumeData;
console.log(experienceDetails)
  return (
    <div>
      <div class="bg-gray-100 font-sans">
        <div class="container mx-auto py-8 px-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-semibold">{personalDetails?.fullName}</h1>
            <p class="text-gray-600">Web Developer</p>

            <h2 class="text-xl font-semibold mb-2">Summary</h2>
            <p class="text-gray-700">
             {personalDetails?.description}
            </p>

            <h2 class="text-xl font-semibold mt-4 mb-2">Skills</h2>
            <ul class="list-disc list-inside text-gray-700">
            {skills?.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
            </ul>

            <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
           {experienceDetails?.map((experience,index)=>{
              return(
                <div class="mb-4 px-5">
                <h3 class="text-lg font-bold">{experience?.title || "Job title"}</h3>
                <div className="flex justify-between">
                <p class="text-gray-700 font-semibold">{experience?.company}</p>
                <p class="text-gray-600">{experience?.from} - {experience?.to}</p>
                </div>
                <p class="mt-2 text-gray-900">{experience?.description}</p>
              </div>
              )
           })}

            

            <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
            {educationalDetails?.map((education,index)=>{
              return(<div class="mb-4 px-5">
                <h3 class="text-lg font-bold">{education?.institute}</h3>
                <div className="flex justify-between">
                 <p class="text-gray-700 font-semibold">{education?.degree}</p>
                 <p class="text-gray-600">{education?.from} - {education?.to}</p>
                </div>
                <p class="text-gray-700 font-semibold">{education?.fieldOfStudy}</p>
                 <p class="mt-2 text-gray-900">{education?.description}</p>
              </div>)
            }
            )}

             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
