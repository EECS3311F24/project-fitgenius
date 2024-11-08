import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const legOptions = [
    { value: "leg_press", label: "Leg Press" },
    { value: "bulgarian_split_squat", label: "Bulgarian Split Squat" },
    { value: "front_squat", label: "Front Squat" },
    { value: "leg_extension", label: "Leg Extension" },
];
const armOptions = [
    { value: "hammer_curl", label: "Hammer Curl" },
    { value: "bicep_Curl", label: "Bicep Curl" },
    { value: "tricep_dips", label: "Tricep Dips" },
    { value: "overhead_tricep_extension", label: "Overhead Tricep Extension" },
];
const chestOptions =[
    {value:"bench_press", label: "Bench Press"},
    {value: "cable_crossover", label:"Cable Crossover"},
    {value:"parallel_bar_dip", label:"Parallel Bar Dip"},
    {value:"push_ups", label:"Push Ups"},
    {value:"plank_rotations", label:"Plank Rotations"},
]
const backOptions =[
    {value:"row", label:"Row"},
    {value:"deadlift", label:"Deadlift"},
    {value:"seated_cable_rows", label:"Seated Cable Rows"},
    {value:"dumbell_row", label:"Dumbell Row"},
    {value:"arm_leg_raise", label:"Arm Leg Raise"},
]


function PlanPage(){
    const [selectedLegOptions, setSelectedLegOptions] = useState([]);
    const [selectedArmOptions, setSelectedArmOptions] = useState([]);
    const [selectedChestOptions, setSelectedChestOptions] = useState([]);
    const [selectedBackOptions, setSelectedBackOptions] = useState([]);

    const navigate = useNavigate();

    const handleLegChange = (options) => setSelectedLegOptions(options);
    const handleArmChange = (options) => setSelectedArmOptions(options);
    const handleChestChange = (options) => setSelectedChestOptions(options);
    const handleBackChange = (options) => setSelectedBackOptions(options);


    return(
        <div className="PlanPage">
            <h1 className="PlanPageTitle">Plan Page</h1>
            <h1 className="ChooseExercise">Choose Exercises</h1>
            <h2>Leg Exercises</h2>
            <Select className="SelectLeg"
                options={legOptions}
                value={selectedLegOptions}
                onChange={handleLegChange}
                isMulti={true}
            />
            <h2>Arm Exercises</h2>
            <Select className="SelectArm"
                options={armOptions}
                value={selectedArmOptions}
                onChange={handleArmChange}
                isMulti={true}
            />
            <h2>Chest Exercises</h2>
            <Select className="SelectChest"
                options={chestOptions}
                value={selectedChestOptions}
                onChange={handleChestChange}
                isMulti={true}
            />
            <h2>Back Exercises</h2>
            <Select className="SelectBack"
                options={backOptions}
                value={selectedBackOptions}
                onChange={handleBackChange}
                isMulti={true}
            />
            <div className="Selected-exercises-container">
                <h2>Selected Exercises:</h2>
                {selectedLegOptions.length > 0 && (
                    <ul className="SelectedLegList-List">
                        {selectedLegOptions.map((option) => (
                            <li className="SelectedLegList"key={option.value} onClick={() => handleExerciseClick(option.value)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedArmOptions.length > 0 && (
                    <ul className="SelectedArmList-List">
                        {selectedArmOptions.map((option) => (
                            <li className="SelectedArmList" key={option.value} onClick={() => handleExerciseClick(option.value)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedChestOptions.length > 0 && (
                    <ul className="SelectedChestList-List">
                        {selectedChestOptions.map((option) => (
                            <li className="SelectedChestList" key={option.value} onClick={() => handleExerciseClick(option.value)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedBackOptions.length > 0 && (
                    <ul className="SelectedBackList-List">
                        {selectedBackOptions.map((option) => (
                            <li className="SelectedBackList" key={option.value} onClick={() => handleExerciseClick(option.value)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedLegOptions.length === 0 && selectedArmOptions.length === 0 && selectedChestOptions.length === 0 && selectedBackOptions.length === 0 && (
                    <p>No exercises selected.</p>
                )}
            </div>
        </div>
        // <h1>Plan Page</h1>
    );
}
export default PlanPage;
