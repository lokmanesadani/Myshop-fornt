import {
  Box,
  Button,
  Divider,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import {
  CardBox,
  CardDate,
  CardFooterBox,
  CardPrice,
  CardRating,
  CardStyledImage,
  CardTitleBox,
  StyledCardText,
  StyledCardTitle,
} from "pages/Home/styles";
import { formatDate } from "utils/dateFormat";
import StarIcon from "@mui/icons-material/Star";
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
  return (
    <CardBox>
      <CardStyledImage src={`${import.meta.env.VITE_API_URL}/` + item.image} />
      <Divider sx={{ marginTop: "10px" }} />
      <CardTitleBox>
        <StyledCardTitle>{item.name}</StyledCardTitle>
        <CardPrice>{item.price}$</CardPrice>
      </CardTitleBox>

      <StyledCardText>{item.description}</StyledCardText>
      <CardFooterBox>
        <StarIcon sx={{ color: "secondary.main", fontSize: "20px" }} />
        <CardRating>{item.rating}</CardRating>
        <Typography
          sx={{
            fontSize: "11px",
            color: "#999",
            lineHeight: "11px",
          }}
        >
          ({10})
        </Typography>
        <CardDate>{formatDate(item.date)}</CardDate>
        <IsFavorite isFav={true} />
      </CardFooterBox>
    </CardBox>
  );
};

export default ProductItem;
