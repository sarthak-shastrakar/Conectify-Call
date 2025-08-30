import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
              cursor: "pointer",
              color: "#e0f7fa",
              "&:hover": {
                color: "#80deea",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
            onClick={() => navigate("/")}
          >
            Conectify
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{
                color: "#e0f7fa",
                "&:hover": {
                  color: "#80deea",
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
              sx={{ mt: 1 }}
            >
              {["Profile", "My account", "History"].map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => {
                    handleClose();
                    if (item === "History") navigate("/history");
                  }}
                  sx={{
                    "&:hover": {
                      background: "rgba(128, 222, 234, 0.2)",
                      color: "#006064",
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
                    background: "linear-gradient(135deg, #80deea, #26c6da)",
                    color: "#004d40",
                    fontWeight: "bold",
                    borderRadius: 3,
                    "&:hover": {
                      background: "linear-gradient(135deg, #26c6da, #00acc1)",
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
