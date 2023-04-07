import FormInput from "components/FormInput";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { faEnvelope, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const items = [
  {
    label: "Username",
    type: "text",
    icon: faEnvelope,
  },
  {
    label: "Password",
    type: "password",
    icon: faEye,
  },
];
const RegisterForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {items.map((item) => (
        <FormInput key={item.label} {...item} />
      ))}
    </Box>
  );
};

export default RegisterForm;
