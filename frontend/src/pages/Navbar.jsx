import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

/* ===== STYLED APP BAR ===== */
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ open }) => ({
//   position: "sticky",
//   top: 0,
//   background: "#ffffff",
//   color: "#4e342e",
//   boxShadow: "none",
//   borderBottom: "1px solid #e5e7eb",
//   transition: "margin 0.3s ease",
//   ...(open && {
//     marginRight: drawerWidth,
//   }),
// }));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  position: "sticky",
  top: 0,
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(10px)",
  color: "#1f2937",
  borderBottom: "1px solid #e5e7eb",
  boxShadow: open
    ? "0 4px 20px rgba(0,0,0,0.08)"
    : "none",
  transition: "all 0.3s ease",
}));



/* ===== DRAWER HEADER ===== */
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

/* ===== COMPONENT ===== */
export default function NavbarWithRightDrawer() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* ===== TOP NAVBAR ===== */}
      <AppBar open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT: BRAND */}
          {/* <Typography
            variant="h6"
            sx={{ fontWeight: 700, cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            Conectify
          </Typography> */}
          <Typography
  variant="h6"
  sx={{
    fontWeight: 800,
    letterSpacing: "0.5px",
    cursor: "pointer",
    transition: "transform 0.2s ease, color 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
      color: "#1976d2",
    },
  }}
  onClick={() => navigate("/home")}
>
  Conectify
</Typography>


          {/* RIGHT: MENU ICON */}
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ===== RIGHT DRAWER ===== */}
      {/* <Drawer
        anchor="right"
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      > */}

      <Drawer
  anchor="right"
  variant="persistent"
  open={open}
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background: "#0f172a",
      color: "#e5e7eb",
      transition: "transform 0.35s ease",
    },
  }}
>

        <DrawerHeader>
          <IconButton
  onClick={() => setOpen(false)}
  sx={{
    color: "#e5e7eb",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(180deg)",
    },
  }}
>
  <ChevronRightIcon />
</IconButton>

        </DrawerHeader>

        <Divider />

        <List>
          
          {/* <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/home")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem> */}

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/profile")}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/history")}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
