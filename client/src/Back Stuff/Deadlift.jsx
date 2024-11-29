import React, { useState } from "react";
import deadLiftGif from "../assets/Dead_Lift.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const DeadLift = () => {
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
    if (level === "Beginner") {
      setModalContent(
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Step 1: Prepare Your Equipment</strong>
            <ul>
              <li>
                Choose the Right Weight: Start with a light barbell or dumbbells
                to learn the movement.
              </li>
              <li>
                Set Up the Barbell: Place the barbell on the floor and ensure
                it's evenly loaded on both sides.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Position Yourself</strong>
            <ul>
              <li>
                Stand with Feet Hip-Width Apart: Position your feet under the
                barbell, with your toes slightly pointing outward.
              </li>
              <li>
                Grip the Bar: Bend at your hips and knees to grab the bar with
                both hands, slightly wider than shoulder-width.
              </li>
              <li>
                Maintain a Neutral Spine: Keep your back straight and your chest
                lifted to avoid injury.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Lift the Barbell</strong>
            <ul>
              <li>
                Engage Your Core: Tighten your core muscles to stabilize your
                body.
              </li>
              <li>
                Stand Up: Push through your heels as you straighten your legs
                and hips, lifting the barbell off the ground.
              </li>
              <li>
                Finish Upright: Fully extend your hips and stand tall with the
                barbell in front of your thighs.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Lower the Barbell</strong>
            <ul>
              <li>
                Reverse the Motion: Hinge at your hips and bend your knees to
                lower the barbell back to the ground.
              </li>
              <li>
                Maintain Control: Lower the bar slowly to avoid dropping it and
                risking injury.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Complete the Exercise</strong>
            <ul>
              <li>
                Perform Repetitions: Repeat the movement for the desired number
                of reps.
              </li>
              <li>
                Rest Between Sets: Take a 30-60 second break between sets.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>
                Stretch: Focus on your hamstrings, lower back, and glutes to
                relieve tension.
              </li>
              <li>Hydrate: Drink water to support muscle recovery.</li>
            </ul>
          </li>
        </ul>
      );
      setIsModalOpen(true); // Open modal when instructions are set
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#b3cde0",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Dead Lift
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

      {/* Instructions Button */}
      {level === "Beginner" && (
        <button className="InstructionsButton" onClick={handleInstructionsClick}>
          Instructions
        </button>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <img
          src={deadLiftGif}
          alt="Dead Lift"
          style={{
            width: "30%",
            maxWidth: "500px",
            height: "auto",
            marginRight: "20px",
          }}
        />

        {/* Sets and Reps Info */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            border: "2px solid #034efc",
            borderRadius: "10px",
            textAlign: "center",
            margin: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "100px",
          }}
        >
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
        <InstructionsModal
          modalContent={modalContent}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Feedback Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack />
      </div>
    </div>
  );
};

export default DeadLift;
