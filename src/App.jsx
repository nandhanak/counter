import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function A() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count+1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("You Have Reached 0");
    }
  };  
  



  return (
    <Container
      sx={{
        bgcolor: '#1a82d8',
        height: '60vh',
        width: '45vw',
        margin: '10vh auto',
        paddingTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="counterBox"
        sx={{
          bgcolor: 'white',
          height: '20vh',
          width: '35vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '10px 5px 5px #b92d2d',
        }}
      >
        <Typography variant="h1" component="h2" sx={{ fontSize: '4rem' }}>
          {count}
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} sx={{ paddingBottom: '10vh' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={decrementCount}
          disabled={count === 0}
        >
          Decrement -
        </Button>
        <Button variant="contained" color="secondary" onClick={incrementCount}>
          Increment +
        </Button>
      </Stack>
    </Container>
  );
}