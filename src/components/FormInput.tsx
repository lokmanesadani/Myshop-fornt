import { TextField, styled } from "@mui/material";

const StyledInput = styled(TextField)(() => ({
  "& .MuiBaseInput-root": {
    fontSize: "10px !important",
    backgroundColor: "transparent",
  },
}));

const FormInput = () => {
  return (
    <StyledInput
      sx={{
        "& .MuiInputBase-root": {
          height: "40px",
        },
      }}
      InputProps={{ style: { fontSize: 14 } }}
      InputLabelProps={{ style: { fontSize: 14 } }}
      label="Username"
    />
  );
};

export default FormInput;
