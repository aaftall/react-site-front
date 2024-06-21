import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField() {
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
