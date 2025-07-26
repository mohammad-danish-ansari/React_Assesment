import React from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Switch
} from '@mui/material';
import {
    Brightness7,
    Search,
    Notifications,
    AccountCircle,

} from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const TopBar = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#151521',
                    boxShadow: 'none',
                    borderBottom: '1px solid #444',
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: '40px !important',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <IconButton>
                            <Search
                                sx={{
                                    color: '#aaa',
                                    backgroundColor: '#464149ff',
                                    borderRadius: '50%',
                                    padding: '4px',
                                    height: '2rem',
                                    width: '2rem',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#5d5dc1ff',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />

                        </IconButton>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="">Theme</Typography>
                        {/* <Switch
              color="default"
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#464149ff",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#c87cff",
                },
              }}
            /> */}
                        <Switch
                            color="default"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            sx={{
                                width: 42,
                                height: 22,
                                padding: 0,
                                '& .MuiSwitch-switchBase': {
                                    padding: 0.5,
                                    '&.Mui-checked': {
                                        transform: 'translateX(20px)',
                                        '& .MuiSwitch-thumb': {
                                            backgroundImage: 'url(/sun.png)',
                                        },
                                        '& + .MuiSwitch-track': {
                                            backgroundColor: '#c87cff',
                                        },
                                    },
                                },
                                '& .MuiSwitch-thumb': {
                                    width: 15,
                                    height: 15,
                                    backgroundColor: '#fff',
                                    backgroundImage: 'url(/moon.png)',
                                    backgroundSize: '14px 14px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                },
                                '& .MuiSwitch-track': {
                                    borderRadius: 20,
                                    backgroundColor: '#888',
                                    opacity: 1,
                                },
                            }}
                        />



                        <Notifications
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />

                        <PublicIcon
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />

                        <HelpOutlineIcon
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />

                        <AccountCircle
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />

                    </Box>
                </Toolbar>
            </AppBar>


            <Box
                sx={{
                    backgroundColor: '#5d5dc1ff',
                    px: 3,
                    py: 1,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                <Typography variant="h6" fontWeight={600} color="white" >
                    <ArrowBackIosNewIcon
                        sx={{
                            fontSize: '1rem',
                            color: 'white', position: 'relative',
                            zIndex: 2, backgroundColor: 'black',
                            borderRadius: '50%', right: '2.4rem',
                            padding: '3px',
                            height: '1.8rem',
                            width: '1.8rem',
                            border: '1px solid white',
                            cursor:'pointer'
                        }}
                    />
                    Inventory
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontSize: '0.6rem', display: 'flex', gap: '4px' }}
                    ml="2rem"
                >
                    <Box component="span" color="white">All Products</Box>
                    &gt;
                    <Box component="span" color="#ff9aae">Surface Mount</Box>
                </Typography>
            </Box>
        </>
    );
};

export default TopBar;
