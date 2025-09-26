import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styled from "styled-components";

// Glass Navbar Container
const GlassNavbar = styled.div`
  flex-grow: 1;
  background: rgba(255, 228, 196, 0.35); /* light skin tone */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Glass Card for dropdown wrapper (optional for your profile menu)
const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <GlassNavbar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: 2,
            cursor: "pointer",
            color: "#5d4037", // dark brownish for skin contrast
            "&:hover": {
              color: "#8d6e63",
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
            },
          }}
        >
          Conectify
        </Typography>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{
              color: "#5d4037",
              "&:hover": {
                color: "#8d6e63",
                transform: "scale(1.1)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
              },
            }}
          >
            {["Profile", "Home", "History"].map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  handleClose();
                  if (item === "History") navigate("/history");
                  else if (item === "Home") navigate("/home");
                  else if (item === "Profile") navigate("/profile");
                }}
                
                sx={{
                  "&:hover": {
                    background: "rgba(255, 228, 196, 0.4)",
                    color: "#4e342e",
                    transition: "0.3s ease-in-out",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}

            <MenuItem>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #ffccbc, #ffe0b2)",
                  color: "#4e342e",
                  fontWeight: "bold",
                  borderRadius: 3,
                  "&:hover": {
                    background: "linear-gradient(135deg, #ffb74d, #ffcc80)",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/auth");
                }}
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </GlassNavbar>
  );
}

export default Navbar;
