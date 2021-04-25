import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/id";

//REDUX
import { useSelector } from "react-redux";

//Material Ui Components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';


//Styled Components
const TitleDate = styled.p`
  color: #424749;
  font-size: 18px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const TitleRating = styled.p`
  color: #6e7679;
  font-size: 14px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

const TitleFood = styled.p`
  color: #424749;
  font-size: 16px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
`;

const TitlePenjual = styled.p`
  color: #6e7679;
  font-size: 12px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
`;

const TitleHarga = styled.p`
  color: #424749;
  font-size: 18px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  margin-top: 5px;
`;


const CustomCard = styled.div`
  width: 100%;
  background-color: #ffff;
  border-radius: 5px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  margin: 20px 0px
`;

function ScrollPage() {
  const { datePicked, dataMenu } = useSelector((state) => {
    return {
      datePicked: state.CateringReducer.pickedDate,
      dataMenu: state.CateringReducer.dataCatering,
    };
  });

  return (
    <div>
      <Grid container style={{ padding: "8% 5%" }}>
        <Grid item xs={12}>
          <TitleDate>
            {moment(datePicked).locale("id").format("dddd")},
            {moment(datePicked).locale("id").format("Do MMMM YYYY")}
          </TitleDate>
        </Grid>
        <Grid item xs={12}>
          {dataMenu.map((item, index) => {
            return (
              <CustomCard key={index}>
                <Grid
                  item
                  xs={12}
                  style={{
                    backgroundImage: `url(${item.gambar})`,
                    height: "30vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: '5px 5px 0px 0px'
                  }}
                ></Grid>
                <Grid container style={{padding: '15px 20px'}}>
                  <Grid item xs={1}>
                    <TitleRating>{item.ratingMakanan}</TitleRating>
                  </Grid>
                  <Grid item xs={11}>
                    <Rating defaultValue={item.ratingMakanan} precision={0.5} style={{fontSize: '18px', color: '#f9423a'}}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TitleFood>{item.namaMakanan}</TitleFood>
                  </Grid>
                  <Grid item xs={12}>
                    <TitlePenjual>{item.penjual}</TitlePenjual>
                  </Grid>
                  <Grid container style={{marginTop: '20px'}}>
                    <Grid item xs={8}>
                        <TitleHarga>Rp. {(item.harga).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')}</TitleHarga>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" style={{width: '100%', fontFamily: '"Open Sans", sans-serif', fontSize: '14px', fontWeight: 'bolder'}}>Add +</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CustomCard>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default ScrollPage;
