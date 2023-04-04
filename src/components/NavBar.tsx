import { Box, Button, TextField, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
const StyledSearchBar = styled(Box)(() => ({
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiFilledInput-underline": {
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
  },
  "& .MuiFilledInput-input": {
    padding: "0 20px",
    height: "100%",
  },
  "& .MuiFilledInput-root": {
    borderRadius: "50px",
    width: "100%",
    maxWidth: "500px",
    padding: "0",
    height: "48px",
    "&:hover": {
      "&:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "100%",
  width: "220px",
  padding: "5px 10px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50px",
  gap: "6px",
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
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
        <StyledSearchBar>
          <StyledTextField
            fullWidth
            hiddenLabel
            variant="filled"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <StyledButton>
                  <SearchIcon
                    sx={{
                      fontSize: "25px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "17px",
                      lineHeight: "20px",
                    }}
                  >
                    Search Icon
                  </Typography>
                </StyledButton>
              ),
            }}
          />
        </StyledSearchBar>
        <Box>Cart</Box>
        <Box>
          <Box>Sign In</Box>
        </Box>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
