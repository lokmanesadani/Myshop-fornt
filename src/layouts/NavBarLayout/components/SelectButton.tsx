import { MenuItem, Select, Typography, styled } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledSelect = styled(Select)(() => ({
  position: "absolute",
  width: "150px",
  height: "100%",
  backgroundColor: "#e9e9e9",
  zIndex: 1,
  borderRadius: "7px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#dadada",
  },
  "& .MuiSelect-select": {
    borderRadius: "50px",
    padding: "0",
    height: "48px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "0px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const selectItems = [
  "All",
  "Monitors",
  "Keyboards",
  "Mouses",
  "Headphones",
  "Laptops",
  "Desktops",
];

const OpenedIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: "20px",
  marginRight: "10px",
  color: "#00000099",
}));

const SelectButton = () => {
  const [value, setValue] = useState("All");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      defaultValue={"All"}
      IconComponent={OpenedIcon}
      inputProps={{ "aria-label": "Without label" }}
    >
      {selectItems.map((item, index) => (
        <MenuItem key={index} value={item}>
          <em>{item}</em>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default SelectButton;
