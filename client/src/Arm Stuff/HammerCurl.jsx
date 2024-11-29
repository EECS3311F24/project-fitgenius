import React, { useState }  from "react";
import hammerCurlGif from "../assets/HAM_CURL.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const HammerCurl = () => {
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
  <strong>Step 1: Select Your Equipment</strong>
  <ul>
    <li>Choose the Right Dumbbells: Select a pair of dumbbells with a weight appropriate for your fitness level. Start light to focus on form before increasing the weight.</li>
    <li>Ensure a Stable Environment: Stand in a well-lit area with plenty of space to perform the exercise safely.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Position Your Body</strong>
  <ul>
    <li>Stand Upright: Stand with your feet shoulder-width apart, keeping your posture straight and shoulders relaxed.</li>
    <li>Grip the Dumbbells: Hold a dumbbell in each hand with your palms facing inward (neutral grip), so your thumbs are pointing up and your palms are facing your torso.</li>
    <li>Engage Your Core: Tighten your core muscles to maintain stability and prevent swaying during the movement.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Curl the Dumbbells</strong>
  <ul>
    <li>Bend Your Elbows: Slowly curl both dumbbells upward by bending your elbows, keeping your upper arms stationary. Exhale as you lift the weights.</li>
    <li>Keep a Neutral Grip: Ensure your palms stay facing inward throughout the movement, and avoid rotating your wrists.</li>
    <li>Contract Your Biceps and Forearms: At the top of the curl, squeeze your biceps and forearms, holding for a brief second before lowering the weights.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Lower the Dumbbells</strong>
  <ul>
    <li>Control the Descent: Slowly lower the dumbbells back down to the starting position, fully extending your arms. Inhale as you lower the weights.</li>
    <li>Maintain Control: Resist the urge to let the dumbbells drop quickly, ensuring a slow and controlled motion to maximize muscle engagement.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 8-12 repetitions per set, focusing on smooth, controlled movements without swinging your body.</li>
    <li>Rest Between Sets: Rest for 30-60 seconds between sets to allow muscles to recover before the next set.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Modify if Necessary</strong>
  <ul>
    <li>Use Lighter Weights: Start with lighter dumbbells if you're new to hammer curls or need to work on your form.</li>
    <li>Perform Seated Hammer Curls: If you find it difficult to maintain balance while standing, try doing hammer curls seated on a bench to minimize body movement.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Cool Down</strong>
  <ul>
    <li>Stretch Your Arms: After completing your set, stretch your biceps and forearms to improve flexibility and reduce tightness.</li>
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
        Hammer Curl
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
        <img src={hammerCurlGif} alt="Hammer Curl" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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

export default HammerCurl;
