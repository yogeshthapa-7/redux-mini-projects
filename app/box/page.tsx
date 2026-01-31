"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseSize,
  decreaseSize,
  setSize,
  changeColor,
} from "../store/boxSlice";

export default function BoxPage() {
  const { size, color } = useSelector((state) => state.box);
  const dispatch = useDispatch();

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "#111",
    color: "#fff",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          width: "350px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          🎨 Stylish Redux Box
        </h2>

        {/* BOX */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            margin: "0 auto 20px",
            borderRadius: "12px",
            transition: "all 0.3s ease",
          }}
        />

        <p style={{ fontSize: "14px", marginBottom: "10px", color: "black" }}>
          Size: <strong>{size}px</strong>
        </p>

        {/* SIZE BUTTONS */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            style={buttonStyle}
            onClick={() => dispatch(increaseSize())}
          >
            ➕ Increase
          </button>

          <button
            style={buttonStyle}
            onClick={() => dispatch(decreaseSize())}
          >
            ➖ Decrease
          </button>
        </div>

        {/* SLIDER */}
        <input
          type="range"
          min="40"
          max="300"
          value={size}
          onChange={(e) =>
            dispatch(setSize(Number(e.target.value)))
          }
          style={{
            width: "100%",
            marginTop: "20px",
            cursor: "pointer",
          }}
        />

        {/* COLOR BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {[
            { color: "dodgerblue", label: "Blue" },
            { color: "tomato", label: "Red" },
            { color: "seagreen", label: "Green" },
          ].map((item) => (
            <button
              key={item.color}
              onClick={() => dispatch(changeColor(item.color))}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                backgroundColor: item.color,
                color: "#fff",
                fontSize: "13px",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
