import { Box, styled } from "@mui/material";
import FilterComponent from "pages/Home/components/FilterComponent";
import ProductsList from "pages/Home/components/ProductsList";
const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  gap: "20px",
  // if width is less than 1200px, then flex-direction is column
  "@media (min-width: 600px)": {
    flexDirection: "row",
  },
}));
const Home = () => {
  return (
    <StyledBox>
      <FilterComponent />
      <ProductsList />
    </StyledBox>
  );
};

export default Home;
