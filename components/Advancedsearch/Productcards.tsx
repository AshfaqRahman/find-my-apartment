import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function LeftImageCard(props:any) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  };

  const mediaStyle = {
    minWidth: "200px",
    maxWidth: "200px",
    height: "20vh",
    margin: "10px",
  };

  return (
    <Card style={cardStyle}>
      <img style={mediaStyle} src={props.imageUrl} title={props.title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardContent>
      <CardContent>4 bed 1 bath</CardContent> 
    </Card>
  );
}