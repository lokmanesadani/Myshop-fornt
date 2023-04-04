import { Box, TextField, Button, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectButton from "layouts/NavBarLayout/components/SelectButton";

const StyledSearchBar = styled(Box)(() => ({
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  position: "relative",
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
    padding: "0 20px 0 160px",
    height: "100%",
  },
  "& .MuiFilledInput-root": {
    borderRadius: "50px",
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
  width: "50px",
  padding: "5px 10px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50px",
  gap: "6px",
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SelectButton />
      <StyledTextField
        fullWidth
        hiddenLabel
        variant="filled"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <StyledButton>
              <SearchIcon sx={{ fontSize: "25px" }} />
            </StyledButton>
          ),
        }}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
