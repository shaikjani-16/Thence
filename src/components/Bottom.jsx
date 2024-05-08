import React from "react";
import carat from "../assets/carat.svg";
const Bottom = () => {
  return (
    <div
      className="flex relative"
      style={{
        width: "1380px",
        height: "144px",
        justifyContent: "space-between",
        borderRadius: "40px",
        padding: "60px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <div
        className="flex relative"
        style={{ width: "1281px", height: "24px", gap: "77px" }}
      >
        <div className="flex" style={{ gap: "32px" }}>
          <div className="flex" style={{ gap: "668px" }}>
            <div
              className="flex"
              style={{ width: "287px", height: "24px", gap: "10px" }}
            >
              <div className="flex" style={{ width: "24px", height: "24px" }}>
                <img src={carat} />
              </div>
              <p
                className="font-abc font-medium"
                style={{ width: "253px", height: "20px", fontSize: "18px" }}
              >
                Talup 2023. All rights reserved
              </p>
            </div>
            <div
              style={{
                width: "326",
                height: "20px",
                gap: "52px",
                right: "50px",
              }}
              className="flex relative"
            >
              <p
                style={{ width: "162px", height: "20px", fontSize: "18px" }}
                className="font-abc font-normal"
              >
                Terms & Conditions
              </p>
              <p
                style={{ width: "112px", height: "20px", fontSize: "18px" }}
                className="font-abc font-normal"
              >
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
