import { Box, styled } from "@mui/material";
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";
const Container = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
  paddingRight: "20px",
  paddingLeft: "20px",
  "@media (max-width: 600px)": {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));

const NavBarLayout = () => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default NavBarLayout;
