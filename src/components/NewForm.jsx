//sucess button
import React, { useEffect, useState } from "react";
import cross from "../assets/Close.svg";
import logo from "../assets/Vector.png";
import right from "../assets/Frame.svg";
import badges from "../assets/Badges.svg";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});
const NewForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [filled, setFilled] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: "" });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    let interval;
    if (submitSuccess && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [submitSuccess, countdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formData.email !== "" && formData.password !== "") {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };
  //   const validateForm=()=>{
  //     const [username,email]=formData;
  //     const errors ={};
  //     if(!username||schema.parse(username)) {
  //         errors.username="Username must be atleast three characters";
  //    }
  //    if(!email||schema.parse(email)){
  //     errors
  //    }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setFormErrors(fieldErrors);
      }
    }
  };
  useEffect(() => {});
  return (
    <>
      <div
        style={{ width: "100%", height: "800px", margin: "0px" }}
        className="flex relative"
      >
        <Link to="/">
          <div
            className="flex bg-white relative"
            style={{
              width: "64px",
              height: "64px",

              left: "1200px",
              borderRadius: "40px",
              border: "1px solid",
              borderColor: "#CACACA",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "32px", height: "32px" }}
              src={cross}
              className="flex"
            />
          </div>
        </Link>
        <div
          className="flex relative"
          style={{ width: "128px", height: "48px", top: "28px" }}
        >
          <img
            style={{
              width: "121px",
              height: "31px",
              top: "8px",
              left: "7px",
              color: "#333333",
            }}
            src={logo}
          />
        </div>
        {submitSuccess && (
          <div
            className="flex relative flex-col "
            style={{
              width: "718px",
              height: "357px",
              top: "200px",
              left: "100px",
              gap: "41px",
              alignItems: "center",
            }}
          >
            <div
              className="flex"
              style={{ width: "80px", height: "80px", gap: "25px" }}
            >
              <div style={{ width: "80px", height: "80px" }}>
                <img src={right} />
              </div>
            </div>
            <div
              className="flex flex-col"
              style={{
                width: "718px",
                height: "236px",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "237px",
                  height: "28px",
                  fontSize: "34px",
                  color: "#2DA950",
                }}
                className="font-grace font-normal text-center"
              >
                Success Submitted
              </p>
              <div
                className="flex flex-col"
                style={{
                  width: "718px",
                  height: "192px",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{ width: "423px", height: "67px", fontSize: "56px" }}
                  className="font-abc font-semibold"
                >
                  Congratulations
                </p>
                <p
                  style={{ width: "718px", height: "105px", fontSize: "27px" }}
                  className="flex font-abc font-medium"
                >
                  Your request has been successfully submitted to us. We will
                  validate your information and reach out to your shortly with
                  updates
                </p>
              </div>
            </div>
            <div
              className="flex relative"
              style={{
                width: "718px",
                height: "28px",
                top: "25px",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="font-abc font-normal" style={{ fontSize: "20px" }}>
                Redirecting you to Homepage in{" "}
                <span className="font-abc font-bold">{countdown} Seconds</span>
              </p>
            </div>
          </div>
        )}
        {!submitSuccess && (
          <div
            className="flex relative"
            style={{
              width: "588px",
              height: "539px",
              top: "150px",
              left: "150px",
              gap: "62px",
            }}
          >
            <div
              className="flex flex-col"
              style={{ width: "588px", height: "178px", gap: "16px" }}
            >
              <p
                className="font-grace font-normal text-4xl"
                style={{ color: "#2DA950" }}
              >
                Registration Form
              </p>
              <p
                style={{
                  width: "588px",
                  height: "134px",
                  fontSize: "56px",
                  alignItems: "center",
                }}
                className="font-abc font-semibold flex"
              >
                Start your success Journey here!
              </p>
            </div>
            <div
              className="flex flex-col absolute"
              style={{
                width: "417px",
                height: "298px",
                gap: "47px",
                top: "250px",
                left: "90px",
              }}
            >
              <div
                style={{ width: "417px", height: "174px", gap: "24px" }}
                className="flex form"
              >
                <form
                  style={{ gap: "20px" }}
                  className="flex-col flex"
                  onSubmit={handleSubmit}
                >
                  <input
                    id="username"
                    name="username"
                    className="flex font-abc font-medium size-5"
                    style={{
                      width: "417px",
                      height: "75px",
                      borderRadius: "64px",
                      padding: "24px 36px",
                      gap: "10px",
                      borderColor: "#00000005",
                      backgroundColor: "#EFEFEF",
                    }}
                    type="text"
                    placeholder="Enter your name"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="flex font-abc font-medium size-5"
                    style={{
                      width: "417px",
                      height: "75px",
                      top: "20px",
                      borderRadius: "64px",
                      padding: "24px 36px",
                      gap: "10px",
                      borderColor: "#00000005",
                      backgroundColor: "#EFEFEF",
                    }}
                    placeholder="Enter your email"
                    value={FormData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <div
                      className="flex"
                      style={{ width: "225px", height: "22px", gap: "7x" }}
                    >
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={badges}
                      />
                      <p
                        style={{
                          width: "198px",
                          height: "22px",
                          fontSize: "14px",
                          color: "#FF0808",
                        }}
                        className="font-abc font-medium"
                      >
                        Enter a valid email address
                      </p>
                    </div>
                  )}

                  <div
                    style={{
                      width: "417px",
                      height: "78px",
                      borderRadius: "108px",
                      padding: "26px 49px",
                      gap: "16px",
                      top: "50px",
                      background: filled ? "#000000" : "#C9C9C9",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                    className="flex relative"
                  >
                    <button
                      style={{ color: "#FFFFFF", fontSize: "18px" }}
                      disabled={!filled}
                      className="flex font-abc font-semibold"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewForm;
