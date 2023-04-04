import { Avatar, Badge, Box, Typography, styled } from "@mui/material";
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
  gap: "35px",
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
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    padding: "0px",
    top: "1px",
    display: "flex",
    fontSize: "11px",
    alignItems: "center",
    justifyContent: "center",
    height: "16px",
    width: "16px",
    minWidth: "16px",
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
              fontSize: "20px",
              color: "primary.dark",
            }}
          />
        </Badge>
        <StyledBadge badgeContent={4} color="error">
          <NotificationsIcon
            sx={{
              fontSize: "20px",
              color: "primary.dark",
            }}
          />
        </StyledBadge>
        <Badge variant="dot" color="error">
          <CartIcon
            sx={{
              fontSize: "20px",
              color: "primary.dark",
            }}
          />
        </Badge>

        <Avatar
          sx={{
            width: "30px",
            height: "30px",
            fontSize: "15px",
          }}
          alt="Remy Sharp"
        >
          L
        </Avatar>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
