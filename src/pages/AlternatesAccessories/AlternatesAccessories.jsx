import React from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ExtensionIcon from '@mui/icons-material/Extension';
import {
    Box,
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import img01 from "../../../src/images_React/01.jpeg"
import img02 from "../../../src/images_React/02.jpeg"
import img03 from "../../../src/images_React/03.jpeg"

const AlternatesAccessories = () => {
    const alternates = [
        { name: 'Dual', img: img01 },
        { name: 'Hands free', img: img02 },
        { name: 'Scanlock', img: img01 },
        { name: 'Single', img: img02 },
        { name: 'Core R', img: img01 },
        { name: 'Core S', img: img02 },
        { name: 'Summit', img: img01 },
        { name: 'Surface Mount', img: img02 },
        { name: 'L10', img: img03 },
    ];
    const accessories = [
        { name: 'Dual', img: img01 },
        { name: 'Hands free', img: img02 },
        { name: 'Scanlock', img: img03 },
        { name: 'Single', img: img02 },
        { name: 'Core R', img: img01 },
        { name: 'Core S', img: img03 },
    ];
    return (
        <>
            <Grid item xs={12} md={12} lg={12}>
                <Box mb={3} sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                    mt: 3,
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <CompareArrowsIcon sx={{
                                backgroundColor: '#6a1b9a',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                color: 'white',
                                padding: '2px',
                                height: '1.8rem',
                                width: '1.8rem',
                                borderRadius: '50%',
                                mr: 1,
                                cursor: 'pointer'
                            }} />
                            Product Alternates
                        </Typography>
                        <Box>
                            <IconButton
                                sx={{
                                    backgroundColor: '#6a1b9a',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    color: 'white',
                                    padding: '2px',
                                    height: '1.8rem',
                                    width: '1.8rem',
                                    borderRadius: '20%',
                                    mr: 1,
                                    cursor: 'pointer',
                                    mr: 1
                                }}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <ExpandLessIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display="flex" gap={2} flexWrap="wrap">
                        {alternates.map((item, index) => (
                            <Box key={index} sx={{ background: '#363640ff', p: 1.5, borderRadius: 2, textAlign: 'center' }}>
                                <img src={item.img} alt={item.name} style={{ width: 60, height: 60 }} />
                                <Typography variant="body2" mt={1} sx={{
                                    fontSize: '0.6rem'
                                }}>{item.name} </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Box mb={3} sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                    mt: 3
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <ExtensionIcon sx={{
                                backgroundColor: '#6a1b9a', // light purple
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                color: 'white',
                                padding: '2px',
                                height: '1.8rem',
                                width: '1.8rem',
                                borderRadius: '50%',
                                mr: 1,
                                cursor: 'pointer'
                            }} />
                            Product Accessories
                        </Typography>
                        <Box>
                            <IconButton
                                sx={{
                                    backgroundColor: '#6a1b9a', 
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    color: 'white',
                                    padding: '2px',
                                    height: '1.8rem',
                                    width: '1.8rem',
                                    borderRadius: '20%',
                                    mr: 1,
                                    cursor: 'pointer',
                                    mr: 1
                                }}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <ExpandLessIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display="flex" gap={2} flexWrap="wrap">
                        {accessories.map((item, index) => (
                            <Box key={index} sx={{ background: '#363640ff', p: 1.5, borderRadius: 2, textAlign: 'center' }}>
                                <img src={item.img} alt={item.name} style={{ width: 60, height: 60 }} />
                                <Typography variant="body2" mt={1} sx={{
                                    fontSize: '0.6rem'
                                }}>{item.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default AlternatesAccessories
