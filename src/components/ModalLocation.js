import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import "../css/ModalLocation.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {closeModalLocation} from "../action/"


//Material Ui Components
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";

const CustomCard = styled.div`
  width: 100%;
  background-color: #ffff;
  border-radius: 10px 10px 0px 0px;
  position: fixed;
  bottom: 0px;
`;

const Title1 = styled.p`
  color: #424749;
  font-size: 20px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  margin-bottom: 5px;
`;

function ModalLocation() {
  const dispatch = useDispatch();

  const { TriggerModal } = useSelector((state) => {
    return {
        TriggerModal: state.CateringReducer.triggerModalLocation,
    };
  });

  const menu_variants = {
    open: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const handleCloseModal = () => {
      dispatch(closeModalLocation())
  }

  

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={TriggerModal === "True" ? "open" : "hidden"}
      >
        <motion.div variants={menu_variants}>
          <Grid container>
            <Grid item xs={12}>
              <CustomCard style={{ padding: "20px" }}>
                <Grid container>
                  <Grid item xs={11}></Grid>
                  <Grid item xs={1}>
                    <IconButton
                      style={{ padding: "2px", marginBottom: "25px" }}
                      onClick={() => handleCloseModal()}
                    >
                      <CloseIcon style={{ textAlign: "center" }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10}>
                    <Title1>Cek makanan yang tersedia di lokasi kamu !</Title1>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
                <Grid item xs={12}>
                  <OutlinedInput
                    style={{ width: "100%", margin: "18px 0px" }}
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    }
                  />
                </Grid>
              </CustomCard>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ModalLocation;
