import React from "react";

const InstructionsModal = ({ modalContent, onClose }) => {
  // Styles for the backdrop and modal
  const styles = {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
      zIndex: 1000, // Ensure it is above other content
    },
    modalContainer: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      width: "80%",
      maxWidth: "500px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      zIndex: 1001, // Above the backdrop
      overflowY: "auto",
      maxHeight: "80vh",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "#ff4d4d", // Red background for visibility
      border: "none",
      color: "#fff", // White text
      fontSize: "1.2rem",
      fontWeight: "bold",
      width: "30px",
      height: "30px",
      borderRadius: "50%", // Circular button
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
    modalContent: {
      maxHeight: "70vh",
      overflowY: "auto",
      padding: "10px",
    },
  };

  return (
    <>
      {/* Backdrop */}
      <div style={styles.backdrop} onClick={onClose}></div>

      {/* Modal */}
      <div style={styles.modalContainer}>
        {/* Close Button */}
        <button style={styles.closeButton} onClick={onClose}>
          ✖
        </button>

        {/* Modal Content */}
        <div style={styles.modalContent}>{modalContent}</div>
      </div>
    </>
  );
};

export default InstructionsModal;
