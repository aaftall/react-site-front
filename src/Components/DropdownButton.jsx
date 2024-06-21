import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [priority, setPriority] = React.useState("");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 20, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value={1}>Priority 1</MenuItem>
          <MenuItem value={2}>Priority 2</MenuItem>
          <MenuItem value={3}>Priority 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
