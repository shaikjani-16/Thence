import React from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
const Footer = () => {
  return (
    <div
      className="flex bg-white relative"
      style={{
        width: "1380px",
        height: "813px",
        marginTop: "300px",
      }}
    >
      <div
        className="flex div2 relative"
        style={{
          width: "1380px",
          height: "749px",
          top: "32px",

          borderRadius: "40px",
          backgroundColor: "#E8EEE7",
        }}
      >
        <div
          className="relative flex comments flex-col"
          style={{
            width: "500px",
            height: "538px",
            gap: "36px",
            top: "137px",
            left: "721px",
            right: "150px",
          }}
        >
          <div
            className="flex flex-row"
            style={{
              width: "500px",
              height: "52px",
              gap: "24px",
              alignItems: "center",
              borderBottom: "1px solid",
              borderBottomColor: "#D7D7D7",
            }}
          >
            <div
              className="flex"
              style={{
                height: "28px",
                width: "500px",
                justifyContent: "space-between",
              }}
            >
              <p
                className="font-abc font-semibold"
                style={{ width: "239px", height: "28px", fontSize: "20px" }}
              >
                Do you offer freelancers?
              </p>
              <div style={{ width: "24px", height: "24px" }}>
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    width: "14px",
                    height: "14px",
                    top: "5px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              width: "500px",
              height: "52px",
              gap: "24px",
              borderBottom: "1px solid",
              borderBottomColor: "#D7D7D7",
            }}
          >
            <div
              className="flex"
              style={{
                height: "28px",
                width: "500px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                className="font-abc font-semibold text-left"
                style={{ width: "411px", height: "56px", fontSize: "20px" }}
              >
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </p>
              <div
                className="flex "
                style={{ width: "24px", height: "24px", alignItems: "center" }}
              >
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    width: "14px",
                    height: "14px",
                    top: "5px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              width: "500px",
              height: "154px",
              gap: "24px",
              borderBottom: "1px solid",
              borderBottomColor: "#D7D7D7",
            }}
          >
            <div
              className="flex"
              style={{
                height: "28px",
                width: "500px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                className="font-abc font-semibold text-left"
                style={{ width: "330px", height: "28px", fontSize: "20px" }}
              >
                Can I hire multiple talents at once?{" "}
              </p>
              <div
                className="flex "
                style={{ width: "24px", height: "24px", alignItems: "center" }}
              >
                <img
                  src={minus}
                  alt="plus"
                  style={{
                    width: "14px",
                    height: "2px",
                    top: "11px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
            <p
              style={{ width: "500px", height: "78px", fontSize: "15px" }}
              className="font-abc font-normal text-left"
            >
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </p>
          </div>
          <div
            className="flex flex-row"
            style={{
              width: "500px",
              height: "52px",
              gap: "24px",
              alignItems: "center",
              borderBottom: "1px solid",
              borderBottomColor: "#D7D7D7",
            }}
          >
            <div
              className="flex"
              style={{
                height: "28px",
                width: "500px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                className="font-abc font-semibold"
                style={{ width: "400px", height: "28px", fontSize: "20px" }}
              >
                Why should I not go to an agency directly?
              </p>
              <div
                className="flex"
                style={{ width: "24px", height: "24px", alignItems: "center" }}
              >
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    width: "14px",
                    height: "14px",
                    top: "5px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              width: "500px",
              height: "56px",
              gap: "24px",
              alignItems: "center",
              borderBottom: "1px solid",
              borderBottomColor: "#D7D7D7",
            }}
          >
            <div
              className="flex"
              style={{
                height: "56px",
                width: "500px",
                justifyContent: "space-between",
              }}
            >
              <p
                className="font-abc font-semibold text-left"
                style={{ width: "446px", height: "56px", fontSize: "20px" }}
              >
                Who can help me pick a right skillset and duration for me?
              </p>
              <div
                style={{ width: "24px", height: "24px", alignItems: "center" }}
                className="flex"
              >
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    width: "14px",
                    height: "14px",
                    top: "5px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
