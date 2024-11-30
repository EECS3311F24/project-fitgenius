import React, { useState } from "react";
import benchPressGif from "../assets/Push-Up-Plus.gif"; // Adjust the path if needed
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal


const PushUps = () => {
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
            <strong>Step 1: Position Your Hands and Feet</strong>
            <ul>
              <li>Place Your Hands on the Ground: Position your hands slightly wider than shoulder-width apart, with your fingers pointing forward or slightly outward.</li>
              <li>Set Your Feet: Place your feet together or slightly apart, with your toes touching the floor and legs extended straight behind you.</li>
              <li>Align Your Body: Keep your body in a straight line from your head to your heels, avoiding sagging hips or raised buttocks.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Engage Your Core and Upper Body</strong>
            <ul>
              <li>Engage Your Core: Tighten your core muscles to maintain a straight body position throughout the movement.</li>
              <li>Set Your Shoulders: Pull your shoulder blades down and back, avoiding excessive rounding in your upper back.</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Lower Your Body</strong>
            <ul>
              <li>Slow and Controlled Descent: Lower your body by bending your elbows at a 45-degree angle, keeping them close to your torso.</li>
              <li>Chest Towards the Floor: Keep lowering your chest until it's just above the floor or your chest lightly touches the ground.</li>
              <li>Avoid Dropping Your Hips: Make sure your body stays in a straight line throughout the movement.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Push Yourself Back Up</strong>
            <ul>
              <li>Press Through Your Palms: Push the ground away from you by straightening your elbows and pressing your palms into the floor.</li>
              <li>Engage Your Chest and Triceps: Use your chest, shoulders, and triceps to lift your body back to the starting position.</li>
              <li>Breathe Out: Exhale as you push yourself back up to the top position.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>Perform Repetitions: Complete 10-20 repetitions, depending on your fitness level.</li>
              <li>Rest Between Sets: Rest for 30-60 seconds between sets to recover before doing another round.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Modify if Necessary</strong>
            <ul>
              <li>Knee Push-Ups: If a standard push-up is too challenging, perform knee push-ups by lowering your knees to the floor for support while keeping your body in a straight line from your knees to your head.</li>
              <li>Incline Push-Ups: To make push-ups easier, you can place your hands on an elevated surface like a bench to reduce the intensity.</li>
            </ul>
          </li>
          <li>
            <strong>Step 7: Cool Down</strong>
            <ul>
              <li>Stretch Your Chest and Shoulders: After completing your push-ups, stretch your chest, shoulders, and triceps to avoid muscle tightness and improve flexibility.</li>
              <li>Hydrate: Drink water to stay hydrated and support muscle recovery.</li>
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
        Pushups
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
        <img src={benchPressGif} alt="Pushups" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
        <FeedBack exercise="pushups" />
      </div>
    </div>
  );
};


export default PushUps;
