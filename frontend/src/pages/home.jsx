import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/Home.css";
import Navbar from "./Navbar.jsx";


// new navbar
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (meetingCode.trim()) {
      await addToUserHistory(meetingCode);
      navigate(`/${meetingCode}`);
    } else {
      alert("Please enter a valid meeting code.");
    }
  };

  //   new navbar
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Container">
      <Navbar />

      {/* Main Meet Section */}
      <div className="meetContainer">
        <div className="leftPanel">
          <div className="glassCard">
            <h1 className="heroTitle">Start Your Meeting</h1>
            <p className="heroSubtitle">
              Connect instantly using a secure meeting code
            </p>

            <div className="joinControls">
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                fullWidth
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join Now
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="/homeimg.jpg" alt="Video meeting illustration" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
