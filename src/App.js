
import './App.css';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

import ResponsiveAppBar from './example/ResponsiveAppBar'
// import Datatable from './example/dataTable'

function App() {
  return (
    <>
      {/* <div className="App">
    <Stack spacing={2} direction="row" className='button'>
      <Button variant="text">Button1</Button>
      <Button variant="contained">Button2</Button>
      <Button variant="outlined">Button3</Button>
        </Stack>
      </div>
          <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge> */}
<Datatable/>
{/* <ResponsiveAppBar/> */}
    </>

  );
}

export default App;
