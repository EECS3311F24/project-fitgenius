import React, { useState } from "react";
import benchPressGif from "../assets/Front_Squats.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const FrontSquat = () => {
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
  <strong>Step 1: Set Up the Barbell</strong>
  <ul>
    <li>Position the Barbell: Place the barbell on a squat rack at shoulder height. Ensure it's secure and evenly loaded with weights appropriate for your skill level.</li>
    <li>Choose Your Grip: Use either a clean grip (hands shoulder-width apart, elbows up) or a cross-arm grip (arms crossed, bar resting on the front of your shoulders).</li>
    <li>Adjust the Safety Pins: If using a squat rack, set the safety pins slightly below the lowest point of your squat for added safety.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Rack the Barbell on Your Shoulders</strong>
  <ul>
    <li>Step Under the Bar: Position yourself under the barbell so it rests across the front of your shoulders, just above your collarbone.</li>
    <li>Lift Your Elbows: Keep your elbows high and parallel to the floor to create a stable "shelf" with your shoulders for the bar to rest on.</li>
    <li>Unrack the Bar: Stand up straight to lift the barbell off the rack and take a step back to clear the rack.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Position Your Body</strong>
  <ul>
    <li>Set Your Feet: Place your feet shoulder-width apart with your toes slightly turned out.</li>
    <li>Engage Your Core: Tighten your core muscles to stabilize your spine throughout the movement.</li>
    <li>Keep Your Chest Up: Maintain an upright torso position with your chest lifted to prevent the bar from tipping forward.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Lower Your Body</strong>
  <ul>
    <li>Bend Your Knees: Slowly lower your body by bending at your knees and hips.</li>
    <li>Keep Your Heels on the Ground: Avoid letting your heels lift off the floor; distribute your weight evenly through your feet.</li>
    <li>Go Deep: Lower until your thighs are at least parallel to the floor or as far as your mobility allows, keeping your elbows high and chest up.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Push Back to Standing</strong>
  <ul>
    <li>Drive Through Your Heels: Press through your heels to return to a standing position, keeping your chest up and elbows high.</li>
    <li>Breathe Out: Exhale as you push upward to the starting position.</li>
    <li>Keep Control: Avoid locking out your knees at the top to maintain tension in your muscles.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 6-12 repetitions, focusing on proper form over heavy weight.</li>
    <li>Rest Between Sets: Rest for 60-90 seconds between sets, especially if lifting heavy weights.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Re-Rack the Barbell</strong>
  <ul>
    <li>Step Forward: After completing your set, step carefully toward the rack.</li>
    <li>Secure the Bar: Lower the barbell onto the rack hooks before releasing your grip.</li>
  </ul>
</li>
<li>
  <strong>Step 8: Cool Down</strong>
  <ul>
    <li>Stretch Your Legs and Hips: Focus on stretching your quads, hamstrings, glutes, and hip flexors.</li>
    <li>Hydrate: Drink water to stay hydrated and aid in recovery.</li>
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
        Front Squat
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
        <img src={benchPressGif} alt="Front Squat" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
        <FeedBack />
      </div>
    </div>
  );
};

export default FrontSquat;
