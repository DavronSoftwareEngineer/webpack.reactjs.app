import { Box, CssBaseline } from '@mui/material';
import React from 'react'
import PrimaryAppBar from './page/AppBar';
import Footer from './page/Footer';
import Section1 from './page/Section1';
import Section2 from './page/Section2';
import Section3 from './page/Section3';
import Section4 from './page/Section4';
import Section5 from './page/Section5';

export default function App() {
  return (
    <Box className='App'>
        <CssBaseline/>
        <PrimaryAppBar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </Box>
  )
}
