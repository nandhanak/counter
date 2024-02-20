import { Box, Container, Stack, Typography } from '@mui/material'

import React from 'react'



export default function Todo({todo}) {
  return (
    <div>
<Container>
<Stack flexDirection={'row'}justifyContent={'space-between'} width={600} sx={{backgroundColor:'purple',color:'white',paddingRight:5,paddingLeft:5,border:1 }}>
    <Typography sx={{fontSize:13}}>{todo}</Typography>
    <Box >
    <button sx={{marginleft:2}}>delete</button>
    <button>reverce</button>
    </Box>

</Stack>
</Container>


    </div>
  )
}
