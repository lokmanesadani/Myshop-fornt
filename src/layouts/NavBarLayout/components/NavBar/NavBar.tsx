import { Avatar, Badge, Box, Button, Popover, useTheme } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "layouts/NavBarLayout/components/SearchBar";
import {
  StyledAvatar,
  StyledBadge,
  StyledNavBar,
  StyledNavContainer,
  StyledNavLogo,
} from "layouts/NavBarLayout/components/NavBar/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import React from "react";
import AuthenticationDialog from "layouts/NavBarLayout/components/AuthenticationDialog/AuthenticationDialog";
const NavBar = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);
  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setRegister(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

            <StyledAvatar src={user?.picture ?? ""} alt="Remy Sharp">
              {user?.firstName?.toUpperCase().charAt(0)}
            </StyledAvatar>
          </>
        ) : (
          <Box>
            <Button
              onClick={handleClickOpen}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "16px",
                borderRadius: "5px",
                padding: "10px 20px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              Log in
            </Button>
            <AuthenticationDialog
              {...{ open, handleClose, register, setRegister }}
            />
          </Box>
        )}
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
