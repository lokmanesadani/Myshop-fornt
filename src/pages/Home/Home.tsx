import { Box, Button, Divider, Typography, styled } from "@mui/material";
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
          gap: "20px",
          boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 3px;",
          borderRadius: "10px",
        }}
      >
        <RegisterForm />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
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
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <GoogleLoginButton />
          <GoogleLoginButton />
        </Box>
      </Box>
    </>
  );
};

export default Home;
