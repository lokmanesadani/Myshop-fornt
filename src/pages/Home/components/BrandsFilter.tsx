import { Collapse, Divider } from "@mui/material";
import {
  StyledTypo,
  StyledBox,
  StyledCheckbox,
  StyledTypography,
  StyledShowMore,
} from "pages/Home/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect } from "react";

type FilterProps = {
  title: string;
  filterList: string[];
  setFilter: any;
};



const Filter = ({ title, filterList, setFilter }: FilterProps) => {
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked([...checked, event.target.value]);
    } else {
      setChecked(checked.filter((item) => item !== event.target.value));
    }
  };

  useEffect(() => {
    setFilter({
      type: title,
      payload: checked,
    });
  }, [checked]);

  const showed = Math.floor(filterList.length / 3);

  return (
    <>
      <Divider
        sx={{
          marginY: "10px",
        }}
      />
      <StyledTypo>{title}</StyledTypo>
      {filterList.slice(0, showed).map((brand, index) => (
        <StyledBox key={index}>
          <StyledTypography>{brand}</StyledTypography>
          <StyledCheckbox
            value={brand}
            color="secondary"
            onChange={handleChange}
          />
        </StyledBox>
      ))}
      <Collapse in={show} timeout="auto">
        {filterList.slice(showed, filterList.length).map((brand, index) => (
          <StyledBox key={index}>
            <StyledTypography>{brand}</StyledTypography>
            <StyledCheckbox
              value={brand}
              color="secondary"
              onChange={handleChange}
            />
          </StyledBox>
        ))}
      </Collapse>
      <StyledShowMore onClick={() => setShow(!show)}>
        {show ? "Show less" : "Show more"}
        {show ? (
          <RemoveIcon
            sx={{
              height: "10px",
            }}
          />
        ) : (
          <AddIcon
            sx={{
              height: "10px",
            }}
          />
        )}
      </StyledShowMore>
    </>
  );
};

export default Filter;
