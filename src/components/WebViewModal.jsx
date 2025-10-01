import React, { useState } from "react";

const WebviewModal = ({ show, url, onClose }) => {
  const [loading, setLoading] = useState(true);
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "90vw",
          maxWidth: 640,
          height: "75vh",
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 16px rgba(0,0,0,0.23)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 16,
            fontSize: 22,
            border: "none",
            background: "#000000",
            color: "#fff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          &times;
        </button>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.7)",
              zIndex: 5,
            }}
          >
            <div
              style={{
                border: "6px solid #f3f3f3",
                borderTop: "6px solid #0077ff",
                borderRadius: "50%",
                width: 44,
                height: 44,
                animation: "spin 1s linear infinite",
              }}
            />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
        <iframe
          src={url}
          style={{
            flex: 1,
            border: "none",
            borderRadius: 8,
            zIndex: 2,
            background: "#fff",
          }}
          title="WebView"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default WebviewModal;
