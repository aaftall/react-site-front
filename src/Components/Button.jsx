import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function FullWidthTextField() {
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/tasks/create");
  };
  return (
    <Box
      className="taskBox"
      sx={{
        width: 500,
        maxWidth: "100%",
        backgroundColor: "rgb(36,36,36)",
        border: "solid rgb(223,206,176)",
        borderRadius: "10px",
      }}
      onClick={handleNavigation}
      marginTop={`20px`}
    >
      <TextField
        fullWidth
        label="New task..."
        id="newTask"
        className="newTask"
      />
    </Box>
  );
}
