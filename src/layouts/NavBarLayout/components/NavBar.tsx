import {
  Avatar,
  Badge,
  Box,
  Button,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "layouts/NavBarLayout/components/SearchBar";
import NotificationsIcon from "@mui/icons-material/NotificationsActiveOutlined";
const StyledNavContainer = styled(Box)(() => ({
  height: "70px",
  borderBottom: "1px solid #00000018",
  display: "flex",
}));

const StyledNavBar = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  maxWidth: "1400px",
  margin: "0 auto",
  paddingRight: "20px",
  paddingLeft: "20px",
  "@media (max-width: 600px)": {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));

const NavBar = () => {
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "25px",
            color: "primary.main",
          }}
        >
          Logo
        </Typography>
        <SearchBar />
        <Badge variant="dot" color="secondary">
          <CartIcon
            sx={{
              fontSize: "25px",
              color: "primary.dark",
            }}
          />
        </Badge>
        <Badge variant="dot" color="error">
          <CartIcon
            sx={{
              fontSize: "25px",
              color: "primary.dark",
            }}
          />
        </Badge>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon
            sx={{
              fontSize: "25px",
              color: "primary.dark",
            }}
          />
        </Badge>
        <Avatar alt="Remy Sharp">L</Avatar>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
