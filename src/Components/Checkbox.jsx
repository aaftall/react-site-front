import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: "rgb(226, 206, 176)",
          "&.Mui-checked": {
            color: "rgb(226, 206, 176)",
          },
        }}
      />
    </div>
  );
}
