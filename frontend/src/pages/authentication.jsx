import * as React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { MoveLeft } from "lucide-react";

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-content: center;
    background: black;
    padding: 2rem;
  }

  .form {
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    display: grid;
    gap: 2rem;
    border: 1px solid transparent;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 2px;
    background: radial-gradient(
        100% 61.73% at 100% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      ),
      radial-gradient(
        91.09% 56.23% at 0% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      );
    position: relative;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .form::before,
  .form::after {
    content: "";
    position: absolute;
    border: 1px solid transparent;
    border: inherit;
    z-index: -1;
  }

  .form::before {
    inset: -1rem;
    opacity: 0.15;
  }

  .form::after {
    inset: -2rem;
    opacity: 0.05;
  }

  .form .title {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    background: linear-gradient(rgb(170, 170, 170), rgb(78, 78, 78));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .form .input-container {
    display: flex;
    align-items: center;
    background: radial-gradient(
      47.3% 73.08% at 50% 94.23%,
      rgba(255, 255, 255, 0.1) 5%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 1px solid transparent;
    border-image: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.445) 0%,
        transparent 100%
      )
      1;
    border-width: 0 0 1px 0;
    border-radius: 5px;
  }

  .form .input-container .input {
    flex: 1;
    background: none;
    border: none;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 1rem;
  }

  .form .input-container .input:focus {
    outline: none;
    color: #ffe0a6;
  }

  .login-button {
    width: 100%;
  }

  .login-button .input {
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    background: radial-gradient(
        100% 45% at 100% 50%,
        rgba(255, 224, 166, 0.084) 0%,
        rgba(115, 115, 115, 0) 100%
      ),
      radial-gradient(
        100% 45% at 0% 50%,
        rgba(255, 224, 166, 0.084) 0%,
        rgba(115, 115, 115, 0) 100%
      );
    border: 1px solid transparent;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 1px 0 1px;
    text-align: center;
    color: #ffe0a6;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .login-button .input:hover {
    animation: flicker 0.5s infinite;
  }

  .login-button .input:active {
    width: 95%;
  }

  .form-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .form-toggle button {
    position: relative;
    padding: 0.6rem 1.75rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffe0a6;
    background: linear-gradient(45deg, #ff9a00, #ffe0a6, #ff9a00);
    background-size: 200% 200%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(255, 224, 166, 0.4),
      0 0 20px rgba(255, 224, 166, 0.2);
  }

  .form-toggle button:hover,
  .form-toggle button.active {
    background-position: 100% 0;
    color: black;
    box-shadow: 0 0 15px rgba(255, 224, 166, 0.7),
      0 0 30px rgba(255, 224, 166, 0.5);
    transform: scale(1.05);
  }

  .form-toggle button:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(255, 224, 166, 0.3);
  }

  .error-text {
    color: #ff6b6b;
    text-align: center;
  }

  .texture {
    position: absolute;
    background-image: linear-gradient(0deg, #ffffff 1px, transparent 1px);
    background-size: 1px 5px;
    inset: 0;
    mix-blend-mode: soft-light;
    pointer-events: none;
    animation: movingLines 1s linear infinite;
  }

  @keyframes flicker {
    0% {
      filter: brightness(100%);
    }
    10% {
      filter: brightness(80%);
    }
    20% {
      filter: brightness(120%);
    }
    30% {
      filter: brightness(90%);
    }
    40% {
      filter: brightness(110%);
    }
    50% {
      filter: brightness(100%);
    }
    60% {
      filter: brightness(85%);
    }
    70% {
      filter: brightness(95%);
    }
    80% {
      filter: brightness(105%);
    }
    90% {
      filter: brightness(115%);
    }
    100% {
      filter: brightness(100%);
    }
  }

  @keyframes movingLines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 5px;
    }
  }

  .back-button {
    text-align: center;
    

  }
`;

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setName("");
    setError("");
  };

  const validateForm = () => {
    if (formState === 1 && !name.trim()) {
      setError("Full Name is required.");
      return false;
    }
    if (!username.trim()) {
      setError("Username is required.");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError("");
    return true;
  };

  const handleAuth = async () => {
    if (!validateForm()) return;
    try {
      if (formState === 0) {
        await handleLogin(username, password);
        resetForm();
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        resetForm();
        setFormState(0);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong!";
      setError(msg);
    }
  };

  const handleFormSwitch = (type) => {
    setFormState(type);
    resetForm();
  };

  return (
    <StyledWrapper>
      <div className="wrapper">
        <Link to="/" className="back-button">
          <span>
            {/* <MoveLeft /> */}
            back to home
          </span>
        </Link>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <span className="title">
            {formState === 0 ? "Login" : "Register"}
          </span>

          {formState === 1 && (
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="login-button">
            <input
              className="input"
              type="submit"
              value={formState === 0 ? "Login" : "Register"}
              onClick={handleAuth}
            />
          </div>

          <div className="form-toggle">
            <button
              type="button"
              className={formState === 0 ? "active" : ""}
              onClick={() => handleFormSwitch(0)}
            >
              Sign In
            </button>
            <button
              type="button"
              className={formState === 1 ? "active" : ""}
              onClick={() => handleFormSwitch(1)}
            >
              Sign Up
            </button>
          </div>

          <div className="texture" />
        </form>
      </div>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </StyledWrapper>
  );
}
