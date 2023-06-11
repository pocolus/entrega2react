
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 180 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" color="darkred" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body" color="black">
        {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>

        <Button 
        variant="contained"
        >
          Ver
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

