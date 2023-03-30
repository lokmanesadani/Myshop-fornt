import { styled, Typography, Box, Checkbox } from "@mui/material";

export const StyledTypo = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
  paddingBottom: "px",
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#00000066",
  padding: "3px 0",
  "& .MuiSvgIcon-root": {
    fontSize: "16px",
  },
  // change color when hover
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "11px",
  color: "#000",
}));

export const StyledShowMore = styled(Typography)(() => ({
  fontSize: "11px",
  color: "#000",
  marginTop: "2px",
  marginBottom: "13px",
  display: "flex",
  alignItems: "center",

  cursor: "pointer",
  "&:hover": {
    color: "#ffa233",
    textDecoration: "underline",
  },
}));
export const FilterBox = styled(Box)(() => ({
  backgroundColor: "white",
  width: "100%",
  maxWidth: "180px",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 15px;",
}));
export const StyledFilterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  marginTop: "4px",
  color: "rgba(0, 0, 0, 0.3)",
}));
