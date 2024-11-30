import React, { useState } from "react";
import tricepDipsGif from "../assets/TRICEP_DIPS.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const TricepDips = () => {
  const [level, setLevel] = useState("Beginner");
  const [modalContent, setModalContent] = useState(""); // Modal content state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  const exerciseData = {
    Beginner: { sets: 3, reps: 10 },
    Intermediate: { sets: 4, reps: 12 },
    Expert: { sets: 5, reps: 15 },
  };

  const { sets, reps } = exerciseData[level];

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setModalContent(""); // Clear modal content when level changes
    setIsModalOpen(false); // Close the modal when changing the level
  };

  const handleInstructionsClick = () => {
    // Set modal content only for Beginner level
    if (level === "Beginner") {
      setModalContent(
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Step 1: Set Up the Equipment</strong>
            <ul>
              <li>Choose the Right Surface or Dip Station: Find a sturdy surface, such as a bench, chair, or dip station, that is secure and appropriate for the exercise.</li>
              <li>Adjust for Comfort: Ensure the surface is at a height where your feet won’t touch the ground when you're in the starting position, and your arms will be fully extended when holding the surface.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Position Your Body</strong>
            <ul>
              <li>Place Your Hands on the Surface: Sit on the edge of the surface and place your hands on either side of your hips, with your palms facing down and fingers wrapped around the edge.</li>
              <li>Lift Your Body: Push off from the surface with your hands and extend your legs straight out in front of you. Keep your arms straight, but don't lock your elbows. Your feet should be off the floor.</li>
              <li>Engage Your Core: Tighten your core to stabilize your body and prevent swinging during the exercise.</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Lower Your Body</strong>
            <ul>
              <li>Bend Your Elbows: Slowly lower your body by bending your elbows, keeping them close to your body.</li>
              <li>Maintain Proper Form: Keep your chest up and avoid leaning too far forward or rounding your back during the descent.</li>
              <li>Lower Until Elbows Are at 90 Degrees: Continue lowering until your elbows reach a 90-degree angle or you feel a stretch in your triceps. Keep your shoulders relaxed.</li>
              <li>Breathe In: Inhale as you lower your body down.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Press Back Up</strong>
            <ul>
              <li>Push Through Your Palms: Press down through your palms to straighten your arms and raise your body back up to the starting position.</li>
              <li>Keep Elbows Close: Avoid flaring your elbows out to the sides; they should stay close to your body to better target the triceps.</li>
              <li>Exhale: Exhale as you push yourself upward.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>Perform Repetitions: Complete 8-12 repetitions per set, focusing on smooth, controlled movements.</li>
              <li>Rest Between Sets: Allow for 30-60 seconds of rest between sets to recover.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Modify if Necessary</strong>
            <ul>
              <li>Use Assistance: If you're unable to complete the movement, use a dip assistance machine or place your feet on the floor or a bench to reduce the load on your arms.</li>
              <li>Try Bench Dips: If using a dip station is uncomfortable or unavailable, modify the exercise by using a sturdy bench or chair for added support.</li>
            </ul>
          </li>
          <li>
            <strong>Step 7: Cool Down</strong>
            <ul>
              <li>Stretch Your Triceps: After completing your set, gently stretch your triceps by extending your arm overhead and pulling on your elbow with the opposite hand.</li>
              <li>Hydrate: Drink water to stay hydrated and help your muscles recover after your workout.</li>
            </ul>
          </li>

        </ul>
      );
      setIsModalOpen(true); // Open modal when instructions are set
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#b3cde0", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center", width: "100%", marginBottom: "20px" }}>
        Tricep Dips
      </h1>

      {/* Level Selection Buttons */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {["Beginner", "Intermediate", "Expert"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => handleLevelChange(lvl)}
            style={{
              padding: "10px 20px",
              width: "150px",
              height: "60px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              backgroundColor: level === lvl ? "#034efc" : "#f5f5f5",
              color: level === lvl ? "#ffffff" : "#333333",
              border: "2px solid #034efc",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Instructions Button appears only for Beginner */}
      {level === "Beginner" && (
        <button
          className="InstructionsButton"
          onClick={handleInstructionsClick}

        >
          Instructions
        </button>
      )}

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px" }}>
        <img src={tricepDipsGif} alt="Tricep Dips" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

        {/* Sets and Reps Info */}
        <div style={{ padding: "20px", backgroundColor: "#ffffff", border: "2px solid #034efc", borderRadius: "10px", textAlign: "center", margin: "0 20px", display: "flex", alignItems: "center", justifyContent: "center", width: "200px", height: "100px" }}>
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
            {sets} Sets of {reps} Reps
          </h2>
        </div>

        {/* Timer Widget */}
        <div style={{ marginLeft: "20px" }}>
          <TimerWidget />
        </div>
      </div>

      {/* Instructions Modal */}
      {isModalOpen && (
        <InstructionsModal modalContent={modalContent} onClose={() => setIsModalOpen(false)} />
      )}

      {/* Feedback Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack exercise="tricep-dips" />
      </div>
    </div>
  );
};


export default TricepDips;
