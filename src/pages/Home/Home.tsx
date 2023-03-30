import { Box, styled } from "@mui/material";
import FilterComponent from "pages/Home/components/FilterComponent";
import ProductsList from "pages/Home/components/ProductsList";
const StyledBox = styled(Box)(() => ({
  width: "100%",
  flexGrow: 1,
  display: "flex",
  flexDirection: "row",
  paddingTop: "10px",
  justifyContent: "space-between",
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
