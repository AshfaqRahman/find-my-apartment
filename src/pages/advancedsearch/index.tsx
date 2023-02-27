import { Box, Grid, Paper, styled } from "@mui/material";
import Area from "components/Advancedsearch/Filters/Area";
import Bath from "components/Advancedsearch/Filters/Bath";
import Bedroom from "components/Advancedsearch/Filters/Bedroom";
import Budget from "components/Advancedsearch/Filters/Budget";
import Facilities from "components/Advancedsearch/Filters/Facilities";
import Filters from "components/Advancedsearch/Filters/Filters";
import Mapsearch from "components/Advancedsearch/Filters/Mapsearch";
import Save_and_search from "components/Advancedsearch/Filters/Save_and_search";
import List from "components/Advancedsearch/List/List";
import Result from "components/Advancedsearch/Result";
import Appbar from "components/Appbar";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
    container: {
        display: "grid",
        padding: "10px",
        gridTemplateColumns: "25% 1fr",
    },
    columnLeft: {
        padding:"10px",
        borderRadius: "8px",
        backgroundColor: "#333131",
    },
    columnRight: {
        borderRadius: "8px",
    },
};


const advancedSearch = () => {
    return (
        <>
            <Appbar />
            <div style={styles.container}>
                <div style={styles.columnLeft}>
                  <Save_and_search />
                  {/* <Mapsearch /> */}
                  <Bedroom />
                  <Bath />
                  <Budget />
                  <Area />
                  <Facilities />
                  <Filters />
                  <List />
                </div>
                <div style={styles.columnRight}>
                    <Result />
                </div>
            </div>
        </>
    );
};

export default advancedSearch;
