import React from 'react'
import { Box, Grid, Paper } from '@mui/material';
import TopBar from '../TopBar/TopBar'
import ProductBaseProperties from '../ProductBaseProperties/ProductBaseProperties'
import SideBar from '../SideBar/SideBar'
import MetadataAttributes from '../MetadataAttributes/MetadataAttributes';
import ProductVehiclesTable from '../ProductVehiclesTable/ProductVehiclesTable';
import AlternatesAccessories from '../AlternatesAccessories/AlternatesAccessories';
import ProductOptions from '../ProductOptions/ProductOptions';
import ProductAssetManagement from '../ProductAssetManagement/ProductAssetManagement';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', height: 'auto', backgroundColor: '#151521' }}>
      <SideBar />
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <Box p={3}>
          <ProductBaseProperties />
          <Box mt={3}>
            <MetadataAttributes />
          </Box>
          <Box mt={3}>
            <ProductVehiclesTable />
          </Box>
          <Box mt={3}>
            <AlternatesAccessories />
          </Box>
          <Box mt={3}>
            <ProductOptions />
          </Box>
          <Box mt={3}>
            <ProductAssetManagement />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
