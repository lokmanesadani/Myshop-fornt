import { Button, styled } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookIcon from "assets/icons/FacebookIcon";
import GoogleIcon from "assets/icons/GoogleIcon";
import useAxios from "hooks/useAxios";

const StyledButton = styled(Button)(() => ({
  width: "100%",
  backgroundColor: "#fff",
  color: "#00000099",
  boxShadow: "rgba(149, 157, 165, 0.9) 0px 0px 3px;",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "15px",
  fontFamily: "Poppins",
}));

const FacebookLoginButton = () => {
  const axios = useAxios();
  const responseMessage = async (response: any) => {
    const credential = response.access_token;
    axios
      .post("/auth/google/login", { tokenId: credential })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = useGoogleLogin({
    onSuccess: responseMessage,
  });
  return (
    <StyledButton onClick={() => login()}>
      <FacebookIcon width="25" height="25" />
      Facebook
    </StyledButton>
  );
};

export default FacebookLoginButton;
