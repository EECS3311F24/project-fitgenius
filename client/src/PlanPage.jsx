import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

// Define exercise options for legs, arms, chest, and back
const legOptions = [
  { value: "leg_press", label: "Leg Press" },
  { value: "bulgarian_split_squat", label: "Bulgarian Split Squat" },
  { value: "front_squat", label: "Front Squat" },
  { value: "leg_extension", label: "Leg Extension" },
];
const armOptions = [
  { value: "hammer_curl", label: "Hammer Curl" },
  { value: "bicep_curl", label: "Bicep Curl" },
  { value: "tricep_dips", label: "Tricep Dips" },
  { value: "overhead_tricep_extension", label: "Overhead Tricep Extension" },
];
const chestOptions = [
  { value: "bench_press", label: "Bench Press" },
  { value: "cable_crossover", label: "Cable Crossover" },
  { value: "parallel_bar_dip", label: "Parallel Bar Dip" },
  { value: "push_ups", label: "Push Ups" },
  { value: "plank_rotations", label: "Plank Rotations" },
];
const backOptions = [
  { value: "row", label: "Row" },
  { value: "deadlift", label: "Deadlift" },
  { value: "seated_cable_rows", label: "Seated Cable Rows" },
  { value: "dumbell_row", label: "Dumbbell Row" },
  { value: "arm_leg_raise", label: "Arm Leg Raise" },
];

// Main functional component for the PlanPage
function PlanPage() {
  // Define state variables to track selected exercises and intensity
  const [selectedLegOptions, setSelectedLegOptions] = useState([]);
  const [selectedArmOptions, setSelectedArmOptions] = useState([]);
  const [selectedChestOptions, setSelectedChestOptions] = useState([]);
  const [selectedBackOptions, setSelectedBackOptions] = useState([]);
  const [intensity, setIntensity] = useState(""); // State to track selected intensity

  const navigate = useNavigate();

  // Load the saved intensity level from localStorage when the component mounts
  useEffect(() => {
    const savedIntensity = localStorage.getItem("intensity");
    if (savedIntensity) {
      setIntensity(savedIntensity);
    }
  }, []);

  // Update both state and localStorage when intensity level changes
  const handleIntensityChange = (level) => {
    setIntensity(level);
    localStorage.setItem("intensity", level);
  };

  const handleLegChange = (options) => setSelectedLegOptions(options);
  const handleArmChange = (options) => setSelectedArmOptions(options);
  const handleChestChange = (options) => setSelectedChestOptions(options);
  const handleBackChange = (options) => setSelectedBackOptions(options);

  // Handle clicks on selected exercises to navigate to the corresponding exercise page
  const handleExerciseClick = (value) => {
    switch (value) {
      case "leg_press":
        navigate("/leg-press");
        break;
      case "bulgarian_split_squat":
        navigate("/bulgarian-split-squat");
        break;
      case "front_squat":
        navigate("/front-squat");
        break;
      case "leg_extension":
        navigate("/leg-extensions");
        break;
      case "hammer_curl":
        navigate("/hammer-curl");
        break;
      case "bicep_curl":
        navigate("/bicep-curl");
        break;
      case "tricep_dips":
        navigate("/tricep-dips");
        break;
      case "overhead_tricep_extension":
        navigate("/overhead-tricep-extension");
        break;
      case "bench_press":
        navigate("/bench-press");
        break;
      case "cable_crossover":
        navigate("/cable-crossover");
        break;
      case "parallel_bar_dip":
        navigate("/parallel-bar-dip");
        break;
      case "push_ups":
        navigate("/push-ups");
        break;
      case "plank_rotations":
        navigate("/plank-rotations");
        break;
      case "row":
        navigate("/row");
        break;
      case "deadlift":
        navigate("/deadlift");
        break;
      case "seated_cable_rows":
        navigate("/seated-cable-rows");
        break;
      case "dumbell_row":
        navigate("/dumbell-row");
        break;
      case "arm_leg_raise":
        navigate("/arm-leg-raise");
        break;
      default:
        break;
    }
  };

    async function savePlan(e) {
        e.preventDefault();

        const person = {
            leg: selectedLegOptions[0].label,
            arm: selectedArmOptions[0].label,
            chest: selectedChestOptions[0].label,
            back: selectedBackOptions[0].label,
        };

        try {
            response = await fetch("http://localhost:5050/record/plans", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(person),
            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        } catch (error) {
        console.error('A problem occurred with your fetch operation: ', error);
        }
    }

  return (
    <div className="PlanPage">
      <h1 className="PlanPageTitle">Plan Page</h1>
      <h2 className="ChooseExercise">Choose Exercises & Intensity Level</h2>

      {/* Intensity Section */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontFamily: "Poppins", fontSize: "1.5em", marginBottom: "10px" }}>
          Intensity Level
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <label>
            <input
              type="radio"
              name="intensity"
              value="Low"
              checked={intensity === "Low"}
              onChange={() => handleIntensityChange("Low")}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="intensity"
              value="Med"
              checked={intensity === "Med"}
              onChange={() => handleIntensityChange("Med")}
            />
            Med
          </label>
          <label>
            <input
              type="radio"
              name="intensity"
              value="High"
              checked={intensity === "High"}
              onChange={() => handleIntensityChange("High")}
            />
            High
          </label>
        </div>
      </div>
      {/* Sections for selecting exercises for each body part */}
      <h2>Leg Exercises</h2>
      <Select
        className="SelectLeg"
        options={legOptions}
        value={selectedLegOptions}
        onChange={handleLegChange}
        isMulti={true}
      />
      <h2>Arm Exercises</h2>
      <Select
        className="SelectArm"
        options={armOptions}
        value={selectedArmOptions}
        onChange={handleArmChange}
        isMulti={true}
      />
      <h2>Chest Exercises</h2>
      <Select
        className="SelectChest"
        options={chestOptions}
        value={selectedChestOptions}
        onChange={handleChestChange}
        isMulti={true}
      />
      <h2>Back Exercises</h2>
      <Select
        className="SelectBack"
        options={backOptions}
        value={selectedBackOptions}
        onChange={handleBackChange}
        isMulti={true}
      />
    {/* Display selected exercises with navigation functionality */}
      <div className="Selected-exercises-container">
        <h2>Selected Exercises:</h2>
        {selectedLegOptions.length > 0 && (
          <ul className="SelectedLegList-List">
            {selectedLegOptions.map((option) => (
              <li
                className="SelectedLegList"
                key={option.value}
                onClick={() => handleExerciseClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {selectedArmOptions.length > 0 && (
          <ul className="SelectedArmList-List">
            {selectedArmOptions.map((option) => (
              <li
                className="SelectedArmList"
                key={option.value}
                onClick={() => handleExerciseClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {selectedChestOptions.length > 0 && (
          <ul className="SelectedChestList-List">
            {selectedChestOptions.map((option) => (
              <li
                className="SelectedChestList"
                key={option.value}
                onClick={() => handleExerciseClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {selectedBackOptions.length > 0 && (
          <ul className="SelectedBackList-List">
            {selectedBackOptions.map((option) => (
              <li
                className="SelectedBackList"
                key={option.value}
                onClick={() => handleExerciseClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {/* Show a message if no exercises are selected */}
        {selectedLegOptions.length === 0 &&
          selectedArmOptions.length === 0 &&
          selectedChestOptions.length === 0 &&
          selectedBackOptions.length === 0 && <p>No exercises selected.</p>}
      </div>
      <button className="exercise-button" onClick={savePlan}>Save Plan</button>
    </div>
  );
}

export default PlanPage;
