import { Avatar, Badge, useTheme } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "layouts/NavBarLayout/components/SearchBar";
import MailIcon from "@mui/icons-material/ChatOutlined";
import {
  StyledAvatar,
  StyledBadge,
  StyledNavBar,
  StyledNavContainer,
  StyledNavLogo,
} from "layouts/NavBarLayout/style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
const NavBar = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  return (
    <StyledNavContainer>
      <StyledNavBar>
        <StyledNavLogo>Logo</StyledNavLogo>
        <SearchBar />
        {user ? (
          <>
            <Badge variant="dot" color="secondary">
              <CartIcon sx={{ fontSize: "20px", color: "primary.dark" }} />
            </Badge>

            <Badge variant="dot" color="error">
              <FontAwesomeIcon
                fontSize={"18px"}
                color={theme.palette.primary.dark}
                icon={faCommentDots}
              />
            </Badge>
            <StyledBadge badgeContent={4} color="error">
              <FontAwesomeIcon
                fontSize={"18px"}
                color={theme.palette.primary.dark}
                icon={faBell}
              />
            </StyledBadge>

            <StyledAvatar alt="Remy Sharp">L</StyledAvatar>
          </>
        ) : null}
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
