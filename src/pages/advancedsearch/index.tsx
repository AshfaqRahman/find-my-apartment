import { Box, Grid, Paper, styled } from "@mui/material";
import Filters from "components/Advancedsearch/Filters/Filters";
import List from "components/Advancedsearch/List/List";
import AddressForm from "components/checkout/AddressForm";
import Checkout from "components/checkout/Checkout";
import PaymentForm from "components/checkout/PaymentForm";
import Review from "components/checkout/Review";
import styles from "src/styles/Home.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function advancedSearch() {
  return (
    <>
      <div className={styles.mt50}>
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Item><Filters/></Item>
          </Grid>
          <Grid xs={8}>
            <Item><List/></Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default advancedSearch;
