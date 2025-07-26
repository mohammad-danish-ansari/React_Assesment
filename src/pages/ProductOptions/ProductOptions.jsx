import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Paper,
    Chip,
    IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import EditIcon from "@mui/icons-material/Edit";

const ProductOptions = () => {
    const colors = ['#8c4424', '#1c1b4d', '#22283b', '#e04843', '#f0ba6c'];

    const dimensions = ['12.4H × 18.4W', '22.4H × 28.4W', '42.4H × 48.6W'];

    const controls = ['WeCan', 'WeCanX'];
    return (
        <>
            <Grid item xs={12} md={12} lg={12}>
                <Box
                    sx={{
                        backgroundColor: '#2a2a3b',
                        borderRadius: 2,
                        mb: 2

                    }}>

                    <Box mb={3} sx={{
                        backgroundColor: '#424250ff',
                        borderRadius: 2,
                        color: 'white',
                        m: 2,
                        p: 2
                    }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Typography variant="h6" mb={1}>
                                <TuneIcon sx={{
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
                                Product Options</Typography>
                            <Box>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#6a1b9a', // light purple
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
                            </Box>
                        </Box>
                        <Typography variant="body2" mb={1}>Colors*</Typography>
                        <Box display="flex" gap={2}>
                            {colors.map((color, idx) => (
                                <Box key={idx} sx={{ width: 28, height: 28, borderRadius: '20%', background: color }} />
                            ))}
                        </Box>
                    </Box>

                    <Box mb={2}
                        sx={{
                            backgroundColor: '#424250ff',
                            borderRadius: 2,
                            color: 'white',
                            m: 2,
                            p: 2
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Typography variant="body2" mb={1}>Dimensions*</Typography>
                            <Box>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#6a1b9a', // light purple
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
                            </Box>
                        </Box>
                        <Box display="flex" gap={2}>
                            {dimensions.map((dim, idx) => (
                                <Chip key={idx} label={`${dim} (cm)`} sx={{ background: '#4d4d57ff', color: 'white' }} />
                            ))}
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: '#424250ff',
                            borderRadius: 2,
                            color: 'white',
                            m: 2,
                            p: 2,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Typography variant="body2" mb={1}>Control</Typography>
                            <Box>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#6a1b9a', // light purple
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
                            </Box>
                        </Box>
                        <Box display="flex" gap={2}>
                            {controls.map((control, idx) => (
                                <Chip key={idx} label={control} sx={{ background: '#4d4d57ff', color: 'white' }} />
                            ))}
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </>
    )
}

export default ProductOptions
