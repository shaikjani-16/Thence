import React from "react";
import sparkle from "../assets/sparkle.svg";
import lady from "../assets/lady.svg";
import vector from "../assets/Vector.svg";
import arrow from "../assets/arrow.svg";
import dot from "../assets/dot.svg";
import dot1 from "../assets/dot-1.svg";
const Middle = () => {
  return (
    <>
      {" "}
      <div
        className="flex justify-center align-center relative"
        style={{ padding: "79px 0px 0px 62px" }}
      >
        <div
          className="flex-col relative"
          style={{ width: "588px", height: "178px" }}
        >
          <p
            className="font-grace font-normal text-4xl"
            style={{ color: "#2DA950" }}
          >
            Success stories
          </p>
          <p
            className="font-abc font-semibold text-cover flex"
            style={{
              fontSize: "50px",
              width: "588px",
              textAlign: "center",
              height: "134px",
              lineHeight: "67px",
            }}
          >
            Every success journey we’ve encountered.
          </p>
        </div>
      </div>
      <div
        className="relative"
        style={{ width: "728px", height: "596px", top: "50px" }}
      >
        <div
          style={{
            width: "267.82px",
            height: "239px",
            padding: "20px",
            top: "195px",
          }}
          className="relative z-30 rounded-3xl   bg-white div1"
        >
          <img
            src={sparkle}
            alt="sparkle"
            className="flex-start size-20"
            style={{ marginTop: "-30px" }}
          />
          <p
            className=" font-medium relative font-robo"
            style={{ fontSize: "55px", top: "-45px", left: "-30px" }}
          >
            40%
          </p>
          <p
            className="font-abc font-medium text-left relative"
            style={{ fontSize: "18px", top: "-40px" }}
          >
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
        <div
          className="relative flex z-30 bg-white rounded-full align-center justify-center"
          style={{
            width: "245px",
            height: "88px",
            top: "250px",
            left: "65px",
          }}
        >
          <div
            style={{ width: "52px", height: "52px" }}
            className=" flex justify-center align-center p-10 rounded-full bg-green-200 z-30"
          >
            <img
              src={vector}
              style={{ width: "32px", height: "32px", top: "20px" }}
              className="justify-center align-center z-40 absolute"
            />
          </div>
          <div
            style={{ width: "131px", height: "56px", top: "100px" }}
            className="flex-col"
          >
            <p className=" font-abc font-bold text-2xl mb-2 mt-1">10 DAYS</p>
            <p
              className="font-abc font-medium text-base"
              style={{ color: "#828282" }}
            >
              Staff Deployment
            </p>
          </div>
        </div>
        <div
          className="relative bg-green-500 z-0 div2 rounded-3xl"
          style={{
            width: "507px",
            height: "547px",
            top: "-240px",
            left: "130px",
            backgroundImage: `url(${lady})`,
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            width: "291px",
            height: "250px",
            top: "-420px",
            left: "420px",
            backgroundColor: "#002E18",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            borderRadius: "20px",
          }}
          className="relative z-30"
        >
          <div className="flex justify-center">
            <p
              className="font-robo font-normal"
              style={{ fontSize: "64px", color: "white", textAlign: "center" }}
            >
              $0.5
              <span
                className="font-robo font-baseline"
                style={{ fontSize: "24px", color: "#A6A3A0" }}
              >
                MILLION
              </span>
            </p>
          </div>
          <div className="flex">
            <p
              className="font-abc font-medium text-lg text-center p-4"
              style={{ color: "#CCCCCC", textAlign: "left" }}
            >
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>

        <div
          className="flex bg-black relative"
          style={{
            width: "245px",
            height: "88px",
            borderRadius: "100px",
            top: "-600px",
            left: "850px",
            padding: "31px 40px",
            gap: "16px",
          }}
        >
          <p
            className="font-abc font-medium"
            style={{ fontSize: "20px", color: "white" }}
          >
            Explore More
          </p>
          <div
            className="flex align-center justify-center"
            style={{ width: "24px", height: "24px" }}
          >
            <img
              src={arrow}
              alt="arrow"
              className="relative"
              style={{ width: "16px", height: "16px", top: "7.5px" }}
            />
          </div>
        </div>
        <div className="flex">
          <div
            className="flex flex-col absolute
         bg-white"
            style={{
              height: "193px",
              width: "398px",
              top: "170px",
              left: "850px",
              justifyContent: "flex-start", // Horizontal alignment
              alignItems: "flex-start",
            }}
          >
            <p
              className="flex font-abc font-semibold text-left"
              style={{ fontSize: "40px" }}
            >
              Enhance fortune 50 company’s insights teams research capabilities
            </p>
          </div>
          <div
            className="flex bg-white absolute"
            style={{
              width: "59px",
              height: "11px",
              top: "430px",
              left: "850px",
              gap: "12px",
            }}
          >
            <img
              src={dot}
              alt="dot"
              className="hover:bg-gray-500 hover:border hover:rounded-lg"
              style={{ color: "#2DA950", width: "11px", height: "11px" }}
            />
            <img
              src={dot1}
              alt="dot"
              className="hover:bg-gray-500 hover:border hover:rounded-lg"
              style={{ color: "#E4E3E3", width: "11px", height: "11px" }}
            />
            <img
              src={dot1}
              alt="dot"
              className="hover:bg-gray-500 hover:border hover:rounded-lg"
              style={{ width: "11px", height: "11px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
