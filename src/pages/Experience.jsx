import React from 'react'

const Experience = ({experienceDetails,setExperienceDetails,addMoreExperience}) => {

  const handleDeleteExperience = (index) => {
    const newExperienceDetails = [...experienceDetails];
    newExperienceDetails.splice(index, 1);
    setExperienceDetails(newExperienceDetails);
  };

  return (
    <div class="md:col-span-5">
    {experienceDetails?.map((experience, index) => (
      <div
        key={index}
        class="bg-white rounded p-4 px-4 "
      >
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2 ">
          <div class="md:col-span-2">
            <label className='text-lg' for={`title-${index}`}>Title</label>
            <input
              type="text"
              name={`title-${index}`}
              id={`title-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.title}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].title =
                  e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-2">
            <label className='text-lg' for={`company-${index}`}>
              Company
            </label>
            <input
              type="text"
              name={`company-${index}`}
              id={`company-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.company}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].company =
                  e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-1">
            <label className='text-lg' for={`location-${index}`}>
              Location
            </label>
            <input
              type="text"
              name={`location-${index}`}
              id={`location-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.location}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].location =
                  e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-1">
            <label className='text-lg' for={`from-${index}`}>From</label>
            <input
              type="date"
              name={`from-${index}`}
              id={`from-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.from}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].from =
                  e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-1">
            <label className='text-lg' for={`to-${index}`}>To</label>
            <input
              type="date"
              name={`to-${index}`}
              id={`to-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.to}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].to =
                  e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-1">
            <label className='text-lg' for={`current-${index}`}>
              Current
            </label>
            <input
              type="checkbox"
              name={`current-${index}`}
              id={`current-${index}`}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              checked={experience.current}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[index].current =
                  e.target.checked;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            />
          </div>
          <div class="md:col-span-2">
            <label className='text-lg' for={`description-${index}`}>
              Description
            </label>
            <textarea
              name={`description-${index}`}
              id={`description-${index}`}
              class="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
              value={experience.description}
              onChange={(e) => {
                const newExperienceDetails = [
                  ...experienceDetails,
                ];
                newExperienceDetails[
                  index
                ].description = e.target.value;
                setExperienceDetails(
                  newExperienceDetails
                );
              }}
            ></textarea>
          </div>
          <div class="md:col-span-2">
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                handleDeleteExperience(index)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={addMoreExperience}
    >
      Add More
    </button>
  </div>
  )
}

export default Experience