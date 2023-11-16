import React, { useEffect, useState } from "react";

const Skills = ({fetched_skills,setSkills}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
   
    const skillsSet = new Set([
        "JavaScript",
        "Python",
        "Java",
            "C#",
            "C++",
            "HTML/CSS",
            "Node.js",
            "React",
            "Angular",
            "Vue.js",
            "Ruby",
            "PHP",
            "Swift",
            "Kotlin",
            "Objective-C",
            "Dart",
            "Go",
            "Rust",
            "TypeScript",
            "SQL",
            "NoSQL",
            "MongoDB",
            "Express.js",
            "Spring Boot",
            "Django",
            "Flask",
            "ASP.NET",
            "Ruby on Rails",
            "Laravel",
            "WordPress",
            "TensorFlow",
            "PyTorch",
            "Kubernetes",
            "Docker",
            "Git",
            "Jenkins",
            "AWS",
            "Azure",
            "Google Cloud",
            "React Native",
            "Flutter",
            "GraphQL",
            "RESTful API",
            "JSON",
            "XML",
            "Redux",
            "VueX",
            "GraphQL",
            "RxJS",
            "Webpack",
        ]);

        const skills = Array.from(skillsSet);

        const handleSkillSelect = (e) => {
            const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
            const newSelectedSkills = selectedOptions.filter((option) => !selectedSkills.includes(option));
            setSelectedSkills([...selectedSkills, ...newSelectedSkills]);
        };

        const handleSkillDeselect = (skill) => {
            setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
        };

        useEffect(() => {
            setSkills(selectedSkills);
        }, [selectedSkills]);

        return (
            <div className="min-h-min">
                <div className="max-w-7xl mx-auto  ">
                    <p className="font-medium text-4xl" >Skills</p>
                    <p className="mt-2 text-base text-gray-500">
                        Please select one or more skills:
                    </p>
                    <select
                        className="mt-4 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none overflow-y-scroll scrollbar-thin"
                        onChange={handleSkillSelect}
                        value={selectedSkills}
                        multiple
                    >
                        {skills.map((skill) => (
                            <option key={skill} value={skill} className="py-2">
                                {skill}
                            </option>
                        ))}
                    </select>
                    {selectedSkills.length > 0 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                You have selected {selectedSkills.join(", ")}.
                            </p>
                            <div className="mt-2 flex flex-wrap">
                                {selectedSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-indigo-100 rounded-md px-2 py-1 m-1 flex items-center"
                                    >
                                        <span className="text-indigo-800">{skill}</span>
                                        <button
                                            className="ml-2 text-red-600 hover:text-red-800"
                                            onClick={() => handleSkillDeselect(skill)}
                                        >
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
 };

export default Skills;
