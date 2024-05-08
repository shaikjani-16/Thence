import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

// Define a validation schema using Zod
const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

const MyForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [formErrors, setFormErrors] = useState({ email: "" });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let countdownInterval;
    if (submitSuccess && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [submitSuccess, countdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData); // Validate the form data
      // If validation succeeds, set submit success to true
      setSubmitSuccess(true);
      setTimeout(() => {
        // Redirect to home page after 5 seconds

        navigate("/");
      }, 5000);
    } catch (error) {
      // Handle validation errors
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

  return (
    <div>
      {submitSuccess ? (
        <div>
          <p>Success! Submitted. Congratulations!</p>
          <p>Redirecting you to the Home page in {countdown} seconds...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}
          </div>
          <button
            type="submit"
            disabled={!formData.username || formErrors.email}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MyForm;
