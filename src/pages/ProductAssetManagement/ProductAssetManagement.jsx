import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Paper,
    Chip,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import img01 from "../../../src/images_React/01.jpeg"

const ProductAssetManagement = () => {
    const assetData = [
        { id: 1, info: 'Front view' },
        { id: 2, info: 'Back View' },
        { id: 3, info: 'Top angle view' },
        { id: 4, info: 'Bottom angle View' },
        { id: 5, info: 'Left angle View' },
    ];
    return (
        <>
             <Box
            sx={{
                backgroundColor: '#2a2a3b',
                borderRadius: 2,
                color: 'white',
                p: 3,
                mt: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Typography variant="h6" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Inventory2Icon
                        sx={{
                            backgroundColor: '#6a1b9a',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                            color: 'white',
                            padding: '2px',
                            height: '1.8rem',
                            width: '1.8rem',
                            borderRadius: '50%',
                            mr: 1,
                            cursor: 'pointer',
                        }}
                    />
                    Product Asset Management
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
                        }}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <ExpandLessIcon fontSize="medium" />
                    </IconButton>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={{ background: '#1e1e2f', borderRadius: 2 }}>
                <Table size="small" sx={{ borderCollapse: 'collapse' }}>
                    <TableHead>
                        <TableRow sx={{ background: 'linear-gradient(90deg, #664e9bff, #8743fd)' }}>
                            {['S.No.', 'Image', 'Image Info', 'Image URL', 'Action'].map((head, idx) => (
                                <TableCell
                                    key={idx}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {head}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assetData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell
                                    sx={{
                                        color: 'white',
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {item.id}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <img
                                        src={img01}
                                        alt="asset"
                                        style={{ borderRadius: 4, width:'4rem'}}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        color: 'white',
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {item.info}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        color: 'white',
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <a
                                        href="https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: '#4ba6fa',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        https://Company.widen.net/... <OpenInNewIcon fontSize="inherit" />
                                    </a>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: '1px solid #444',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Tooltip title="Edit">
                                        <IconButton
                                            sx={{
                                                border: '1px solid black',
                                                color: 'white',
                                                mr: 1,
                                                borderRadius:'10%'
                                            }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            sx={{
                                                border: '1px solid red',
                                                color: 'red',
                                                borderRadius:'10%'
                                            }}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </>
    )
}

export default ProductAssetManagement
