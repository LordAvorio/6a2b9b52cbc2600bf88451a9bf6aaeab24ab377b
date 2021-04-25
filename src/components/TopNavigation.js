import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import moment from "moment";
import "moment/locale/id";


//REDUX
import { useSelector, useDispatch } from "react-redux";

//ACTION
import {chooseMenu, openModalLocation} from "../action/"

//Material Ui Components
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

//Icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

//Multi Carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 7,
  },
};

//Styled Components

const Title1 = styled.p`
  color: #6e7679;
  font-size: 8px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

const DateTitle1 = styled.p`
  font-size: 8px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #424749;
  text-align: center;
`;

const DateTitle2 = styled.p`
  font-size: 12px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  color: #424749;
  text-align: center;
`;

const DateTitle3 = styled.p`
  font-size: 8px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #e2e4e4;
  text-align: center;
`;

const DateTitle4 = styled.p`
  font-size: 12px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  color: #f1f1f2;
  text-align: center;
`;

const ButtonActive = styled.button`
  width: 100%;
  border: 1px solid #f1f1f2;
  background-color: #424749;
  color: #ffff;
  font-family: "Open Sans", sans-serif;
  padding: 6px;
  font-weight: bold;
`;

const ButtonNotActive = styled.button`
  width: 100%;
  border: 1px solid #f1f1f2;
  background-color: #ffff;
  color: #6e7679;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  padding: 6px;
`;

export default function TopNavigation() {
  const [foodTime, setFoodTime] = useState("Lunch");
  const [pilihWaktuMakan, setPilihWaktuMakan] = useState("2021-03-8")

  const dispatch = useDispatch();

  const { listDate, pickedDate, pickedTypeMenu } = useSelector((state) => {
    return {
      listDate: state.CateringReducer.dataDate,
      pickedDate: state.CateringReducer.pickedDate,
      pickedTypeMenu: state.CateringReducer.pickedTypeFood
    };
  });

  const handleOpenModalLocation = () => {
    dispatch(openModalLocation())
  }

  const setLunch = () => {
    setFoodTime("Lunch");
    let waktuMakan = "Lunch"
    dispatch(chooseMenu(waktuMakan,pickedDate))
  };

  const setDinner = () => {
    setFoodTime("Dinner");
    let waktuMakan = "Dinner"
    dispatch(chooseMenu(waktuMakan,pickedDate))
  };

  const chooseDay = (tanggal) => {
    setPilihWaktuMakan(tanggal)
    dispatch(chooseMenu(pickedTypeMenu,tanggal))
  }

  

  return (
    <div>
      <AppBar position="fixed" style={{backgroundColor: '#ffff'}}>
        <Grid container style={{ padding: "6px 2px" }}>
          <Grid item xs={2}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10} style={{ padding: "6px 0px" }}>
            <Grid item xs={12}>
              <Title1>ALAMAT PENGANTARAN</Title1>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                endIcon={<KeyboardArrowDownIcon color="primary" />}
                style={{
                  padding: "0px",
                  color: "#424749",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
                onClick={() => handleOpenModalLocation()}
              >
                Tokopedia Tower
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: "0% 4%", paddingBottom: "3%" }}>
            <Carousel
              responsive={responsive}
              swipeable={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {listDate.map((item, index) => {
                return (
                  <Card
                    key={index}
                    style={{
                      margin: "1px 4px",
                      borderRadius: "25px",
                      padding: "8px",
                    }}
                  >
                    {item.status === "active" ? (
                      <CardActionArea onClick={() => chooseDay(item.tanggal)}>
                        <Grid item xs={12}>
                          <DateTitle1>{item.simpleDateName}</DateTitle1>
                        </Grid>
                        <Grid item xs={12}>
                          <DateTitle2>
                            {moment(item.tanggal).format("D")}
                          </DateTitle2>
                        </Grid>
                      </CardActionArea>
                    ) : (
                      <CardActionArea>
                        <Grid item xs={12}>
                          <DateTitle3>{item.simpleDateName}</DateTitle3>
                        </Grid>
                        <Grid item xs={12}>
                          <DateTitle4>
                            {moment(item.tanggal).format("D")}
                          </DateTitle4>
                        </Grid>
                      </CardActionArea>
                    )}
                  </Card>
                );
              })}
            </Carousel>
          </Grid>
          <Grid container style={{ margin: "2px 18px" }}>
            <Grid item xs={6}>
              {foodTime === "Lunch" ? (
                <>
                  <ButtonActive
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    onClick={() => setLunch()}
                  >
                    Lunch
                  </ButtonActive>
                </>
              ) : (
                <>
                  <ButtonNotActive
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    onClick={() => setLunch()}
                  >
                    Lunch
                  </ButtonNotActive>
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              {foodTime === "Dinner" ? (
                <>
                  <ButtonActive
                    style={{ borderRadius: "0px 5px 5px 0px" }}
                    onClick={() => setDinner()}
                  >
                    Dinner
                  </ButtonActive>
                </>
              ) : (
                <>
                  <ButtonNotActive
                    style={{ borderRadius: "0px 5px 5px 0px" }}
                    onClick={() => setDinner()}
                  >
                    Dinner
                  </ButtonNotActive>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
