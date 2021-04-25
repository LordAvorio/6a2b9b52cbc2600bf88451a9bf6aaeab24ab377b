import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import { closeModalCart } from "../action/";

//Material Ui Components
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CustomCard = styled.div`
  background-color: #a23530;
  border-radius: 5px;
  position: fixed;
  bottom: 15px;
  width: 90%;
`;

const Title1 = styled.p`
  color: #ffff;
  font-size: 12px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  margin-bottom: 2px;
`;

const Title2 = styled.p`
  color: #ffff;
  font-size: 10px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 5px;
`;

function ModalCart() {
  const dispatch = useDispatch();

  const { TriggerModal } = useSelector((state) => {
    return {
      TriggerModal: state.CateringReducer.triggerModalCart,
    };
  });

  const menu_variants = {
    open: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const handleModalClose = () => {
      dispatch(closeModalCart())
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={TriggerModal === "True" ? "open" : "hidden"}
      >
        <motion.div variants={menu_variants}>
          <Grid container>
            <Grid item xs={12} style={{ padding: "18px" }}>
              <CustomCard style={{ padding: "4px 10px" }}>
                <Grid container>
                  <Grid item xs={10}>
                    <Grid item xs={12}>
                      <Title1>5 Items | Rp 125,000</Title1>
                    </Grid>
                    <Grid item xs={12}>
                      <Title2>Termasuk ongkos kirim</Title2>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} style={{ padding: "4px 10px" }}>
                    <IconButton
                      style={{ padding: "2px", color: "#ffff" }}
                      onClick={() => handleModalClose()}
                    >
                      <ShoppingCartIcon style={{ textAlign: "center" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </CustomCard>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ModalCart;
