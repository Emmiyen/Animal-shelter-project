import React, {useState, useEffect} from "react";
import Button from "./Button";
import "./SingleCard.css";

function SingleCard({ data }) {
  return (
    <div className='containerBody'>
      {data?.map((item, i) => (
        <div className='card'>
          <div className='card-side front'>
            <div className='front-content'>
              <img src={item?.photos} alt='animalPicture' />

              <h1 className='animal-name'>{item?.name}</h1>

              <p className='animal-description'>{item?.description}</p>
              <Button />
            </div>
          </div>
          <div className='card-side back'>
            <div>
              <img className='backImg' src={item?.photos} alt='animal pic' />
            </div>

            <div className='animal-info'>
              <h1 className='animal-name'>{item?.name}</h1>
              <p>Age: {item?.age}</p>
              <p>Size: {item?.size}</p>
              <p>Gender: {item?.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleCard;




// import React, { useState, useEffect } from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import PetsIcon from '@mui/icons-material/Pets';
// // import axios from "axios";



// const SingleCard=() =>{

//   const [cardData, setCardData] = useState([]);
//   const [visible, setVisible] = useState(1);


//     const allCardData = async () => {
//       const res = await fetch(require("../data/api.JSON"));
//       setCardData(res.formData.results);
//     };
   

//   const loadMore = () => {
//     setVisible(visible + 1);
//   };

//   useEffect(() => {
//     allCardData();
//   }, []);

//   const renderCard = (animal, index) => {
//     return (
//     <div className='containerBody'>
//       {animal?.map((item, i) => (
//         <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           image={animal?.photos}
//           alt="animal"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//           {animal?.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//           {animal?.description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab variant="extended">
//         <PetsIcon onClick={loadMore} color='primary' sx={{ mr: 1 }} />
//         I'm intrested!
//       </Fab>
//     </Box>
//         </CardActions>
//       </Card>
//       ))}

//     </div>
//   );
// };
// return (
//   <div className="singleCard">
//     <div className="wrapper">
//       <div className="cards">
//         {cardData.slice(0, visible).map(renderCard)}
//       </div>
//     </div>
//     {visible < cardData.length && (
//       <button onClick={loadMore}>Load 5 More</button>
//     )}
//   </div>
// );

// }

// export default SingleCard;