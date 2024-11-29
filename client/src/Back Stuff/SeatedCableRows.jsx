import React, { useState } from "react";
import seatedCableRowsGif from "../assets/SEATED_CABLE_ROW.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const SeatedCableRows = () => {
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
            <strong>Step 1: Prepare the Machine</strong>
            <ul>
              <li>
                Adjust the Seat: Sit on the bench and adjust the seat height to
                ensure your torso remains upright during the exercise.
              </li>
              <li>
                Select the Resistance: Choose an appropriate resistance level
                based on your fitness level.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Get into Position</strong>
            <ul>
              <li>
                Grip the Handle: Use a close grip or wide grip handle, holding
                it with both hands.
              </li>
              <li>
                Sit Upright: Keep your back straight and chest up, engaging your
                core for stability.
              </li>
              <li>
                Feet on Footpads: Place your feet securely on the footpads with
                your knees slightly bent.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Perform the Row</strong>
            <ul>
              <li>
                Pull the Handle: Pull the handle toward your torso, squeezing
                your shoulder blades together at the end of the movement.
              </li>
              <li>
                Keep Elbows Close: Ensure your elbows stay close to your body as
                you row.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Return to Starting Position</strong>
            <ul>
              <li>
                Extend Your Arms: Slowly release the handle to return to the
                starting position, maintaining control of the movement.
              </li>
              <li>
                Maintain Posture: Avoid rounding your back as you extend your
                arms.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>
                Complete Reps: Perform the desired number of repetitions per
                set.
              </li>
              <li>
                Rest Between Sets: Take 30-60 seconds of rest between sets.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>
                Stretch Your Back and Arms: Focus on stretching your lats,
                shoulders, and arms.
              </li>
              <li>Hydrate: Drink water to aid recovery and stay hydrated.</li>
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
        Seated Cable Rows
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
          src={seatedCableRowsGif}
          alt="Seated Cable Rows"
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

export default SeatedCableRows;
