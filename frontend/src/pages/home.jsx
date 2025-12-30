// import React, { useContext, useState } from "react";
// import withAuth from "../utils/withAuth";
// import { useNavigate } from "react-router-dom";
// import { Button, TextField } from "@mui/material";
// import { AuthContext } from "../contexts/AuthContext";
// import Navbar from "./Navbar";
// import "../styles/Home.css";

// function HomeComponent() {
//   const navigate = useNavigate();
//   const [meetingCode, setMeetingCode] = useState("");
//   const { addToUserHistory } = useContext(AuthContext);

//   const handleJoinVideoCall = async () => {
//     if (!meetingCode.trim()) {
//       alert("Please enter a meeting code");
//       return;
//     }
//     await addToUserHistory(meetingCode);
//     navigate(`/${meetingCode}`);
//   };

//   return (
//     <div className="page-wrapper">
//           <Navbar />

//       <div className="container">
//         <section className="hero">
//           <div className="hero-card">
//             <h1>Start or Join a Meeting Instantly</h1>
//             <p>
//               Secure, fast, and reliable video meetings — no installation
//               required.
//             </p>

//             <div className="meeting-box">
//               <TextField
//                 fullWidth
//                 label="Meeting Code"
//                 placeholder="e.g. abcd-1234"
//                 onChange={(e) => setMeetingCode(e.target.value)}
//               />
//               <Button
//                 variant="contained"
//                 className="primary-btn"
//                 onClick={handleJoinVideoCall}
//               >
//                 Join Meeting
//               </Button>
//             </div>
//           </div>

//           <div className="hero-image">
//             <img src="/conference_img02.jpg" alt="Video meeting" />
//           </div>
//         </section>

//         <section className="section">
//           <h2 className="section-title">Why Conectify?</h2>
//           <div className="grid">
//             <div className="card">
//               <h3>Secure</h3>
//               <p>End-to-end encrypted meetings.</p>
//             </div>
//             <div className="card">
//               <h3>Instant</h3>
//               <p>Join meetings in seconds.</p>
//             </div>
//             <div className="card">
//               <h3>Cross-Platform</h3>
//               <p>Works on all devices.</p>
//             </div>
//           </div>
//         </section>

//         <section className="section">
//           <h2 className="section-title">How It Works</h2>
//           <div className="grid">
//             <div className="card">
//               <h3>Create</h3>
//               <p>Generate a meeting code.</p>
//             </div>
//             <div className="card">
//               <h3>Join</h3>
//               <p>Enter the code to join.</p>
//             </div>
//             <div className="card">
//               <h3>Collaborate</h3>
//               <p>Chat, video & screen sharing.</p>
//             </div>
//           </div>
//         </section>

//         <section className="cta">
//           <h2>Ready to Connect?</h2>
//           <p>Start your meeting now.</p>
//           <Button
//             variant="contained"
//             className="primary-btn"
//             onClick={handleJoinVideoCall}
//           >
//             Start Meeting
//           </Button>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default withAuth(HomeComponent);
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import withAuth from "../utils/withAuth";
import Navbar from "./Navbar";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const { addToUserHistory } = useContext(AuthContext);

  const [meetingCode, setMeetingCode] = useState("");
  const [error, setError] = useState("");

  const handleJoin = async () => {
    if (!meetingCode.trim()) {
      setError("Meeting code is required");
      return;
    }
    setError("");
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="home-wrapper">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>Simple. Secure. Real-Time Video Meetings.</h1>
            <p className="hero-subtitle">
              Conectify lets you start or join high-quality video calls instantly
              — no downloads, no hassle.
            </p>

            <div className="meeting-input">
              <TextField
                fullWidth
                label="Meeting Code"
                placeholder="Enter meeting code"
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
                error={Boolean(error)}
                helperText={error}
              />

              <Button
                variant="contained"
                className="primary-btn"
                onClick={handleJoin}
              >
                Join Meeting
              </Button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/conference_img02.jpg" alt="Online video meeting" />
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <h2>Why Choose Conectify?</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Secure Communication</h3>
              <p>
                Peer-to-peer video streams with encrypted signaling for maximum
                privacy.
              </p>
            </div>

            <div className="feature-card">
              <h3>Instant Meetings</h3>
              <p>
                Create or join meetings in seconds using a simple meeting code.
              </p>
            </div>

            <div className="feature-card">
              <h3>Cross-Platform</h3>
              <p>
                Works seamlessly across desktop, tablet, and mobile browsers.
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="workflow">
          <h2>How It Works</h2>

          <div className="workflow-steps">
            <div className="step">
              <span>01</span>
              <h4>Create</h4>
              <p>Generate a unique meeting code.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h4>Join</h4>
              <p>Share the code with participants.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h4>Collaborate</h4>
              <p>Video, audio, chat, and screen sharing.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER (MERGED) */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Conectify</h3>
            <p>
              A real-time video conferencing platform built using modern web
              technologies.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">How it Works</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src="/icons/github.svg" alt="GitHub" />
              </a>

              <a href="mailto:yourmail@gmail.com" aria-label="Email">
                <img src="/icons/mail.svg" alt="Email" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Conectify. Built by Sarthak Shastrakar.
        </div>
      </footer>
    </div>
  );
}

export default withAuth(Home);
