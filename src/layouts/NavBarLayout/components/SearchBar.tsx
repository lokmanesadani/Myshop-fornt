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
    borderRadius: "5px",
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
  width: "10px",
  padding: "5px 10px",
  gap: "6px",
  borderRadius: "5px",
  color: "#fff",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
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
              <SearchIcon sx={{ fontSize: "25px", color: "#00000055" }} />
            </StyledButton>
          ),
        }}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
