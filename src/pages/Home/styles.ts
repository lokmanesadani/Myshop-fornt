import { styled, Typography, Box, Checkbox } from "@mui/material";

export const StyledTypo = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
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
  color: "#222",
  fontWeight: 500,
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
  color: "#006FBA",
}));

// -------------- Card styles ----------------
export const CardBox = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "13px",
  boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 2px;",
  display: "flex",
  overflow: "hidden",
  flexDirection: "column",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    boxShadow: "rgba(149, 157, 165, 0.7) 0px 0px 7px;",
    transform: "scale(1.01)",
  },
}));

export const CardStyledImage = styled("img")(() => ({
  height: "150px",
  width: "95%",
  margin: "auto",
  objectFit: "contain",
  objectPosition: "center",
  "@media (max-width: 600px)": {
    height: "100px",
    paddingBottom: "5px",
  },
  "@media (max-width: 900px)": {
    height: "130px",
    paddingBottom: "5px",
  },
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const StyledCardText = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  fontSize: "13px",
  fontWeight: 600,
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  color: "primary.dark",
}));
