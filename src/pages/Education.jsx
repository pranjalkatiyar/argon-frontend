import React from "react";

const Education = ({
  educationDetails,
  addMoreEducation,
  setEducationDetails,
}) => {
  return (
    <div class="md:col-span-5">
      {educationDetails?.map((education, index) => (
        <div key={index} class="bg-white rounded p-4">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
            <div class="md:col-span-2">
              <label className="text-lg" for={`degree-${index}`}>
                Degree
              </label>
              <input
                type="text"
                name={`degree-${index}`}
                id={`degree-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.degree}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].degree = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            <div class="md:col-span-2">
              <label className="text-lg" for={`institute-${index}`}>
                institute
              </label>
              <input
                type="text"
                name={`institute-${index}`}
                id={`institute-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.institute}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].institute = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            <div class="md:col-span-1">
              <label className="text-lg" for={`location-${index}`}>
                Location
              </label>
              <input
                type="text"
                name={`location-${index}`}
                id={`location-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.location}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].location = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            <div class="md:col-span-1">
              <label className="text-lg" for={`fieldOfStudy-${index}`}>
                Major
              </label>
              <input
                type="text"
                name={`fieldOfStudy-${index}`}
                id={`fieldOfStudy-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.fieldOfStudy}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].fieldOfStudy = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            <div class="md:col-span-1">
              <label className="text-lg" for={`from-${index}`}>
                From
              </label>
              <input
                type="date"
                name={`from-${index}`}
                id={`from-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.from}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].from = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            <div class="md:col-span-1">
              <label className="text-lg" for={`to-${index}`}>
                To
              </label>
              <input
                type="date"
                name={`to-${index}`}
                id={`to-${index}`}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.to}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].to = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              />
            </div>
            {/* <div class="md:col-span-1">
            <label className='text-lg' for={`current-${index}`}>
              Current
            </label>
            <input
              type="checkbox"
              name={`current-${index}`}
              id={`current-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              checked={education.current}
              onChange={(e) => {
                const newEducationDetails = [
                  ...educationDetails,
                ];
                newEducationDetails[index].current =
                  e.target.checked;
                setEducationDetails(
                  newEducationDetails
                );
              }}
            />
          </div> */}
            <div class="md:col-span-2">
              <label className="text-lg">Description</label>
              <textarea
                name={`description-${index}`}
                id={`description-${index}`}
                class="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                value={education.description}
                onChange={(e) => {
                  const newEducationDetails = [...educationDetails];
                  newEducationDetails[index].description = e.target.value;
                  setEducationDetails(newEducationDetails);
                }}
              ></textarea>
            </div>
            <div class="md:col-span-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addMoreEducation}
      >
        Add More
      </button>
    </div>
  );
};

export default Education;
