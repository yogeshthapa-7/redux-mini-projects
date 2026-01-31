"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    backgroundColor: "#111",
    color: "#fff",
    transition: "transform 0.1s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "18px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "black", fontWeight: "600" }}>🔢 Redux Counter</h2>

        <p
          style={{
            fontSize: "48px",
            fontWeight: "700",
            margin: "20px 0",
            color: "black",
          }}
        >
          {count}
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            style={buttonStyle}
            onClick={() => dispatch(increment())}
          >
            ➕ Increment
          </button>

          <button
            style={buttonStyle}
            onClick={() => dispatch(decrement())}
          >
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
