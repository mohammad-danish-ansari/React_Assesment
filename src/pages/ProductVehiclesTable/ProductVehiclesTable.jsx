import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ProductVehiclesTable = () => {
    const vehicleData = [
        {
            id: 29,
            make: 'BMW',
            model: '3 Series',
            year: 2025,
            trim: 'M340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 26,
            make: 'Toyota',
            model: '3 Series',
            year: 2025,
            trim: 'T340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 29,
            make: 'BMW',
            model: '3 Series',
            year: 2025,
            trim: 'M340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 26,
            make: 'Toyota',
            model: '3 Series',
            year: 2025,
            trim: 'T340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 29,
            make: 'BMW',
            model: '3 Series',
            year: 2025,
            trim: 'M340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 26,
            make: 'Toyota',
            model: '3 Series',
            year: 2025,
            trim: 'T340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 29,
            make: 'BMW',
            model: '3 Series',
            year: 2025,
            trim: 'M340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 26,
            make: 'Toyota',
            model: '3 Series',
            year: 2025,
            trim: 'T340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 29,
            make: 'BMW',
            model: '3 Series',
            year: 2025,
            trim: 'M340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
        {
            id: 26,
            make: 'Toyota',
            model: '3 Series',
            year: 2025,
            trim: 'T340i',
            trimDescription: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#2a2a3b',
                borderRadius: 2,
                color: 'white',
                p: 3,
                mt: 3,
            }}
        >
            {/* Header with Icon and Actions */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                    <DriveEtaIcon sx={{
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
                    <Typography variant="h6">Product Vehicles</Typography>
                </Box>
                <Box>
                    <IconButton sx={{
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
                        <AddIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                        <ExpandLessIcon fontSize="medium" />
                    </IconButton>
                </Box>
            </Box>

            {/* Table */}
            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: '#1e1e2f',
                    borderRadius: 2,
                }}
            >
                <Table size="small" sx={{ borderCollapse: 'collapse' }}>
                    <TableHead>
                        <TableRow
                            sx={{
                                background: 'linear-gradient(90deg, #664e9b, #8743fd)',
                            }}
                        >
                            {[
                                'Identifier',
                                'Make',
                                'Model',
                                'Year',
                                'Trim',
                                'Trim Description',
                            ].map((header) => (
                                <TableCell
                                    key={header}
                                    align="center"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        border: '1px solid #444',
                                    }}
                                >
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicleData.map((vehicle, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.id}
                                </TableCell>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.make}
                                </TableCell>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.model}
                                </TableCell>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.year}
                                </TableCell>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.trim}
                                </TableCell>
                                <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
                                    {vehicle.trimDescription}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ProductVehiclesTable;
