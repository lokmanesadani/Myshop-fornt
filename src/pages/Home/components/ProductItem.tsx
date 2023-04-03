import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import {
  CardBox,
  CardStyledImage,
  StyledCardText,
  StyledCardTitle,
} from "pages/Home/styles";
import { formatDate } from "utils/dateFormat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import IsFavorite from "components/IsFavorite";
type Item = {
  id: number;
  label: string;
  description: string;
  name: string;
  date: string;
  price: number;
  image: string;
  rating: number;
};

const ProductItem = ({ item }: { item: Item }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  return (
    <CardBox>
      <CardStyledImage src={`${import.meta.env.VITE_API_URL}/` + item.image} />
      <Divider sx={{ marginTop: "7px" }} />
      <StyledCardTitle>{item.name}</StyledCardTitle>

      <StyledCardText>
        {item.description} Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ipsam, cupiditate! Ipsam nemo, laudantium possimus qui nam
        laboriosam error eius veniam accusantium asperiores magnam quis facere
        quae temporibus commodi repellendus saepe?
      </StyledCardText>
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <StarIcon sx={{ color: "secondary.main", fontSize: "20px" }} />
        <Typography
          sx={{ fontSize: "15px", fontWeight: "bold", color: "secondary.main" }}
        >
          {item.rating}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#999",
            marginLeft: "auto",
          }}
        >
          {formatDate(item.date)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
          marginTop: "5px",
        }}
      >
        <Typography
          sx={{
            fontSize: "17px",
            lineHeight: "17px",
            fontWeight: "bold",
            color: "secondary.dark",
          }}
        >
          {item.price}$
        </Typography>
        <IsFavorite isFav={true} />
      </Box>
    </CardBox>
  );
};

export default ProductItem;
