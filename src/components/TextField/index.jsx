import React from "react";
import TextField from "@mui/material/TextField";

export default function FloatingTextField({ label }) {
  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        placeholder=" "
        fullWidth
        sx={{
          marginBottom: 2,
          width: { xs: "100%", md: "460px" },
          "& .MuiInputBase-root": {
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255)",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255)",
          },
        }}
      />
    </div>
  );
}
