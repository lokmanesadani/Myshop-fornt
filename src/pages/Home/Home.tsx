import {
  Box,
  Button,
  Checkbox,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import FacebookLoginButton from "components/FacebookLoginButton";
import GoogleLoginButton from "components/GoogleLoginButton";
import RegisterForm from "layouts/NavBarLayout/components/RegisterForm";
import FilterComponent from "pages/Home/components/FilterComponent";
import ProductsList from "pages/Home/components/ProductsList";
const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  gap: "20px",
  // if width is less than 1200px, then flex-direction is column
  "@media (min-width: 600px)": {
    flexDirection: "row",
  },
}));

const Home = () => {
  return (
    <>
      <StyledBox>
        <FilterComponent />
        <ProductsList />
      </StyledBox>
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "350px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 3px;",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "25px",
            color: "primary.dark",
            marginTop: "10px",
          }}
        >
          Log in to your account
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "19px",
            color: "#777",
            marginTop: "10px",
          }}
        >
          Welcome back! Select your method to sign in
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "25px",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <GoogleLoginButton />
          <FacebookLoginButton />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            marginY: "20px",
          }}
        >
          <Divider sx={{ flex: 1 }} />
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "19px",
              color: "#999",
            }}
          >
            or continue with email
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>
        <RegisterForm />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginY: "10px",
          }}
        >
          <Checkbox
            sx={{
              color: "primary.main",
              padding: "0px",
              "&.Mui-checked": {
                color: "primary.main",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "18px",
              },
            }}
            value={true}
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "14px",
              color: "#777",
              marginLeft: "7px",
            }}
          >
            Remember me
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "19px",
              color: "primary.main",
              marginLeft: "auto",
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            borderRadius: "5px",
            padding: "10px 20px",

            fontSize: "17px",
            fontWeight: 700,
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Log in
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
            marginY: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "19px",
              color: "#999",
            }}
          >
            Don't have an account?
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "19px",
              color: "primary.main",
            }}
          >
            Register
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
