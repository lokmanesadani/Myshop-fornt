import Grid from "@mui/material/Unstable_Grid2";
import { Box, Rating, styled, Typography } from "@mui/material";

type Item = {
  id: number;
  title: string;
  label: string;
  description: string;
  date: string;
  price: number;
  image: string;
  rating: number;
};
const itemsList: Item[] = [
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
  {
    id: 1,
    title: "Product 1",
    label: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    date: "2021-10-10",
    image: "/images/monitor.webp",
    rating: 4,
  },
];
const CardBox = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "15px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 15px;",
}));

const StyledLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "3px 10px",
  borderRadius: "3px",
  fontSize: "9px",
  width: "fit-content",
}));

const StyledImage = styled("img")(() => ({
  height: "180px",
  width: "100%",
  objectFit: "contain",
  alignSelf: "center",
}));

const ProductsList = () => {
  return (
    <Grid sx={{ width: "100%", padding: "10px" }} container spacing={2}>
      {itemsList.map((item, index) => (
        <Grid key={index} sm={6} md={4} lg={3}>
          <CardBox>
            <StyledLabel>{item.label}</StyledLabel>
            <Box
              sx={{
                padding: "0 10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <StyledImage src={item.image} />
              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#999",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#999",
                  }}
                >
                  {item.date}
                </Typography>
              </Box>
              <Typography
                sx={{
                  paddingTop: "5px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.description}
              </Typography>
              <Rating
                size="small"
                name="read-only"
                value={item.rating}
                readOnly
              />
            </Box>
          </CardBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
