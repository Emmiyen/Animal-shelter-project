import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PetsIcon from '@mui/icons-material/Pets';




export default function Button() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended">
        <PetsIcon color='primary' sx={{ mr: 1 }} />
        I'm intrested!
      </Fab>
    </Box>
  );
}