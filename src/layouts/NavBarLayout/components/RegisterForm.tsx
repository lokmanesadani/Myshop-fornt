import FormInput from "components/FormInput";
import { Box } from "@mui/material";

const RegisterForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormInput />
      <FormInput />
    </Box>
  );
};

export default RegisterForm;
