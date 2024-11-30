import React, { useState }  from "react";
import overheadTricepExtensionGif from "../assets/OVER_TRI_EXT.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const OverheadTricepExtension = () => {
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
    <li>Choose the Right Weight: Select a dumbbell or a cable machine with a weight appropriate for your fitness level. If using a dumbbell, start light to focus on form.</li>
    <li>Ensure Proper Space: Stand in an open area with enough space to move your arms overhead without obstruction.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Position Your Body</strong>
  <ul>
    <li>Stand Upright: Stand with your feet shoulder-width apart, with a slight bend in your knees to stabilize your body.</li>
    <li>Grip the Dumbbell: If using a dumbbell, hold it with both hands, placing your palms under the weight, and your thumbs wrapped around the handle. Your elbows should be pointing upward.</li>
    <li>Engage Your Core: Tighten your core to keep your torso stable throughout the exercise.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Lift the Dumbbell Overhead</strong>
  <ul>
    <li>Press the Dumbbell Up: Push the dumbbell overhead until your arms are fully extended, with your elbows close to your head.</li>
    <li>Maintain Elbow Position: Keep your elbows fixed in place, pointing toward the ceiling, and do not let them flare out to the sides.</li>
    <li>Align Your Body: Ensure that your back is straight, and avoid arching your lower back during the movement.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Lower the Dumbbell</strong>
  <ul>
    <li>Slowly Bend Your Elbows: Begin to lower the dumbbell back toward your upper back, allowing your elbows to bend, but not letting them flare out.</li>
    <li>Control the Descent: Lower the weight in a controlled manner, feeling a stretch in your triceps at the bottom of the movement.</li>
    <li>Breathe In: Inhale as you lower the dumbbell.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Extend the Arms Back Up</strong>
  <ul>
    <li>Push the Dumbbell Up: Extend your arms back to the starting position by straightening your elbows. Exhale as you press the dumbbell upward.</li>
    <li>Keep Elbows Close: Ensure your elbows stay stationary throughout the movement and don’t flare out to the sides.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 8-12 repetitions per set, focusing on slow, controlled movements to properly engage the triceps.</li>
    <li>Rest Between Sets: Allow 30-60 seconds of rest between sets to recover before repeating the exercise.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Modify if Necessary</strong>
  <ul>
    <li>Use Lighter Weight: Start with a lighter weight if you're new to overhead tricep extensions or if you struggle with the form.</li>
    <li>Try with a Cable Machine: If you have access to a cable machine, you can use a rope attachment for overhead tricep extensions, adjusting the weight to match your strength.</li>
  </ul>
</li>
<li>
  <strong>Step 8: Cool Down</strong>
  <ul>
    <li>Stretch Your Triceps: After completing your set, stretch your triceps by extending your arm overhead and gently pulling on your elbow with the opposite hand.</li>
    <li>Hydrate: Drink water to stay hydrated and support muscle recovery after your workout.</li>
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
        Overhead Tricep Extension
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
        <img src={overheadTricepExtensionGif} alt="Overhead Tricep Extension" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
        <FeedBack exercise="overhead-tricep-extension" />
      </div>
    </div>
  );
};


export default OverheadTricepExtension;
