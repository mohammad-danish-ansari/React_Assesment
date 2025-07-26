import React from "react";
import {
    Box,
    Grid,
    Typography,
    Paper,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MemoryIcon from "@mui/icons-material/Memory";
import StraightenIcon from "@mui/icons-material/Straighten";
import PaidIcon from "@mui/icons-material/Paid";

const MetadataAttributes = () => {
    const cards = [
        {
            title: "Product Metadata Attributes",
            icon: <MemoryIcon sx={{
                backgroundColor: '#6a1b9a', // light purple
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                color: 'white',
                padding: '2px',
                height: '1.8rem',
                width: '1.8rem',
                borderRadius: '50%',
                mr: 1,
                cursor: 'pointer'
            }} />,
            columnsPerRow: 12, // 12 / 4 = 3 items per row
            data: [
                { label: "Foot Type", value: "E-Z" },
                { label: "Foot Distance", value: "51.25cm, 52.75cm, 68.34cm" },
                { label: "Technology", value: "SmartLED, Linear Super-LED, TRIO" },
                { label: "Height", value: "17.8cm, 24.9cm, 32.4cm" },
                { label: "Hardware", value: "22 AWG, 33 AWG, 37 AWG" },
            ],
        },
        {
            title: "Product Dimension and Power",
            icon: <StraightenIcon sx={{
                backgroundColor: '#6a1b9a', // light purple
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                color: 'white',
                padding: '2px',
                height: '1.8rem',
                width: '1.8rem',
                borderRadius: '50%',
                mr: 1,
                cursor: 'pointer'
            }} />,
            columnsPerRow: 3, // 12 / 3 = 4 items per row
            data: [
                { label: "Height", value: "31.75 cm" },
                { label: "Width", value: "52 cm" },
                { label: "Depth", value: "19.5 cm" },
                { label: "Weight", value: "63 kg" },
                { label: "Voltage", value: "12 v" },
                { label: "Power Rating", value: "300 w" },
            ],
        },
        {
            title: "Product Financials",
            icon: <PaidIcon sx={{
                backgroundColor: '#6a1b9a', // light purple
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                color: 'white',
                padding: '2px',
                height: '1.8rem',
                width: '1.8rem',
                borderRadius: '50%',
                mr: 1,
                cursor: 'pointer'
            }} />,
            columnsPerRow: 3, // 4 per row
            data: [
                { label: "Material Cost", value: "$175.23" },
                { label: "Labor Cost", value: "$291.46" },
                { label: "Process Cost", value: "$66.21" },
                { label: "Misc. Cost", value: "$15.49" },
                { label: "Last Price", value: "$1,875.23" },
            ],
        },
    ];

    return (
        <Box>
            {cards.map((card, index) => (
                <Paper
                    key={index}
                    sx={{
                        backgroundColor: "#2a2a3b",
                        borderRadius: 2,
                        p: 3,
                        mb: 3,
                        color: "white",
                    }}
                >
                    {/* Header */}
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
                            {card.icon}
                            {card.title}
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

                    {/* Grid Content */}
                    <Grid container spacing={2}  sx={{display:'flex', justifyContent:'space-between' }} >
                        {card.data.map((item, i) => (
                            <Grid key={i} item xs={12} sm={6} md={12 / card.columnsPerRow} sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <Box>

                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#aaa", fontSize: "0.75rem" }}
                                    >
                                        {item.label}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: "0.75rem",
                                            color: "white",
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                </Box>

                            </Grid>
                        ))}

                    </Grid>
                </Paper>
            ))}
        </Box>
    );
};

export default MetadataAttributes;
