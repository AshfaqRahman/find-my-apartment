import { Box, Grid, Paper, styled } from "@mui/material";
import Filters from "components/Advancedsearch/Filters/Filters";
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
        gridTemplateColumns: "20% 1fr",
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
