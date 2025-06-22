import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../styles/form.css";

const defaultTheme = createTheme();

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
        resetForm(); // reset after login
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className="auth-root">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          component={Paper}
          elevation={6}
          className="auth-form-container"
        >
          <Box className="form-content">
            <Avatar sx={{ m: 1, bgcolor: "#00e5ff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="form-heading">
              {formState === 0 ? "Welcome Back 👋" : "Join Us Today 🚀"}
            </Typography>
            <Typography className="form-subheading">
              {formState === 0
                ? "Login to continue your journey"
                : "Create your free account now"}
            </Typography>

            <div className="form-toggle">
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => handleFormSwitch(0)}
              >
                Sign In
              </Button>
              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => handleFormSwitch(1)}
              >
                Sign Up
              </Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-text">{error}</p>}

               <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button> 
              
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </ThemeProvider>
  );
}
