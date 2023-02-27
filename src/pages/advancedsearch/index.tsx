import Result from "components/Advancedsearch/Result";
import Appbar from "components/Appbar";
import Review from "components/checkout/Review";
import React from "react";


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
                    <Review />
                </div>
                <div style={styles.columnRight}>
                    <Result />
                </div>
            </div>
        </>
    );
};

export default advancedSearch;
