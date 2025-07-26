import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper,
    Chip,
    IconButton,
    Container
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MemoryIcon from "@mui/icons-material/Memory";
import StraightenIcon from "@mui/icons-material/Straighten";
import PaidIcon from "@mui/icons-material/Paid";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import img01 from "../../../src/images_React/01.jpeg"
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ProductBaseProperties = () => {
    const trackingData = [
        { batch: "2873416", serial: "1124532" },
        { batch: "2873416", serial: "1124532" },
        { batch: "2873416", serial: "1124532" },
        { batch: "2873416", serial: "1124532" },
        { batch: "0903499", serial: "5524432" },
        { batch: "0903499", serial: "5524432" },
    ];



    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                }}
            >
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton
                            sx={{
                                backgroundColor: '#6a1b9a', // light purple
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                color: 'white'
                            }}>
                            <BuildRoundedIcon />
                        </IconButton>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Product Base Properties
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton><RefreshIcon sx={{ color: 'white' }} /></IconButton>
                        <IconButton><ContentCopyIcon sx={{ color: 'white' }} /></IconButton>
                            <IconButton
                                sx={{
                                    backgroundColor: '#6a1b9a', // light purple
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    color: 'white',
                                    padding: '2px',
                                    height: '1.8rem',
                                    width: '1.8rem',
                                    borderRadius: '20%',
                                    cursor: 'pointer',
                                }}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <ExpandLessIcon fontSize="medium" />
                            </IconButton>
                    </Box>
                </Box>

                {/* Product Info */}
                <Grid container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around'


                    }}
                >
                    <Grid item xs={12} md={6} lg={6} sx={{ pl: 0 }}>


                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,

                            }}
                        >
                            <Grid xs={12} md={6} lg={6}>
                                {/* Image Box */}
                                <Box
                                    sx={{
                                        backgroundColor: '#1e1e2f',
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        minHeight: '200px',
                                    }}
                                >
                                    <img
                                        src={img01}
                                        alt="product"
                                        style={{ width: '8rem', marginBottom: '10px', height: '10rem', marginTop: '1.5rem', borderRadius: '1rem' }}
                                    />
                                    <Typography variant="body2" color="white">
                                        Surface Mount
                                    </Typography>
                                </Box>
                            </Grid >
                            <Grid xs={12} md={6} lg={6}>
                                {/* Details Box */}
                                <Box>
                                    <Typography variant="caption" color="#aaa">
                                        Inventory Class*
                                    </Typography>
                                    <Typography

                                        sx={{ mt: 0.5, backgroundColor: '#35353cff', color: 'white', fontSize: '0.7rem', borderRadius: '0.3rem', textAlign: 'center', border: '1px' }}
                                    >
                                        Pre Production
                                    </Typography>
                                    <Typography variant="caption" color="#aaa" mt={2} display="block">
                                        Part Number*
                                    </Typography>
                                    <Typography variant="body2">022134</Typography>
                                    <Typography variant="caption" color="#aaa" mt={2} display="block">
                                        Line*
                                    </Typography>
                                    <Typography variant="body2">Carbide</Typography>
                                    <Typography variant="caption" color="#aaa" mt={2} display="block">
                                        QR Code
                                    </Typography>
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?data=SurfaceMount&size=80x80"
                                        alt="QR"
                                        style={{ marginTop: 4 }}
                                    />
                                </Box>
                            </Grid>


                        </Box>
                    </Grid>





                    <Grid item xs={12} md={6} lg={3}>
                        <Box>
                            <Typography variant="caption" color="#aaa">
                                SKU(ID)
                            </Typography>
                            <Typography variant="body2">2876512</Typography>

                            <Typography variant="caption" color="#aaa" mt={2} display="block">
                                Category*
                            </Typography>
                            <Typography variant="body2">Lighting</Typography>

                            <Typography variant="caption" color="#aaa" mt={2} display="block">
                                Series
                            </Typography>
                            <Typography variant="body2">Surface Mount</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Box>
                            <Typography variant="caption" color="#aaa" mt={2} display="block">
                                Product Type*
                            </Typography>
                            <Typography variant="body2">Spare Part</Typography>
                            <Typography variant="caption" color="#aaa" mt={2} display="block">
                                Family*
                            </Typography>
                            <Typography variant="body2">Illumination</Typography>
                            <Typography variant="caption" color="#aaa" mt={2} display="block">
                                Warranty
                            </Typography>
                            <Typography variant="body2">
                                05 Years{' '}
                                <Box component="span" sx={{ color: '#5d5dc1ff' }}>
                                    10WAR-02
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>

                {/* Description Section */}
                <Box mt={3}>
                    <Typography variant="caption" color="#aaa">
                        Description
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volupta.
                    </Typography>

                    <Typography variant="caption" color="#aaa" mt={2} display="block">
                        Long Description
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
                    </Typography>

                    <Typography variant="caption" color="#aaa" mt={2} display="block">
                        Marketing Description
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
                    </Typography>
                </Box>
            </Paper>



            <Paper
                sx={{
                    backgroundColor: "#2a2a3b",
                    borderRadius: 2,
                    p: 3,
                    color: "white",
                    mb: 3,
                    mt: 3,
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ display: "flex", alignItems: "center", fontWeight: 600 }}
                        >
                            <TrackChangesIcon sx={{
                                backgroundColor: '#6a1b9a', // light purple
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                color: 'white',
                                padding: '2px',
                                height: '1.8rem',
                                width: '1.8rem',
                                borderRadius: '50%',
                                mr: 1
                            }} />
                            Product Tracking Details
                        </Typography>
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
                            <IconButton sx={{ color: "white" }}>
                                <ExpandLessIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* <Box>
                        <IconButton sx={{ border: "1px solid #555", color: "white", mr: 1 }}>
                            <ExpandMoreIcon fontSize="small" />
                        </IconButton>
                        <IconButton sx={{ border: "1px solid #555", color: "white" }}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Box> */}
                </Box>

                {/* Data Grid */}
                <Grid container spacing={2}>
                    {trackingData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    border: "1px solid #444",
                                    borderRadius: 1.5,
                                    p: 2,
                                    backgroundColor: "#2f2f3d",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* Left: Batch Number */}
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#aaa", fontSize: "0.75rem" }}
                                    >
                                        Batch Number
                                    </Typography>
                                    <Typography fontWeight={600} sx={{ fontSize: "0.6rem" }}>
                                        {item.batch}
                                    </Typography>
                                </Box>

                                {/* Right: Serial Number */}
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#aaa", fontSize: "0.75rem" }}
                                    >
                                        Serial Number
                                    </Typography>
                                    <Typography fontWeight={600} sx={{ fontSize: "0.6rem" }}>
                                        {item.serial}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>



            {/* <Box>
                {cards.map((card, index) => (
                    <Paper
                        key={index}
                        sx={{
                            backgroundColor: "#2a2a3b",
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            mt: 3,
                            color: "white",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center", fontWeight: 600 }}>
                                {card.icon}
                                {card.title}
                            </Typography>

                            <Box>
                                <IconButton sx={{ border: "1px solid #555", color: "white", mr: 1 }}>
                                    <ExpandMoreIcon fontSize="small" />
                                </IconButton>
                                <IconButton sx={{ border: "1px solid #555", color: "white" }}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>

                        <Grid container spacing={2}>
                            {card.data.map((item, i) => (
                                <Grid key={i} item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" color="#aaa">
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold">
                                        {item.value}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                ))}
            </Box>  */}




            {/* 
            <Grid item xs={12} md={12} lg={12}>
                <Box mb={3} sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                    mt: 3
                }}>
                    <Typography variant="h6" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        🧩 Product Accessories
                    </Typography>
                    <Box display="flex" gap={2} flexWrap="wrap">
                        {accessories.map((item, index) => (
                            <Box key={index} sx={{ background: '#2d2d3d', p: 1.5, borderRadius: 2, textAlign: 'center' }}>
                                <img src={item.img} alt={item.name} style={{ width: 60, height: 60 }} />
                                <Typography variant="body2" mt={1}>{item.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid> */}


            {/* product option  */}
            {/* <Grid item xs={12} md={12} lg={12}>
                <Box mb={3} sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                    mt: 3
                }}>
                    <Typography variant="h6" mb={1}>🎨 Product Options</Typography>
                    <Typography variant="body2" mb={1}>Colors*</Typography>
                    <Box display="flex" gap={2}>
                        {colors.map((color, idx) => (
                            <Box key={idx} sx={{ width: 28, height: 28, borderRadius: '20%', background: color }} />
                        ))}
                    </Box>
                </Box>

                <Box mb={2}
                    sx={{
                        backgroundColor: '#2a2a3b',
                        borderRadius: 2,
                        color: 'white',
                        p: 3,
                        mt: 3
                    }}>
                    <Typography variant="body2" mb={1}>Dimensions*</Typography>
                    <Box display="flex" gap={2}>
                        {dimensions.map((dim, idx) => (
                            <Chip key={idx} label={`${dim} (cm)`} sx={{ background: '#2d2d3d', color: 'white' }} />
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#2a2a3b',
                        borderRadius: 2,
                        color: 'white',
                        p: 3,
                        mt: 3
                    }}>
                    <Typography variant="body2" mb={1}>Control</Typography>
                    <Box display="flex" gap={2}>
                        {controls.map((control, idx) => (
                            <Chip key={idx} label={control} sx={{ background: '#2d2d3d', color: 'white' }} />
                        ))}
                    </Box>
                </Box>
            </Grid> */}


            {/* Table Data  */}
            {/* <Box
                sx={{
                    backgroundColor: '#2a2a3b',
                    borderRadius: 2,
                    color: 'white',
                    p: 3,
                    mt: 3
                }}
            >
                <Typography variant="h6" mb={1}>
                    📁 Product Asset Management
                </Typography>
                <TableContainer component={Paper} sx={{ background: '#1e1e2f', borderRadius: 2 }}>
                    <Table size="small" sx={{ borderCollapse: 'collapse' }}>
                        <TableHead>
                            <TableRow
                                sx={{
                                    background: 'linear-gradient(90deg, #664e9bff, #8743fd)'
                                }}
                            >
                                {['S.No.', 'Image', 'Image Info', 'Image URL', 'Action'].map((head, idx) => (
                                    <TableCell
                                        key={idx}
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            border: '1px solid #444'
                                        }}
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assetData.map((item, idx) => (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ color: 'white', border: '1px solid #444', textAlign: 'center' }}>{item.id}</TableCell>
                                    <TableCell sx={{ border: '1px solid #444' }}>
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="asset"
                                            style={{ borderRadius: 4, textAlign: 'center' }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', border: '1px solid #444' }}>{item.info}</TableCell>
                                    <TableCell sx={{ color: 'white', border: '1px solid #444' }}>
                                        <a
                                            href="https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ color: '#4ba6fa', textDecoration: 'none', textAlign: 'center' }}
                                        >
                                            https://Company.widen.net/... <OpenInNewIcon fontSize="inherit" />
                                        </a>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #444' }}>
                                        <Tooltip title="Edit">
                                            <IconButton sx={{ border: '1px solid #aaa', color: 'white', mr: 1 }}>
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton sx={{ border: '1px solid #aaa', color: 'white' }}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box> */}


        </>
    );
};

export default ProductBaseProperties;
